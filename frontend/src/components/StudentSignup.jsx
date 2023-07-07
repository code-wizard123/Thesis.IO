import React, {useState} from 'react';
import LoginCSS from '../css/Login.module.css';
import { useNavigate } from 'react-router-dom';

const StudentSignup = () => {
    const navigate = useNavigate();
    
    let url = "";
    process.env.NODE_ENV === "production" ? (url = "") : (url = "http://localhost:3000");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [select, setSelect] = useState('');
    const [imgurl, setImgurl] = useState('https://images.unsplash.com/photo-1688712645033-38bc029d8d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80');
    const [error , seterror] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ name, email, password, imgurl, select })
    
        const response = await fetch(url + "/api/student/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, imgurl, gender: select }),
        })

        const json = await response.json()

        if (json.success) {
            console.log("Student signup success")
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
                <h1 className={LoginCSS.formheader}>Student SignUp</h1>
                {error && <div className={LoginCSS.errordiv}> {error} </div>}
                <label className={LoginCSS.formlabel} htmlFor='name'>Name</label>
                <input id="name" className={LoginCSS.input} type="text" onChange={(e) => setName(e.target.value)}></input>
                <label className={LoginCSS.formlabel} htmlFor='username'>Email</label>
                <input id="email" className={LoginCSS.input} type="email" onChange={(e) => setEmail(e.target.value)}></input>
                <label className={LoginCSS.formlabel} htmlFor='password'>Password</label>
                <input id="password" className={LoginCSS.input} type="password" onChange={(e) => setPassword(e.target.value)}></input>
                <select id="gender" className={LoginCSS.select} onChange={(e) => setSelect(e.target.value)} value={select}>
                    <option value="">Select Your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="NA">Prefer Not Say</option>
                </select>
                <button type='submit' className={LoginCSS.submitbtn}>Sign Up!</button>
                
            </form>
        </div>
    )
}

export default StudentSignup
