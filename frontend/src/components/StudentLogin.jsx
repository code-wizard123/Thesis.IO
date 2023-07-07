import React, { useState } from 'react';
import LoginCSS from '../css/Login.module.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const StudentLogin = () => {
    const navigate = useNavigate();
    let url = "";
    process.env.NODE_ENV === "production" ? (url = "") : (url = "http://localhost:3000");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, seterror] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(url + "/api/student/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })

        const json = await response.json()

        if (json.success) {
            console.log("Student login success")
            Cookies.set('jwt', json.authToken);
            navigate('/student/landing')
        }

        if (json.error) {
            seterror(json.error)
            setTimeout(() => {
                seterror(null)
            }, 4000)
        }
    }

    return (
        <div className={LoginCSS.outer}>
            <form className={LoginCSS.form} autoComplete='off' autoCorrect='on' onSubmit={(e) => handleSubmit(e)}>
                <h1 className={LoginCSS.formheader}>Student Login</h1>
                {error && <div> {error} </div>}
                <div>
                    <label className={LoginCSS.formlabel} htmlFor='username'>Email</label>
                    <input id="username" className={LoginCSS.input} type="email" onChange={(e) => setEmail(e.target.value)}></input>
                    <label className={LoginCSS.formlabel} htmlFor='password'>Password</label>
                    <input id="password" className={LoginCSS.input} type="password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default StudentLogin
