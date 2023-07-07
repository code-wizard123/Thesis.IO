import React from 'react'
import NavbarCSS from '../css/Navbar.module.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className={NavbarCSS.navbar}>
            <button onClick={() => navigate('/student/login')}>Student Login</button>
            <button onClick={() => navigate('/mentor/login')}>Mentor Login</button>
            <button onClick={() => navigate('/student/signup')}>Student Signup</button>
            <button onClick={() => navigate('/mentor/login')}>Mentor Signup</button>
        </div>
    )
}

export default Navbar
