import React from 'react'

function GetDataBank(props) {

    let data = props.data;
    let valueSearch = props.valueSearch;

    return (
        <>
            {data && data.data ? (
                data.data.filter((data) => {
                    return data.nom.toLowerCase().includes(valueSearch);
                }).map((bank, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{bank.nom}</td>
                            <td>{bank.postnom}</td>
                            <td>{bank.prenom}</td>
                            <td>{bank.sexe}</td>
                            <td>
                                {bank.filieres && bank.filieres !== "undefined" && bank.filieres.nom}
                            </td>
                            <td>{bank.numeroRef}</td>
                            <td>{bank.montant}</td>
                            <td>{bank.motif}</td>


                            <td>
                                <i className='fa fa-edit me-2'></i>
                                <i className='fa fa-trash'></i>
                            </td>
                        </tr>
                    )
                })

            ) :
                <tr>
                    <td colSpan='7px' className='text-center'>
                        <i className='fa fa-spinner fa-pulse fa-2x'></i> Chargement...
                    </td>
                </tr>
            }

        </>
    )
}

export default GetDataBank