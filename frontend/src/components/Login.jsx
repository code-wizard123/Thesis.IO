import React, {useState} from 'react';
import LoginCSS from '../css/Login.module.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(username && password && username.length !== 0 && password.length.length !== 0){
            console.log("Submitted Login Form");
            console.log(username, password);
        }
    }

    return (
        <div className={LoginCSS.outer}>
            <form className={LoginCSS.form} autoComplete='off' autoCorrect='on' onSubmit={(e) => handleSubmit(e)}>
                <h1 className={LoginCSS.formheader}>Login</h1>
                <label className={LoginCSS.formlabel} htmlFor='username'>Username</label>
                <input id="username" className={LoginCSS.input} type="text" onChange={(e) => setUsername(e.target.value)}></input>
                <label className={LoginCSS.formlabel} htmlFor='password'>Password</label>
                <input id="password" className={LoginCSS.input} type="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login
