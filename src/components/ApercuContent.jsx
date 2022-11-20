import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography, makeStyles } from "@material-ui/core";
import { Group } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
    griddash: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
    },
    stat: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            marginTop: "10px"
        }
    },
    courb: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            marginTop: "10px"
        }
    },
    courbStatist: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
    },
}));


function ApercuContent(props) {
    const classes = useStyles();
    const [filieres, setFilieres] = useState([]);
    const [arr, setArr] = useState([]);

    const [lengthFiliere, setLengthFiliere] = useState(null);

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

    useEffect(() => {
        let array = [];
        if (data) {
            data && data.data && data.data.map((value) => {
                array.push(value.filiere)
                let valuesUniques = [...new Set(array)]
                setFilieres(valuesUniques);
                setArr(array);
            })
        }
    }, [data])

    useEffect(() => {
        let count = {};
        if (arr) {
            arr.forEach(element => {
                count[element] = (count[element] || 0) + 1;
            })
        }
        setLengthFiliere(count)
    }, [arr]);

    return (
        <div className='contentDashboardEvaluate'>
            <div className='alert' style={{ backgroundColor: "#efefef" }}>
                <div className="grilleApercu">
                    {
                        filieres ? filieres.length > 0 ?
                            filieres.map((value, i) => {
                                return (
                                    <Grid className={classes.stat} key={i}
                                        item={true} id="stat">
                                        <Card>
                                            <CardHeader
                                                title="Frais"
                                                avatar={
                                                    <Group />
                                                }
                                                subheader={`Etudiants de ${value}`}
                                            />
                                            <div className="d-flex">
                                                <CardContent>
                                                    <Typography variant="h5" style={{ color: "#555" }}>
                                                        {lengthFiliere[`${value}`]}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Link to={{ pathname: "/etudiants" }} state={{ val: value }}>
                                                        <Button
                                                            className='btn-voir-tout'
                                                            variant="contained"
                                                            size="small"
                                                            style={{
                                                                backgroundColor: "#0c50a2",
                                                                color: "#fff",
                                                            }}>V<span className="span" style={{ textTransform: "lowercase" }}>oir tout</span></Button>
                                                    </Link>
                                                </CardActions>
                                            </div>
                                        </Card>
                                    </Grid>
                                )
                            })
                            : "Serveur down" : "Pas de data"
                    }
                </div>
            </div>
        </div>
    )
}

export default ApercuContent