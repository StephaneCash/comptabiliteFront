import { Modal } from "react-bootstrap";
import React from 'react'
import {dateParserFunction} from "../Utils";


const DetailEtudiant = (props) => {
    const closeModal = props.closeModal;
    let valueDetail = props.valueDetail;

    const styleBtn = { border: "1px solid silver" }

    return (
        <Modal show={props.showModalDetail} id='modal' style={{marginTop:'4rem'}}>
            <Modal.Header style={{ backgroundColor: '#0c50a2', color: '#fff' }}>
                Detail Etudiant <i className="fa fa-info"></i>
            </Modal.Header>
            <Modal.Body>
                <div className="col-sm-12">
                    <div className="alert alert-success">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Postnom</th>
                                    <th>Promotion</th>
                                    <th>Sexe</th>
                                    <th>Filière</th>
                                    <th>Motif</th>
                                    <th>Numéro de référence</th>
                                    <th>Date de payement</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{valueDetail.nom}</td>
                                    <td>{valueDetail.postnom}</td>
                                    <td>{valueDetail.prenom}</td>
                                    <td>{valueDetail.sexe}</td>
                                    <td>{valueDetail.filiere}</td>
                                    <td>{valueDetail.motif}</td>
                                    <td>{valueDetail.numeroRef}</td>
                                    <td>{dateParserFunction(valueDetail.createdAt)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer style={{ paddingRight: "30px" }}>
                <button className='btn' style={styleBtn} onClick={closeModal}>Fermer <i className="fa fa-close"></i></button>
            </Modal.Footer>
        </Modal>
    )
}
export default DetailEtudiant;