import 'antd/dist/antd.css';
import { Comment, Tooltip, Avatar } from 'antd';
import StarIcon from '@material-ui/icons/Star';
import { Divider } from '@material-ui/core';

const SingleContestEntryReview = () => {

    return (
        <>
            <Comment
                author={<a>Han Solo</a>}
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                        
                    />
                }
                content={
                    <div style={{display:"inline-flex"}}>
                        <div style={{ float: 'left', paddingRight: '25px', textAlign: "left" }}>
                            We supply a series of design principles, practical patterns and high quality design
                            resources (Sketch and Axure), to help people create their product prototypes beautifully
                            and efficiently.
                        </div>
                        <div style={{ float: 'right' }}>
                            <StarIcon style={{ color: "#ffb300" }} fontSize='medium' /><p>7/10</p>
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

