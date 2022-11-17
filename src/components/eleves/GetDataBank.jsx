import React from 'react'

function GetDataBank(props) {

    let data = props.data;

    console.log(data)

    return (
        <>
            {data && data.data ? (
                data.data.map((data, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{data.nom}</td>
                            <td>{data.postnom}</td>
                            <td>{data.prenom}</td>
                            <td>{data.sexe}</td>
                            <td>
                                {data.filieres && data.filieres !== "undefined" && data.filieres.nom}
                            </td>
                            <td>{data.numeroRef}</td>
                            <td>{data.montant}</td>
                            <td>{data.motif}</td>


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