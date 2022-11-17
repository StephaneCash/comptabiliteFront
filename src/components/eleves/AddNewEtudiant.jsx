import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Leftbar from '../Leftbar'
import Navbar from '../Navbar'

function AddNewEtudiant() {
    const [data, setData] = useState([]);
    let navigate = useNavigate();
    console.log(data)
    const sauveData = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', data)
        axios.post('http://localhost:5000/api/read', formData)
            .then(res => {
                if (res.status === 200) {
                    navigate("/bank")
                }
            })
            .catch(err => {
                console.log(err.response)
            })
    };

    return (
        <div>
            <Navbar />
            <div className='d-flex main'>
                <div className='col-sm-2'>
                    <Leftbar />
                </div>
                <div className='col-sm-10'>
                    <div className='getAllEleves col-sm-6' style={{ border: "1px solid silver", paddingTop: "1rem" }}>
                        <br />

                        <form>
                            <label>Chosir un fichier à importer, uniquement Excel</label>
                            <br />
                            <br />
                            <input type="file" className='form-control' onChange={(e) => setData(e.target.files[0])} />
                            <br />
                            <button className='btn btn-success' onClick={sauveData}>Sauvegarder</button>
                            <br />
                        </form>
                        <br />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewEtudiant