import React, { useState } from 'react'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
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
    },
    paperCard: {
        "&:hover": {
            backgroundColor: "purple"
        },

    }
}));

const HomeOffer: React.FC = () => {
    const classes = useStyles();
    const [shadow, setShadow] = useState<any>("outlined")

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item sm={12} md={6} lg={3} >
                <Paper elevation={3} className={classes.paperCard} />
            </Grid>
            <Grid item sm={12} md={6} lg={3} >
                <Paper elevation={3} className={classes.paperCard} />
            </Grid>
            <Grid item sm={12} md={6} lg={3} >
                <Paper elevation={3} className={classes.paperCard} />
            </Grid>

        </Grid>
    );
}

export default HomeOffer;
