import React from 'react'

function GetAllEleves(props) {

    let eleves = props.eleves;

    return (
        <>
            {eleves && eleves.taille > 0 ? (
                eleves.data.map((eleve, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{eleve.nom}</td>
                            <td>{eleve.postnom}</td>
                            <td>{eleve.prenom}</td>
                            <td>{eleve.sexe}</td>
                            <td>
                                <td>
                                    {eleve.filieres && eleve.filieres !== "undefined" && eleve.filieres.nom}
                                </td>
                            </td>

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

export default GetAllEleves