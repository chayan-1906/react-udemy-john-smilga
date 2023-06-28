import React from 'react'
import {Navigate, useNavigate} from "react-router-dom"

export const ProtectedRoute = ({children, user}) => {
    const navigate = useNavigate()

    if (!user) {
        return <Navigate to='/'/>
    }
    return children
}
