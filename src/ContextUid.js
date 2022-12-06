import React, { useState, useEffect } from 'react'
import App from "./App";
import axios from "axios";

export const UidContext = React.createContext();

const ContextUid = () => {

    const [id, setId] = useState(null);
    const [data, setData] = useState(null);

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        const getOneUser = () => {
            axios.get(`http://localhost:5000/api/users/${id && id}`)
                .then(resp => {
                    setData(resp.data);
                })
                .catch(err => {
                    console.log(err)
                });
        }
        getOneUser();
    }, [id]);

    useEffect(() => {
        if (user) {
            setId(user.id);
        }
    }, [user])

    return (
        <div>
            <UidContext.Provider value={{ data, setData }}>
                <App />
            </UidContext.Provider>
        </div>
    )
}

export default ContextUid