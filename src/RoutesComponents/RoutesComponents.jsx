import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import AddNewEtudiant from '../components/eleves/AddNewEtudiant';
import Dashborad from '../pages/Dashborad';
import DataBank from '../pages/DataBank';
import Eleves from '../pages/Eleves';
import Inscription from '../pages/Inscription';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';

function RoutesComponents() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path='/inscription' element={<Inscription />} />
                    <Route path="/dashboard" element={<Dashborad />} />
                    <Route path="/etudiants" element={<Eleves />} />
                    <Route path="/bank" element={<DataBank />} />
                    <Route path="/bank/addFile" element={<AddNewEtudiant />} />
                </Route>
                <Route path='/' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponents