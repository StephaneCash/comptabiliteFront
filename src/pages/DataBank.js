import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import GetDataBank from '../components/eleves/GetDataBank';
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"

function DataBank() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");

    const getAllUsers = () => {
        axios.get('http://localhost:5000/api/read')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err.response)
            })
    };

    useEffect(() => {
        getAllUsers();
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
                            <h6>Données de payement des étudiants <i className="fa fa-graduation-cap"></i></h6>
                            Nombre des étudiants {data && data.data !== undefined && data.data !== null ? <>( {data.data.length} )</> : "Pas de données"}
                        </div>
                        <div className='d-flex border p-2'>
                            <div className="col-sm-4">
                                <div className='col-sm-5'>
                                    <input type="search" className="form-control" placeholder='Rechercher...'
                                        onChange={(e) => setValue(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <NavLink to="/addFile">
                                    <button style={{ float: "right" }} className='btn btn-primary'>Importer un fichier</button>
                                </NavLink>
                            </div>
                        </div>
                        <table className='table table-striped table-bordered mt-3'>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Nom</th>
                                    <th>Postnom</th>
                                    <th>Prénom</th>
                                    <th>Sexe</th>
                                    <th>Filière</th>
                                    <th>Numéro Réf</th>
                                    <th>Montant</th>
                                    <th>Motif</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <GetDataBank data={data} valueSearch={value} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataBank