import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import GetDataBank from '../components/eleves/GetDataBank';
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"

function DataBank() {
    const [data, setData] = useState([]);
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
                    <div className='getAllEleves' style={{ border: "1px solid silver", paddingTop: "1rem" }}>
                        <div className='col-sm-5'>
                            <input type="search" className="form-control" placeholder='Rechercher...' />
                            <NavLink to="/addFile">
                                <button className='btn btn-primary mt-3'>Importer un fichier</button>
                            </NavLink>
                        </div>
                        <table className='table table-striped'>
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
                                <GetDataBank data={data} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataBank