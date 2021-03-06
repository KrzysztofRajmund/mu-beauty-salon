import React from 'react';
//material-ui
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            '& .MuiTableCell-root': {
                fontSize: "1.2rem",
            },
            [theme.breakpoints.down(580)]: {
                padding: "0rem",
            }
        },
        table: {
            width: "70%",
            [theme.breakpoints.down(580)]: {
                width: "100%",
            }

        },

        row: {
            '&:hover': {
                backgroundColor: '#f0f7f2',
            },
            [theme.breakpoints.down(455)]: {
                display: "flex",
                justifyContent: "center",
                alignItems: "left",
                flexDirection: "column",
                textAlign: "center",
            }

        },
        nameCell: {
            [theme.breakpoints.down(455)]: {
                backgroundColor: '#f0f7f2',
                textAlign: "left",
            }
        },
        cell: {
            [theme.breakpoints.down(455)]: {
                textAlign: "center",
            }
        },
        title: {
            fontSize: "2rem",
            lineHeight: "2rem",
            margin: "10rem 0 1rem 1.5rem",
            color: "#2b2b2b",
            letterSpacing: "0.4rem",
            [theme.breakpoints.down(530)]: {
                fontSize: "1.3rem",
                fontWeight: 600,
                textAlign: "left",
            }

        }
    }));

function createData(category: string | null, title: string | null, name: string, desc: string, time: number, price: string) {
    return { category, title, name, desc, time, price };
}

const rows = [
    createData('makeup', 'Makija?? permanentny', 'Brwi', 'Wszystkie metody pigmentacji', 2.5, '850 z??'),
    createData(null, null, 'Ust', 'Wszystkie metody pigmentacji ust', 3, '900 z??'),
    createData(null, null, 'Kreska', 'Cena zale??y od rodzaju kreski', 2.5, '400-650 z??'),
    createData('pedicure', 'Pedicure', 'Pedicure', 'Cena zale??na od rodzaju u??ytego lakieru', 1.5, '85-105 z??'),
    createData('nails', 'Stylizacja paznokci', 'stylizacja paznokci', 'cena zale??na od stylizacji', 1.5, '35-90 z??'),
    createData('radio', 'Fale radiowe', 'Fale radiowe', 'cena zale??na od tego jaka partia cia??a poddana jest zabiegowi', 1, '100-180 z??'),
    createData('laser', 'Laser IPL', 'Laser IPL', 'cena zale??na od tego na jakie partie wykonujemy zabieg', 1, '100-180 z??'),
    createData('mesotherapy', 'mezoterapia', 'mezoterapia mikroig??owa', 'cena uzale??niona od rodzaju mikroigie??', 1.5, '150-250 z??'),
    createData(null, null, 'mezoterapia ig??owa', 'cena uzale??niona od rodzaju produktu, ilo??ci', 1.5, '150-300 z??'),
    createData('depilation', 'Depilacja', 'Depilacja Laserem SHR', 'cena zale??na od partii cia??a poddanej depilacji', 0.45, '50-200 z??'),
    createData('microdermabrasion', 'mikrodermabrazja', 'mikrodermabrazja', 'cena zale??na od u??ytych produkt??w', 1.5, '100-150 z??'),
    createData('face', 'zabiegi piel??gnacyjne na twarz', 'zabiegi na twarz', 'klasyczne zabiegi pielegnacyjne', 1.5, '100z?? -180z??'),
];

const DataOffer: React.FC = () => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <React.Fragment>
                            {/* title */}
                            {row.title && (
                                <Typography key={row.name} className={classes.title}
                                    variant="h1" component="h2" gutterBottom>
                                    {row.title.toUpperCase()}
                                </Typography>
                            )}
                            {/* data */}
                            <TableRow className={classes.row} id={row.category ? row.category : ""} >
                                <TableCell className={classes.nameCell} component="th" scope="row">
                                    {row.name.toUpperCase()}
                                </TableCell>
                                <TableCell className={classes.cell} align="right">{row.desc.charAt(0).toUpperCase() + row.desc.slice(1, row.desc.length)}</TableCell>
                                <TableCell className={classes.cell} align="right">{row.time}h</TableCell>
                                <TableCell className={classes.cell} align="right">{row.price}</TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DataOffer;
