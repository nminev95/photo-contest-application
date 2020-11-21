import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '75%',
        height: 'auto',
        paddingTop: '30px',
        display: 'flex',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: '20px',
        fontFamily: '"Segoe UI"',
        fontWeight: '400',
        marginTop: '10px',
        textAlign: 'justify',
    },
    textBold: {
        color: 'black',
        fontSize: '20px',
        fontFamily: '"Segoe UI"',
        fontWeight: '500',
        marginTop: '10px',
        textAlign: 'center',
    },
    author: {
        color: 'black',
        fontSize: '15px',
        fontFamily: '"Segoe UI"',
        textAlign: 'right',


    },
    textGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
        display: 'flex',
        justifyContent: 'center',
    }
}));

const LandingPageTextBox = () => {

    const styles = useStyles();

    return (
        <div>
            <Container xs={12} sm={6} md={3} style={{ marginTop: '50px', marginBottom: '30px' }} >
                <Grid container spacing={5} className={styles.cardGrid} maxwidth="sm">
                    <Grid item xs={12} sm={6} md={6}  >
                        <Box border={1}>
                            <div style={{ padding: '15px' }}>
                                <Typography className={styles.text} >
                                    "To photograph is to hold one's breath, when all faculties converge to capture fleeting reality. It's at that precise moment that mastering an image becomes a great physical and intellectual joy!"
                            </Typography>
                                <Typography className={styles.author}> - Henri Cartier-Bresson</Typography>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}  >
                        <Box border={1}>
                            <div style={{ padding: '15px' }}>
                                <Typography className={styles.text} >
                                    “A great photograph is a full expression of what one feels about what is being photographed in the deepest sense and is thereby a true expression of what one feels about life in its entirety.”
                            </Typography>
                                <Typography className={styles.author}> ― Ansel Adams</Typography>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
                <Box style={{ marginTop: '30px' }}>
                    <div style={{ padding: '15px' }}>
                        <Typography className={styles.textBold} >
                            If Photography is your passion and you like capturing many wonderful moments, this is YOUR place. 
                            <br></br>
                            You can take part in as many contests as you want. 
                            <br></br>
                            Have fun!
                        </Typography>

                    </div>
                </Box>
            </Container>
        </div>
    )
}

export default LandingPageTextBox;