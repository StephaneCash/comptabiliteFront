import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import GetAllEleves from '../components/eleves/GetAllEleves'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"

function Eleves() {
    const [dataExcel, setDataExcel] = useState([]);

    const [valueSearch, setValue] = useState('');
    const [etatMotif, setEtatMotif] = useState(false);
    const [id, setId] = useState(null);

    const location = useLocation();
    const { state } = location;

    const getAllExcelData = () => {
        axios.get('http://localhost:5000/api/read')
            .then(res => {
                setDataExcel(res.data);
            })
            .catch(err => {
                console.log(err.response)
            })
    };

    const handleMotif = (val) => {
        setEtatMotif(!etatMotif);
        setId(val.id)
    };

   // console.log(id)

    useEffect(() => {
        getAllExcelData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='d-flex main'>
                <div className='col-sm-2'>
                    <Leftbar />
                </div>
                <div className='col-sm-10'>
                    <div className='getAllEleves' style={{ padding: "1rem" }}>
                        <div className="alert alert-success">
                            <h6>Liste des étudiants classés par motif de payement <i className="fa fa-graduation-cap"></i></h6>
                            Nombre des étudiants {dataExcel && dataExcel.data !== undefined ? <>( {dataExcel.data.length} )</> : "Pas de données"}
                        </div>
                        <div className="alert alert-info grille">
                            {
                                dataExcel && dataExcel.data !== undefined && dataExcel.data !== null ?
                                    dataExcel.data.map((val, i) => {
                                        return (
                                            <div className='' key={val.id}>
                                                <button className={id === val.id ? 'btn btn-info motifSelected' : 'btn btn-info'}
                                                    onClick={() => handleMotif(val)}>
                                                    {val.motif}
                                                </button> {' '}
                                            </div>
                                        )
                                    }) : "Pas de données"
                            }
                        </div>
                        <div className='d-flex border p-2'>
                            <div className="col-sm-8">
                                <div className='col-sm-5'>
                                    <input type="search" className="form-control" 
                                    placeholder='Rechercher par numéro de référence'
                                        onChange={(e) => setValue(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <NavLink to="addEtudiant">
                                    <button style={{ float: "right" }} className='btn btn-primary'>
                                        Ajouter un étudiant</button>
                                </NavLink>
                            </div>
                        </div>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Nom</th>
                                    <th>Postnom</th>
                                    <th>Prénom</th>
                                    <th>Sexe</th>
                                    <th>Filière</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <GetAllEleves dataExcel={dataExcel} state={state} valueSearch={valueSearch} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eleves