import React from 'react';
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        user && user.jeton !== null ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoute