import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetAllEleves from '../components/eleves/GetAllEleves'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"

function Eleves() {
    const [eleves, setEleves] = useState([]);
    const getAllUsers = () => {
        axios.get('http://localhost:5000/api/etudiants')
            .then(res => {
                console.log(res.data)
                setEleves(res.data);
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
                        <table className='table table-striped'>
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
                                <GetAllEleves eleves={eleves} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eleves