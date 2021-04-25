import React, { useState } from 'react'
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

        root: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            flexWrap: 'wrap',
            height: "90vh",
            '& > *': {
                margin: theme.spacing(5),
                width: theme.spacing(28),
                height: theme.spacing(28),
            },
            [theme.breakpoints.down('sm')]: {
                '& > *': {
                    margin: theme.spacing(4),
                    width: theme.spacing(26),
                    height: theme.spacing(26),

                },
            },
            [theme.breakpoints.down('xs')]: {
                height: "100%",
            },
        },

        link: {
            " &:focus, &:hover, &:visited, &:link, &:active": {
                textDecoration: "none",
            }

        },
        paperCard: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "all 3s easy-in-out",
            border: "2px solid #f0f7f2",
        },
        avatar: {
            height: "10rem",
            width: "10rem",
            margin: "1.2rem 0 1.5rem 0",
        },
        title: {
            textAlign: "center",
            fontSize: "21px",
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
        <div className={classes.root}>

            <Link to="/uslugi" className={classes.link}>
                <Paper variant={shadowFirst} elevation={6} className={classes.paperCard} onMouseEnter={() => shadowFunc("elevation", "first")} onMouseLeave={() => shadowFunc("outlined", "first")} >
                    <Avatar variant="square" alt="image" src={Face} className={classes.avatar} />
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Zabiegi na twarz / Makijaż
        </Typography>

                </Paper>
            </Link>
            <Link to="/uslugi" className={classes.link}>
                <Paper variant={shadowSecond} elevation={6} className={classes.paperCard} onMouseEnter={() => shadowFunc("elevation", "second")} onMouseLeave={() => shadowFunc("outlined", "second")}>
                    <Avatar variant="square" alt="image" src={Legs} className={classes.avatar} />
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Depilacja
        </Typography>
                </Paper>
            </Link>
            <Link to="/uslugi" className={classes.link}>
                <Paper variant={shadowThird} elevation={6} className={classes.paperCard} onMouseEnter={() => shadowFunc("elevation", "third")} onMouseLeave={() => shadowFunc("outlined", "third")}>
                    <Avatar variant="square" alt="image" src={Hand} className={classes.avatar} />
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Mezoterapia
        </Typography>
                </Paper>
            </Link>

        </div>
    );
}

export default HomeOffer;
