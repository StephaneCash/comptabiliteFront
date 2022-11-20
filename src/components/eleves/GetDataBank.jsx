import React from 'react'

function GetDataBank(props) {

    let data = props.data;
    let valueSearch = props.valueSearch;

    return (
        <>
            {data && data.data ? (
                data.data.filter((data) => {
                    return data.numeroRef.includes(valueSearch);
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
                                <button className='btn btn-outline-primary'>
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

        </>
    )
}

export default GetDataBank