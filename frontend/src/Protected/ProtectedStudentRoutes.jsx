import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import decode from 'jwt-decode'
import Cookies from 'js-cookie'

const checkAuth = () => {
    const cookie = Cookies.get("jwt")

    if(cookie){
        try{
            const decodedToken = decode(cookie)
            if(decodedToken.id){
                return decodedToken.role === "Student";
            }
            else{
                return false;
            }
        }
        catch(e){
            return true;
        }
    }
}

const ProtectedStudentRoutes = () => {
    let checker = checkAuth();
    useEffect(() => {
        checker = checkAuth();
    }, [])

    return (
        (checker) ? <Outlet /> : <Navigate to="/student/login" />
    )
}

export default ProtectedStudentRoutes
