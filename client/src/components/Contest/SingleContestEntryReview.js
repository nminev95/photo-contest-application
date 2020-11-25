import 'antd/dist/antd.css';
import { Comment, Tooltip, Avatar } from 'antd';
import StarIcon from '@material-ui/icons/Star';
import { Divider } from '@material-ui/core';

const SingleContestEntryReview = ({ review }) => {

    return (
        <>
            <Comment
                author={<Tooltip title={`Rank: ${review.reviewAuthorRank}, Points: ${review.reviewAuthorPoints}`}>{review.username}</Tooltip>}
                avatar={
                    <Avatar
                        src={`http://localhost:4000/public/avatars/${review.avatarUrl}`}
                        alt={review.username}
                    />
                }
                content={
                    <div style={{ display: "block", width:"100%" }}>
                        <div style={{ float: 'left', paddingRight: '25px', textAlign: "left" }}>
                            {review.comment}
                        </div>
                        <div style={{ float: 'right' }}>
                            <StarIcon style={{ color: "#ffb300" }} fontSize='medium' /><p>{review.score}/10</p>
                        </div>
                    </div>
                } />
            <Divider />
        </>
        //   datetime={
        //     <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
        //       <span>{moment().fromNow()}</span>
        //     </Tooltip>
        //   }

    );
};

export default SingleContestEntryReview;

