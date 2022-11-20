import React, { useEffect, useState } from 'react'
import ApercuContent from '../components/ApercuContent';
import Leftbar from '../components/Leftbar';
import Navbar from '../components/Navbar';
import "../css/Dashboard.css";
import Graphiques from '../components/Graphiques';
import axios from 'axios';

function Dashborad() {
    const [data, setData] = useState([]);

    const getAllDataBank = () => {
        axios.get('http://localhost:5000/api/read')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err.response)
            })
    };

    useEffect(() => {
        getAllDataBank();
    }, []);

    return (
        <>
            <Navbar />
            <div className='d-flex main'>
                <div className='col-sm-2'>
                    <Leftbar />
                </div>
                <div className='col-sm-10 p-3'>
                    <ApercuContent data={data} />
                    <Graphiques />
                </div>
            </div>
        </>
    )
}

export default Dashborad