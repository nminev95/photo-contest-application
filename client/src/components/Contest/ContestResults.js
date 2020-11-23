import { useSelector } from "react-redux";
import SingleContestResultCard from "./SingleContestResultCard";

const ContestResults = () => {

    const contestInfo = useSelector(state => state.singleContestState);
    const contestEntries = contestInfo.entries;

    return (
        contestEntries ? (
            <div style={{textAlign: '-webkit-center'}}>
            <SingleContestResultCard entries={contestEntries} />
            <SingleContestResultCard entries={contestEntries} />
            <SingleContestResultCard entries={contestEntries} />

            </div>
        ) : (null)
    )
}

export default ContestResults;