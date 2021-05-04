import React from 'react';
//material-ui
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AboutImage from "../../assets/img/image-about3.jpg"
//components
import PhotoGrid from "./PhotoGrid";
const fontJosefin = "'Josefin Sans', sans-serif";
const fontPoppin = "'Poppins', sans-serif"
const useStyles = makeStyles((theme: Theme) =>
({

    root: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "150vh",
        margin: "0 0 3rem 0",
        [theme.breakpoints.down('sm')]: {
            height: "100%",
        },
        [theme.breakpoints.down(360)]: {
            margin: "5rem 2rem",
        },

    },
    paperCard: {
        backgroundImage: `url(${AboutImage})`,
        backgroundSize: "cover",
        backgroundPosition: '50% 30%',
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 3s easy-in-out",
        border: "2px solid #f0f7f2",
        padding: "2rem",

    },
    title: {
        fontFamily: fontJosefin,
        color: "#fff",
        textAlign: "center",
        fontSize: "2.7rem",
        textTransform: "uppercase",
        '&::after': {
            display: "block",
            width: "50px",
            height: "3px",
            background: "rgb(255, 204, 213)",
            margin: "2rem auto 0",
            content: '""',
        }
    },

    desc: {
        fontFamily: fontPoppin,
        color: "#fff",
        textAlign: "center",
        fontSize: "1.8rem",
        padding: "4rem",
        [theme.breakpoints.down("sm")]: {
            padding: "1rem",
        }
    }

}));
const AboutShort: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Paper variant="outlined" className={classes.paperCard}>

                <Typography className={classes.title}>
                    Gabinet Kosmetyczny w Szczecinie
        </Typography>
                <Typography className={classes.desc}>
                    Magia Urody Beata Gozdek to wyjątkowy salon kosmetyczny na mapie Szczecina. To miejsce, w którym w odpowiedni sposób zadbasz o swoje ciało, jak i umysł.
                    Przywracamy skórze perfekcyjny wygląd, upiększamy dłonie i stopy, relaksujemy ciało. Usuwamy defekty, przywracamy pewność siebie i zadowolenie z ciała.
                    Naszym atutem jest zamiłowanie do wykonywanej pracy, którą wykonujemy z pasji a nie
                    z obowiązku a wszystkie zabiegi wykonywane są na najnowocześniejszym sprzęcie oraz są w 100% bezpieczne dla naszych klientów.

        </Typography>
            </Paper>

            <PhotoGrid />
        </div>
    )
}

export default AboutShort;
