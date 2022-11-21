import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, Grid, makeStyles } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { PeopleRounded } from '@material-ui/icons';
Chart.register(...registerables);

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

function Graphiques(props) {
    const classes = useStyles();

    let data = props.data;

    const [dates, setDates] = useState([]);
    const [arr, setArr] = useState([]);
    const [number, setNumber] = useState(null);
console.log(number)
    const data5 = {
        labels: dates.map(value => {
            return value.substring()
        }),
        datasets: [
            {
                label: 'Statistics ',
                data: dates.map(value => {
                    return number[`${value}`]
                }),
                fill: false,
                backgroundColor: '#3a68ad',
                borderColor: 'black',
                width: "23px"
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    };

    useEffect(() => {
        let array = [];
        if (data) {
            data && data.data && data.data.map((value) => {

                array.push(value.createdAt.substring(0, 10))
                let valuesUniques = [...new Set(array)]
                setDates(valuesUniques);
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
        setNumber(count)
    }, [arr]);

    return (
        <div className='graphiques'>
            <Grid sm={12} xs={12} item={true}>
                <Card className={classes.courbStatist} style={{ padding: "10px", marginTop: "10px" }}>
                    <Grid sm={12} xs={12} item={true} className={classes.courb} id="statics">
                        <Card>
                            <CardHeader
                                title="Courbe représentant la tendance de payement"
                                avatar={
                                    <PeopleRounded />
                                }
                                subheader="Représentation graphique de payement par mois"
                            />
                            <CardContent>
                                <Line
                                    data={data5}
                                    options={options}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Card>
            </Grid>
        </div>
    )
}

export default Graphiques