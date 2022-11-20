import React from 'react';
import { Card, CardContent, CardHeader, Grid, makeStyles } from "@material-ui/core";
import { Line, Bar } from "react-chartjs-2";
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

function Graphiques() {
    const classes = useStyles();

    const data5 = {
        labels: ['Nov 01', 'Nov 02', 'Nov 03', 'Nov 04', 'Nov 05', 'Nov 06', 'Nov 07', 'Nov 08', 'Nov 09', 'Nov 10', 'Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17', 'Nov 18', 'Nov 19', 'Nov 20', 'Nov 21'],
        datasets: [
            {
                label: 'Statistics ',
                data: [10, 16, 4, 6, 17, 11, 18, 11, 12, 9, 5, 26, 13, 7, 8, 12, 3, 12, 14, 14, 14, 11, 9, 7, 5],
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