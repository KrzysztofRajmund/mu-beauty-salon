import React, { useState } from 'react';
//material-ui
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
//assets
import Hand from "../../assets/hand.png";
import Face from "../../assets/face.png";
//router
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        titleContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        cardsContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },

        title: {
            color: "#2b2b2b",
            textAlign: "center",
            fontSize: "2.7rem",
            textTransform: "uppercase",
            margin: "5rem 5rem 1.5rem 5rem",
        },
        span: {
            display: "block",
            width: "30%",
            height: "2px",
            background: "rgb(255, 204, 213)",
            margin: "5rem 1rem 1.5rem 1rem",
            content: '""',

        },
        subtitle: {
            width: "40%",
            color: "#2b2b2b",
            textAlign: "center",
            fontSize: "2rem",
            margin: "0 auto 5rem auto",
            [theme.breakpoints.down("sm")]: {
                width: "60%",
            }
        },

        cards: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            flexWrap: 'wrap',
            height: "70vh",
            margin: "5rem 5rem",
            '& > *': {
                margin: theme.spacing(10),
                // width: theme.spacing(32),
                // height: theme.spacing(32),
            },
            [theme.breakpoints.down('md')]: {
                height: "100%",
                margin: theme.spacing(8),
            },
            [theme.breakpoints.down('sm')]: {
                '& > *': {
                    margin: theme.spacing(3),
                    // width: theme.spacing(26),
                    // height: theme.spacing(26),

                },
            },
        },

        link: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "auto",
            minWidth: "32rem",
            " &:focus, &:hover, &:visited, &:link, &:active": {
                textDecoration: "none",
            },
            [theme.breakpoints.down('md')]: {
                height: "auto",
                minWidth: "32rem",
            },

        },
        paperCard: {
            height: "100%",
            width: "100%",
            padding: "3rem",
            backgroundColor: "#f0f7f295",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "all 3s easy-in-out",
            border: "2px solid #f0f7f2",
            // [theme.breakpoints.down('md')]: {
            //     height: "23rem",
            //     width: "23rem",
            // },
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

        navButtons: {
            width: "40%",
            margin: "0 auto -5rem auto",
            [theme.breakpoints.down("sm")]: {
                width: "60%",
            }
        }

    }));

const Contact: React.FC = () => {
    const classes = useStyles();
    const [shadowFirst, setShadowFirst] = useState<any>("outlined")
    const [shadowSecond, setShadowSecond] = useState<any>("outlined")
    const [shadowThird, setShadowThird] = useState<any>("outlined")

    const [value, setValue] = useState(0);
    const [card, setCard] = useState(true)

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
        // console.log(value, "value")
    };

    const handleCard = (event: React.ChangeEvent<HTMLElement>): void => {

        if (event.target.innerText === ("adres").toUpperCase()) {
            setCard(false);
            return
        } else {
            setCard(true);
            return
        }

    }
    console.log(card)

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
            <div className={classes.titleContainer}>
                <span className={classes.span}></span>
                <Typography className={classes.title}>
                    Kontakt
        </Typography>
                <span className={classes.span}></span>
            </div>
            <Typography className={classes.subtitle}>
                Zadzwoń, umów się online na bezpłatną konsultację lub po prostu odwiedź nas w gabinecie.
        </Typography>
            <div className={classes.cardsContainer}>
                <Paper square className={classes.navButtons}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="icon label tabs example"
                    >
                        <Tab icon={<PhoneIcon />} label="skontaktuj się" onClick={(e) => handleCard(e)} />
                        <Tab icon={<PersonPinIcon />} label="adres" onClick={(e) => handleCard(e)} />
                    </Tabs>
                </Paper>
                <div className={classes.cards}>
                    {card ? (
                        <Link to="/zabiegi" className={classes.link}>
                            <Paper variant={shadowFirst} elevation={6} className={classes.paperCard} onMouseEnter={() => shadowFunc("elevation", "first")} onMouseLeave={() => shadowFunc("outlined", "first")} >
                                <Avatar variant="square" alt="image" src={Face} className={classes.avatar} />
                                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                    Zabiegi na twarz / Makijaż
        </Typography>

                            </Paper>
                        </Link>
                    ) : (
                        <Link to="/zabiegi" className={classes.link}>
                            <Paper variant={shadowThird} elevation={6} className={classes.paperCard} onMouseEnter={() => shadowFunc("elevation", "third")} onMouseLeave={() => shadowFunc("outlined", "third")}>
                                <Avatar variant="square" alt="image" src={Hand} className={classes.avatar} />
                                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                    Mezoterapia
        </Typography>
                            </Paper>
                        </Link>
                    )}



                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;
