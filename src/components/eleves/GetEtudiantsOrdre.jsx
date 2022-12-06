import React, { useEffect } from 'react'

function GetEtudiantsOrdre(props) {

    let dataExcel = props.dataExcel;
    let state = props.state;
    let valMotif = props.valMotif;
    let valueSearch = props.valueSearch;

    const prixEnOrdre = props.prixEnOrdre;

    console.log(dataExcel)

    useEffect(() => {
        if (state === undefined && state === null) {
            state = '';
        }
    }, []);

    return (
        <>
            {dataExcel && dataExcel.data ? (
                dataExcel.data.filter((data) => {
                    if (valMotif && valMotif.substring(0, 1) === "fr") {
                        return data.montant == 400000
                    } else {
                        return data.filiere.includes(state ? state.val : "") && data.motif.includes(valMotif ? valMotif : "")
                            && data.numeroRef.includes(valueSearch ? valueSearch : "")
                    }
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
                            <td>{bank.motif}</td>
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
        </>
    )
}

export default GetEtudiantsOrdre