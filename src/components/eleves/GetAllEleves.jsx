import React, { useEffect, useState } from 'react'
import DetailEtudiant from './DetailEtudiant';

function GetAllEleves(props) {

    let dataExcel = props.dataExcel;
    let state = props.state;
    let valMotif = props.valMotif;
    let valueSearch = props.valueSearch;

    const [showModalDetail, setShowModalDetail] = useState(false);

    const [valueDetail, setValueDetail] = useState({});

    const handleShowModal = (value) => {
        setValueDetail(value);
        setShowModalDetail(true);
    }

    const closeModal = () =>{
        setShowModalDetail(false);
    }

    useEffect(() => {
        if (state === undefined && state === null) {
            state = '';
        }
    }, []);

    return (
        <>
            {dataExcel && dataExcel.data ? (
                dataExcel.data.filter((data) => {
                    return data.filiere.includes(state ? state.val : "") && data.motif.includes(valMotif ? valMotif : "") && data.numeroRef.includes(valueSearch ? valueSearch : "")
                }).map((bank, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{bank.nom}</td>
                            <td>{bank.postnom}</td>
                            <td>{bank.prenom}</td>
                            <td>{bank.sexe}</td>
                            <td>
                                {bank.filiere}
                            </td>
                            <td>{valueSearch ? bank.numeroRef : "********"}</td>
                            <td>{bank.montant}</td>
                            <td>{bank.motif}</td>

                            <td style={{ width: "140px" }}>
                                <button className='btn btn-success' onClick={() => handleShowModal(bank)}>
                                    <i className='fa fa-info'></i> Détail
                                </button>
                            </td>
                        </tr>
                    )
                })

            ) :
                <tr>
                    <td colSpan='10px' className='text-center'>
                        <i className='fa fa-spinner fa-pulse fa-2x'></i> Chargement...
                    </td>
                </tr>
            }
            <DetailEtudiant showModalDetail={showModalDetail} closeModal={closeModal} valueDetail={valueDetail}/>
        </>
    )
}

export default GetAllEleves