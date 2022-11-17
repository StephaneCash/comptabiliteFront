import React from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography, makeStyles } from "@material-ui/core";
import { Announcement, ApartmentTwoTone, Group, MonetizationOn, PeopleRounded, PostAddTwoTone } from "@material-ui/icons";
import { Link } from 'react-router-dom';


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


function ApercuContent() {
    const classes = useStyles();

    return (
        <div className='contentDashboardEvaluate'>
            <Grid sm={4} xs={4} className={classes.stat} item={true} id="stat">
                <Card>
                    <CardHeader
                        title="Commandes"
                        avatar={
                            <Group />
                        }
                        subheader="Nombre total des utilisateurs"
                    />
                    <div className="d-flex">
                        <CardContent>
                            <Typography variant="h5" style={{ color: "#555" }}></Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/commandes">
                                <Button
                                    className='btn-voir-tout'
                                    variant="contained"
                                    size="small"
                                    style={{
                                        backgroundColor: "#0c50a2",
                                        color: "#fff",
                                    }}>V<span className="span" >oir tout</span></Button>
                            </Link>
                        </CardActions>
                    </div>
                </Card>
            </Grid>
            <Grid sm={4} xs={4} item={true} className={classes.stat} id="stat">
                <Card>
                    <CardHeader
                        title="Produits"
                        avatar={
                            <Announcement />
                        }
                        subheader="Nombre total des produits"
                    />
                    <div className="d-flex">
                        <CardContent>
                            <Typography variant="h5" style={{ color: "#555" }}>
                            H
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/produits">
                                <Button
                                    className='btn-voir-tout'
                                    variant="contained"
                                    size="small" style={{ backgroundColor: "#0c50a2", color: "#fff" }}>
                                    V<span className="span">oir tout</span>
                                </Button>
                            </Link>
                        </CardActions>
                    </div>
                </Card>
            </Grid>

            <Grid sm={4} xs={4} item={true} className={classes.stat} id="stat">
                <Card>
                    <CardHeader
                        title="Catégories"
                        avatar={
                            <ApartmentTwoTone />
                        }
                        subheader="Nombre total de Catégories"
                    />
                    <div className="d-flex">
                        <CardContent>
                            <Typography variant="h5" style={{ color: "#555" }}>
                                Down
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/categories">
                                <Button
                                    className='btn-voir-tout'
                                    variant="contained"
                                    size="small"
                                    style={{ backgroundColor: "#0c50a2", color: "#fff" }}>
                                    V<span className="span">oir tout</span>
                                </Button>
                            </Link>
                        </CardActions>
                    </div>
                </Card>
            </Grid>
        </div>
    )
}

export default ApercuContent