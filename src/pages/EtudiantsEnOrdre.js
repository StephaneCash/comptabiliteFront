import axios from 'axios';
import React, { useEffect, useState, useRef, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import GetEtudiantsOrdre from '../components/eleves/GetEtudiantsOrdre';
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"
import ReactToPrint from "react-to-print";
import { UidContext } from "../ContextUid";


function EtudiantsEnOrdre() {
    const [dataExcel, setDataExcel] = useState([]);

    const componentPrint = useRef();

    const [valueSearch, setValue] = useState('');
    const [etatMotif, setEtatMotif] = useState(false);
    const [id, setId] = useState(null);
    const [valMotif, setValMotif] = useState('');
    const [dataUniques, setDataUniques] = useState([]);

    const location = useLocation();
    const { state } = location;

    const prixEnOrdre = {
        Frais_Academique: 400000,
        inscription: 20000,
        enrolement: 20000,
        preinscription: 30000
    }

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
        setId(val)
        setValMotif(val);
    };

    useEffect(() => {
        getAllExcelData();
    }, []);

    useEffect(() => {
        let array = [];
        if (dataExcel) {
            dataExcel && dataExcel.data && dataExcel.data.map((value) => {
                array.push(value.motif)
                let valuesUniques = [...new Set(array)]
                setDataUniques(valuesUniques);
            })
        }
    }, [dataExcel]);

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
                            <h6>Liste des ??tudiants class??s par motif de payement en ordre <i className="fa fa-graduation-cap"></i></h6>
                            <br />
                            <div className='alert alert-primary'>
                                SOLDE : <br />
                                {prixEnOrdre && "Frais acad??miques : " + prixEnOrdre.Frais_Academique + ` CDF ,  `
                                    + "Enrolement : " + prixEnOrdre.enrolement + ` CDF,    `
                                    + "Inscription : " + prixEnOrdre.inscription + ` CDF,   `

                                }
                            </div>
                        </div>
                        <div className="alert alert-info grille">
                            {
                                dataUniques && dataUniques ?
                                    dataUniques.map((val, i) => {
                                        return (
                                            <div className='' key={i}>
                                                <button className={id === val ? 'btn btn-info motifSelected' : 'btn btn-info'}
                                                    onClick={() => handleMotif(val)}>
                                                    {val}
                                                </button> {' '}
                                            </div>
                                        )
                                    }) : <i className='text-dark'>"Pas de donn??es"</i>
                            }
                        </div>
                        <div className='border p-2'>

                            <input type="search" style={{ width: "40%" }} className="form-control"
                                placeholder='Rechercher par num??ro de r??f??rence'
                                onChange={(e) => setValue(e.target.value)} />
                            <ReactToPrint
                                trigger={
                                    () =>
                                        <button className='btn mt-2' style={{ border: "1px solid silver" }}>
                                            Imprimer <i className='fa fa-print'></i>
                                        </button>
                                }
                                content={() => componentPrint.current}
                            />
                        </div>
                        <div ref={componentPrint}>
                            <table className='table table-striped table-bordered'>
                                <thead>
                                    <tr>
                                        <th>N??</th>
                                        <th>Nom</th>
                                        <th>Postnom</th>
                                        <th>Pr??nom</th>
                                        <th>Sexe</th>
                                        <th>Fili??re</th>
                                        <th>Motif</th>
                                        <th>Montant</th>
                                        <th>Num??ro r??f??rence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <GetEtudiantsOrdre prixEnOrdre={prixEnOrdre} dataExcel={dataExcel} state={state} valueSearch={valueSearch} valMotif={valMotif} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EtudiantsEnOrdre