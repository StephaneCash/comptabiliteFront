import { AppBar, Avatar, Badge, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Mail, Notifications, SettingsPower } from "@material-ui/icons";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UidContext } from "../ContextUid";

const useStyles = makeStyles((theme) => ({
    tooBar: {
        display: "flex",
        justifyContent: 'space-between',
        backgroundColor: '#0c50a2'
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    icons: {
        display: "flex",
        alignItems: "center"
    },
    badge: {
        marginRight: theme.spacing(2),
    },
    logout: {
        marginLeft: theme.spacing(1),
        cursor: "pointer"
    }
}));

const Navbar = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const { data } = useContext(UidContext);


    const handleNotif = () => {
        alert('Service non disoinible, maintenance en cours..., contacter le développeur !!!')
    }

    const handleDeconnect = () => {
        localStorage.removeItem("user");
        navigate("/")
    };

    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.tooBar}>
                    <Typography variant="h6" component="h2" className={classes.logoLg}>
                        App
                    </Typography>
                    <Typography variant="h6" component="h2" className={classes.logoSm}>
                        App
                    </Typography>
                    <div className={classes.icons}>
                        <div className="me-3">{data && data.data && data.data.nom}</div>
                        <Badge badgeContent={3} overlap="rectangular"
                            onClick={handleNotif}
                            style={{ cursor: "pointer" }}
                            color="secondary" className={classes.badge}>
                            <Mail />
                        </Badge>
                        <Badge overlap="rectangular"
                            onClick={handleNotif}
                            badgeContent={"1"} style={{ color: "#fff", cursor: "pointer" }}
                            color="secondary" className={classes.badge}>
                            <Notifications />
                        </Badge>
                        <Avatar style={{ backgroundColor: "#555" }} src="s" >
                            {data && data.data && data.data.nom.charAt(0).toUpperCase()}
                        </Avatar>
                        <SettingsPower className={classes.logout} onClick={handleDeconnect} />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;