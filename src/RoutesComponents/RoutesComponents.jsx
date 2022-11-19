import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import AddNewEtudiant from '../components/eleves/AddNewEtudiant';
import Dashborad from '../pages/Dashborad';
import DataBank from '../pages/DataBank';
import Eleves from '../pages/Eleves';
import Inscription from '../pages/Inscription';
import Login from '../pages/Login';

function RoutesComponents() {
    let storageUser = localStorage.getItem("user");
    console.log(storageUser, " ::: USER")
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/inscription' element={<Inscription />} />
                <Route path="/dashboard" element={storageUser !== null ? <Dashborad /> : <Login />} />
                <Route path="/etudiants" element={storageUser !== null ? <Eleves /> : <Login />} />
                <Route path="/bank" element={storageUser !== null ? <DataBank /> : <Login />} />
                <Route path="/addFile" element={<AddNewEtudiant />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponents