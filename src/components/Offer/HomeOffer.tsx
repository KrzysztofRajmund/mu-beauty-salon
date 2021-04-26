import React, { useState } from 'react';
//material-ui
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
//assets
import Hand from "../../assets/hand.png";
import Legs from "../../assets/legs.png";
import Face from "../../assets/face.png";
//router
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            color: "#2b2b2b",
            textAlign: "center",
            fontSize: "2.7rem",
            textTransform: "uppercase",
            margin: "8rem 5rem 0rem 5rem",
            '&::after': {
                display: "block",
                width: "50px",
                height: "3px",
                background: "rgb(255, 204, 213)",
                margin: "2rem auto 0",
                content: '""',
            }
        },

        root: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            flexWrap: 'wrap',
            height: "70vh",
            margin: "2rem 5rem 5rem 5rem",
            '& > *': {
                margin: theme.spacing(5),
                width: theme.spacing(28),
                height: theme.spacing(28),
            },
            [theme.breakpoints.down('sm')]: {
                '& > *': {
                    width: theme.spacing(26),
                    height: theme.spacing(26),

                },
            },
            [theme.breakpoints.down('md')]: {
                height: "100%",
            },
        },

        link: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            " &:focus, &:hover, &:visited, &:link, &:active": {
                textDecoration: "none",
            }

        },
        paperCard: {
            height: "25rem",
            width: "25rem",
            backgroundColor: "#f0f7f295",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "all 3s easy-in-out",
            border: "2px solid #f0f7f2",
            [theme.breakpoints.down('md')]: {
                height: "23rem",
                width: "23rem",
            },
        },
        avatar: {
            height: "10rem",
            width: "10rem",
            margin: "1.2rem 0 1.5rem 0",
        },
        cardTitle: {
            textAlign: "center",
            fontSize: "2.2rem",
            minHeight: "5rem",
            margin: "auto 0",
        },

    }));

const HomeOffer: React.FC = () => {
    const classes = useStyles();
    const [shadowFirst, setShadowFirst] = useState<any>("outlined")
    const [shadowSecond, setShadowSecond] = useState<any>("outlined")
    const [shadowThird, setShadowThird] = useState<any>("outlined")

    const shadowFunc = (variantName: string, shadowName: string) => {
        if (shadowName === "first") {
            setShadowFirst(variantName)
        }
        if (shadowName === "second") {
            setShadowSecond(variantName)
        }
        if (shadowName === "third") {
            setShadowThird(variantName)
        }
    }

    return (
        <React.Fragment>
            <Typography className={classes.title}>
                Zabiegi
        </Typography>
            <div className={classes.root}>

                <Link to="/zabiegi" className={classes.link}>
                    <Paper variant={shadowFirst} elevation={6} className={classes.paperCard} onMouseEnter={() => shadowFunc("elevation", "first")} onMouseLeave={() => shadowFunc("outlined", "first")} >
                        <Avatar variant="square" alt="image" src={Face} className={classes.avatar} />
                        <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                            Zabiegi na twarz / Makijaż
        </Typography>

                    </Paper>
                </Link>
                <Link to="/zabiegi" className={classes.link}>
                    <Paper variant={shadowSecond} elevation={6} className={classes.paperCard} onMouseEnter={() => shadowFunc("elevation", "second")} onMouseLeave={() => shadowFunc("outlined", "second")}>
                        <Avatar variant="square" alt="image" src={Legs} className={classes.avatar} />
                        <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                            Depilacja
        </Typography>
                    </Paper>
                </Link>
                <Link to="/zabiegi" className={classes.link}>
                    <Paper variant={shadowThird} elevation={6} className={classes.paperCard} onMouseEnter={() => shadowFunc("elevation", "third")} onMouseLeave={() => shadowFunc("outlined", "third")}>
                        <Avatar variant="square" alt="image" src={Hand} className={classes.avatar} />
                        <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                            Mezoterapia
        </Typography>
                    </Paper>
                </Link>

            </div>
        </React.Fragment>
    );
}

export default HomeOffer;
