if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express')
const db = require('../config/dbconfig')

const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const router = express.Router()

const createToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.SECRET, {
        expiresIn: 3 * 24 * 60 * 60
    });
}

router.post('/signup', async (req, res) => {

    let hashpass = " "

    try {

        if (!req.body.password || !req.body.email ||  !req.body.gender || !req.body.name) {
            throw Error('All fields must be filled')
        }

        if (!validator.isEmail(req.body.email)) {
            throw Error('Please enter a valid email')
        }

        if (!validator.isStrongPassword(req.body.password, { minLength: 8, minUppercase: 0, minSymbols: 0 })) {
            throw Error('Password not strong enough')
        }

        const salt = await bcrypt.genSalt(12)
        hashpass = await bcrypt.hash(req.body.password, salt);


    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

    const values = [hashpass, req.body.email, req.body.gender, req.body.name]

    db.query('INSERT INTO MENTOR (name , email , gender , password) VALUES($4 , $2, $3, $1 )', values, (error, results) => {
        if (error) {
            res.status(500).json({ error: `Error in insertion : ${error}` })
        }
        else {
            res.json({ success: true })
        }
    })

})

router.post('/login', async (req, res) => {

    try {

        if (!req.body.email || !req.body.password) {
            throw Error('All fields must be filled')
        }

        const values = [req.body.email]

        const query = 'SELECT * FROM MENTOR WHERE email = $1';

        const { rows } = await db.query(query, values);

        if (rows.length === 0) {
            return res.status(400).json({ error: 'User not found' });
        }

        const dbhasp = rows[0].password;
        const dbid = rows[0].std_uuid;

        const match = await bcrypt.compare(req.body.password, dbhasp);

        if (!match) {
            return res.status(400).json({ error: 'Password incorrect' });
        } else {
            const token = createToken(dbid, 'Mentor');
            return res.json({ success: true, authToken: token });
        }

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

})

module.exports = router
