import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: 'wrap',
        height: "90vh",
        '& > *': {
            margin: theme.spacing(2),
            width: theme.spacing(28),
            height: theme.spacing(28),
        },
    },
    paperCard: {
        "&:hover": {
            backgroundColor: "purple"
        },
        outlined: {
            display: "none",
        }
    }
}));

const HomeOffer: React.FC = () => {
    const classes = useStyles();
    const [shadow, setShadow] = useState<any>("outlined")

    return (
        <div className={classes.root}>

            <Paper variant={shadow} elevation={3} className={classes.paperCard} onMouseOver={(e) => console.log(e.target)} />
            <Paper variant={shadow} elevation={3} className={classes.paperCard} />
            <Paper variant={shadow} elevation={3} className={classes.paperCard} />
        </div>
    );
}

export default HomeOffer;
