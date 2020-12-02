import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    textBold: {
        color: 'black',
        fontSize: '20px',
        fontFamily: '"Segoe UI"',
        fontWeight: '500',
        marginTop: '10px',
        textAlign: 'justify'
        ,
    },
}));

const TextBox = () => {

    const styles = useStyles();
    const history = useHistory();
    const userState = useSelector(state => state.loginState);

    return (
        <>
            {userState.user.role === 'Photo Junkie' &&
                <Container
                    xs={12}
                    sm={6}
                    md={3}
                    maxWidth='md'
                    style={{ marginTop: '50px', marginBottom: '30px' }} >
                    <Box
                        style={{ marginTop: '30px' }}>
                        <div
                            style={{ padding: '15px' }}>
                            <Typography
                                style={{ textAlign: 'center' }} >
                                <h4> Beauty can be seen in everything! </h4>
                            </Typography>
                            <Typography className={styles.textBold} >
                                Seeing and composing the beauty is what separates the snapshot from the photograph.
                                If you want to be a better photographer, stand in front of more interesting stuff.
                                Look and think before opening the shutter. The heart and mind are the true lens of the camera.
                                Great photography is about depth of feeling, not depth of field.
                                It is all about you!
                        <br />
                                <Typography style={{ textAlign: 'center', paddingTop: '15px' }} >
                                    <h5>  Do not be late and take part in as many contests as you want! </h5>
                                </Typography>

                            </Typography>
                        </div>
                        <Grid
                            container
                            spacing={2}
                            justify="center" >
                            <Grid item>
                                <Button
                                    style={{ marginTop: '60px', marginBottom: '25px' }}
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => history.push('/contests')}>
                                    GET STARTED
                            </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            }
        </>
    )
}

export default TextBox;