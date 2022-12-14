import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Leftbar from '../Leftbar'
import Navbar from '../Navbar'

function AddNewEtudiant() {
    const [data, setData] = useState([]);
    let navigate = useNavigate();
    const [etatBtn, setEtatBtn] = useState(false);

    const sauveData = (e) => {
        e.preventDefault();
        setEtatBtn(true);
        if (data.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
            swal({
                icon: "error",
                text: 'Format non pris en charge, seul XLS sont autorisés.'
            });
            setEtatBtn(false);
        } else {
            const formData = new FormData();
            formData.append('file', data)
            axios.post('http://localhost:5000/api/read', formData)
                .then(res => {
                    if (res.status === 200) {
                        navigate("/bank")
                    }
                    setEtatBtn(false);
                })
                .catch(err => {
                    console.log(err.response);
                    setEtatBtn(false);
                })
        }
    };

    return (
        <div>
            <Navbar />
            <div className='d-flex main'>
                <div className='col-sm-2'>
                    <Leftbar />
                </div>
                <div className='col-sm-10'>
                    <div className='getAllEleves col-sm-6' style={{ padding: "1rem" }}>
                        <br />
                        <div className="alert alert-success">Importer votre fichier Excel</div>
                        <form>
                            <label>Chosir un fichier à importer, uniquement Excel</label>
                            <br />
                            <br />
                            <input type="file" className='form-control' onChange={(e) => setData(e.target.files[0])} />
                            <br />
                            <button className='btn btn-success' onClick={sauveData}>
                                {etatBtn === true ? <i className="fa fa-spinner fa-pulse"></i> : "Sauvegarder"}
                            </button>
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