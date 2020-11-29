import { useSelector } from "react-redux";
import SingleContestResultCard from "./SingleContestResultCard";

const ContestResults = () => {

    const contestResults = useSelector(state => state.contestResultsState);

    return (
        contestResults ? (
            <div style={{ textAlign: '-webkit-center' }}>
                {contestResults.map((entry) => <SingleContestResultCard
                    key={entry.id}
                    entry={entry} />)}
            </div>
        ) : (null)
    )
}

export default ContestResults;