import React, { useState } from 'react';
//material-ui
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const fontJosefin = "'Josefin Sans', sans-serif";
const fontPoppin = "'Poppins', sans-serif"
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
            fontFamily: fontJosefin,
            color: "#2b2b2b",
            textAlign: "center",
            fontSize: "3rem",
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
        cards: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            flexWrap: 'wrap',
            height: "100%",
            width: "40%",
            margin: "0rem 0rem 5rem 0rem",
            [theme.breakpoints.down("sm")]: {
                width: "60%",
            }
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
        },
        paperCard: {
            height: "25rem",
            width: "100%",
            padding: "3rem",
            // backgroundColor: "#f0f7f295",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "all 3s easy-in-out",
            // border: "2px solid #5ea3a336",
            [theme.breakpoints.down(375)]: {
                padding: "3rem 0rem",
            }
        },
        avatarIcon: {
            color: "#2b2b2b",
            fontSize: "3rem",
            margin: "1.2rem 0 1.5rem 0",
        },
        cardTitle: {
            fontFamily: fontJosefin,
            textAlign: "center",
            fontSize: "2.2rem",
            margin: "auto 0",
            [theme.breakpoints.down(375)]: {
                fontSize: "1.8rem",
            }
        },

        navButtons: {
            width: "40%",
            fontSize: "2rem",
            margin: "5rem auto 0rem auto",
            // backgroundColor: "#f0f7f2",
            [theme.breakpoints.down("sm")]: {
                width: "60%",
            },
            '& .MuiTabs-indicator': {
                // backgroundColor: "#6eb498",
                backgroundColor: "#2b2b2b",
                height: "0.3rem",
            },
            '& .Mui-selected': {
                color: "#2b2b2b",
            },
        },

        tab: {

            color: "#000",
            fontSize: "1rem",
            fontWeight: 600,
            fontFamily: fontPoppin,
            [theme.breakpoints.down(375)]: {
                fontSize: "0rem",
            },
        },
    }));

const Contact: React.FC = () => {
    const classes = useStyles();
    const [shadowFirst, setShadowFirst] = useState<any>("outlined")
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

    const shadowFunc = (variantName: string) => {
        if (variantName) {
            setShadowFirst(variantName)
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

            <div className={classes.cardsContainer}>
                <Paper square className={classes.navButtons}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"

                    >
                        <Tab className={classes.tab} icon={<PhoneIcon />} label="skontaktuj się" onClick={(e) => handleCard(e)} />
                        <Tab className={classes.tab} icon={< RoomIcon />} label="adres" onClick={(e) => handleCard(e)} />
                    </Tabs>
                </Paper>
                <div className={classes.cards}>
                    {card ? (

                        <Paper square variant={shadowFirst} elevation={6} className={classes.paperCard} onMouseEnter={() => shadowFunc("elevation")} onMouseLeave={() => shadowFunc("outlined")} >

                            <a href='mailto:becia848@wp.pl?&subject=Magia Urody&body=Jak możemy pomóc?' className={classes.link}>
                                <FontAwesomeIcon icon={faEnvelope} className={classes.avatarIcon} />

                                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                    becia848@wp.pl
        </Typography>


                            </a>
                            <a href="tel:+48-512-301-164" className={classes.link}>
                                <FontAwesomeIcon icon={faPhoneVolume} className={classes.avatarIcon} />

                                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                    +48 512 301 164
        </Typography>


                            </a>

                        </Paper>

                    ) : (
                        <Paper variant={shadowFirst} elevation={6} className={classes.paperCard} onMouseEnter={() => shadowFunc("elevation")} onMouseLeave={() => shadowFunc("outlined")} >

                            <a
                                href='https://www.google.com/maps/dir//53.4492669,14.4967389/@53.440985,14.464491,13z'
                                target='_blank'
                                rel="noreferrer"
                                className={classes.link}
                            >
                                <FontAwesomeIcon icon={faMapMarkerAlt} className={classes.avatarIcon} />

                                <Typography color="textSecondary" gutterBottom>
                                    <h1 className={classes.cardTitle}>
                                        ul. Klonowica 36/1<br />
                            71-246<br />
                            Szczecin<br />
                                    </h1>
                                </Typography>


                            </a>
                        </Paper>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;
