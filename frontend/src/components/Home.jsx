import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login')
    }

    return (
        <div>
            <button onClick={handleLoginClick}>Login</button>
        </div>
    )
}

export default Home
