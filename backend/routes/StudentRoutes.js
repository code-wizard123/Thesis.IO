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

router.get('/givemeinfo/:std_id' , async (req , res) => {

    try {
        const {std_id} = req.params
        
        const query = 'SELECT * FROM student WHERE std_uuid = $1';

        const { rows } = await db.query(query, [std_id]);
        
        res.json({success : true , info : rows[0]})

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

})

router.post('/signup', async (req, res) => {

    let hashpass = " "
    const values2 = [req.body.email]

    try {

        if (!req.body.password || !req.body.email || !req.body.imgurl || !req.body.gender || !req.body.name) {
            throw Error('All fields must be filled')
        }

        if (!validator.isEmail(req.body.email)) {
            throw Error('Please enter a valid email')
        }

        if (!validator.isStrongPassword(req.body.password, { minLength: 8, minUppercase: 0, minSymbols: 0 })) {
            throw Error('Password not strong enough')
        }

        const query = 'SELECT * FROM STUDENT WHERE email = $1';
        const { rows } = await db.query(query, values2);

        if (rows.length !== 0) {
            throw Error('Email already in use')
        }

        const salt = await bcrypt.genSalt(12)
        hashpass = await bcrypt.hash(req.body.password, salt);


    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

    const values = [hashpass, req.body.email, req.body.imgurl, req.body.gender, req.body.name]

    db.query('INSERT INTO STUDENT (name , email , gender , img , password) VALUES ($5 , $2, $4, $3, $1 )', values, (error, results) => {
        if (error) {
            res.status(500).json({ error: `Error in insertion : ${error}` })
        }
    })

    const query = 'SELECT * FROM STUDENT WHERE email = $1';

    const { rows } = await db.query(query, values2);
    const token = createToken(rows[0].std_uuid, 'Student');

    return res.json({ success: true, authToken: token });

})

router.post('/login', async (req, res) => {

    try {

        if (!req.body.email || !req.body.password) {
            throw Error('All fields must be filled')
        }

        const values = [req.body.email]

        const query = 'SELECT * FROM STUDENT WHERE email = $1';

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
            const token = createToken(dbid, 'Student');
            return res.json({ success: true, authToken: token });
        }

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

})

router.post('/addtask', async (req, res) => {

    try {
        const values = [req.body.std_id, req.body.text, req.body.due]

        db.query('INSERT INTO TODO (std_uuid , content , due) VALUES ($1 , $2, $3)', values, (error, results) => {
            if (error) {
                return res.status(500).json({ error: `Error in insertion : ${error}` })
            }

            const values2 = [req.body.std_id]
            const query = 'SELECT * FROM TODO WHERE std_uuid = $1';
            db.query(query, values2)
                .then(data => {
                    return res.json({ success: true, alltodo: data.rows })
                })
                .catch(error => {
                    return res.status(500).json({ error: `Error in selection : ${error}` })
                })
        })

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

})

router.post('/donetask/:id', async (req, res) => {

    try {
        
        const {id} = req.params

        db.query('UPDATE todo SET status = $1 WHERE todo_id = $2' , [req.body.done , id] ,(error , results) => {
            if (error) {
                return res.status(500).json({ error: `Error in updation : ${error}` })
            }

            return res.json({success : true})
        })

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

})

router.post('/deletetask/:id', async (req, res) => {

    try {
        
        const {id} = req.params

        db.query('DELETE FROM todo WHERE todo_id = $1' , [id] ,(error , results) => {
            if (error) {
                return res.status(500).json({ error: `Error in deletion : ${error}` })
            }

            return res.json({success : true})
        })

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

})

router.post('/getalltodo/:std_id'  , async(req , res) => {

    try {

        const {std_id} = req.params
        
        const query = 'SELECT * FROM todo WHERE std_uuid = $1';

        const { rows } = await db.query(query, [std_id]);
        
        res.json({success : true , alltodo : rows})

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

module.exports = router

// router.get('/temp' , (req , res) => {

//     db.query('SELECT * from student' , (error , results) => {
//         if(error){
//             res.json(error)
//         }
//         else{
//             res.json(results)
//         }
//     })
// })

// router.post('/temp' , (req , res) => {

//     const values = [req.body.email, req.body.name]

//     db.query('INSERT INTO STUDENT (name , email) VALUES ($1 , $2 )', values , (error , results) => {
//         if(error){
//             res.json(error)
//         }
//         else{
//             res.json("Done boi")
//         }
//     })
// }) 