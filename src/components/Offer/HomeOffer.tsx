import React, { useState } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
//assets
import BeautyTreatmentIcon from "../../assets/beauty-treatment.png"

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
                    width: theme.spacing(24),
                    height: theme.spacing(24),

                },
            },
            [theme.breakpoints.down('xs')]: {
                height: "100%",
            },
        },
        paperCard: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transition: "all 3s easy-in-out",
            border: "2px solid #f0f7f2",

        },
        title: {
            fontSize: "21px"
        },
        avatar: {
            height: "10rem",
            width: "10rem"
        }
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

            <Paper variant={shadowFirst} elevation={6} className={classes.paperCard} onMouseEnter={() => shadowFunc("elevation", "first")} onMouseLeave={() => shadowFunc("outlined", "first")} >
                <Avatar alt="image" src={BeautyTreatmentIcon} className={classes.avatar} />
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
        </Typography>

            </Paper>


            <Paper variant={shadowSecond} elevation={6} className={classes.paperCard} onMouseEnter={() => shadowFunc("elevation", "second")} onMouseLeave={() => shadowFunc("outlined", "second")} />


            <Paper variant={shadowThird} elevation={6} className={classes.paperCard} onMouseEnter={() => shadowFunc("elevation", "third")} onMouseLeave={() => shadowFunc("outlined", "third")} />


        </div>
    );
}

export default HomeOffer;
