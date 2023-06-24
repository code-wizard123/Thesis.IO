import React, {useState} from 'react';
import LoginCSS from '../css/Login.module.css';

const StudentSignup = () => {
    const [uemail, setEmail] = useState('');
    const [upassword, setPassword] = useState('');
    const [error , seterror] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch("/api/student/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: uemail, password: upassword}),
        })

        const json = await response.json()

        if (json.success) {
            console.log("Student signup success")
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
                <h1 className={LoginCSS.formheader}>Login</h1>
                <label className={LoginCSS.formlabel} htmlFor='username'>Email</label>
                <input id="username" className={LoginCSS.input} type="email" onChange={(e) => setEmail(e.target.value)}></input>
                <label className={LoginCSS.formlabel} htmlFor='password'>Password</label>
                <input id="password" className={LoginCSS.input} type="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Submit</button>
                {error && <div> {error} </div>}
            </form>
        </div>
    )
}

export default StudentSignup
