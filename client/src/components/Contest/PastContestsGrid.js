import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import SingleCurrentContestView from './SingleCurrentContestCard';


const PastContestsGrid = (props) => {

    const { contestsData } = props;

    return (

        <Container>
            <Grid container spacing={10}>
                {contestsData.map((contest) => <SingleCurrentContestView
                    contest={contest}
                    key={contest.id} />)}
            </Grid>
        </Container>
    )
}

export default PastContestsGrid;