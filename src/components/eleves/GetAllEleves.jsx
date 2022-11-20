import React, {useEffect} from 'react'

function GetAllEleves(props) {

    let dataExcel = props.dataExcel;
    let state = props.state;

    useEffect(() => {
        if (state === undefined && state === null) {
            state='';
        }
    }, []);

    return (
        <>
            {dataExcel && dataExcel.data ? (
                dataExcel.data.filter((data) => {
                    return data.filiere.includes(state ? state.val : "");
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
                            <td>{state ? bank.numeroRef : "********"}</td>
                            <td>{bank.montant}</td>
                            <td>{bank.motif}</td>

                            <td style={{ width: "140px" }}>
                                <button className='btn btn-success'>
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

export default GetAllEleves