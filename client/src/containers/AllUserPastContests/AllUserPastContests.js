// import React, { useEffect } from 'react';
// import userEndpoints from '../../requests/user-requests';
// import axios from '../../requests/axios';
// import swal from '@sweetalert/with-react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setUserPastContestsData } from '../../redux/actions/index';

// const AllUserPastContests = (props) => {

//     const { id } = props.match.params;
//     const dispatch = useDispatch();
//     const userPastContestsData = useSelector(state => state.userPastContestsState);

//     useEffect(() => {
//         axios.get(userEndpoints.userPastContests + `${id}/past-contests`)
//             .catch((error) => {
//                 if (error.response.status === 404) {
//                     swal({
//                         title: "Oops!",
//                         text: "Looks like no information found!",
//                         icon: "error",
//                         button: "Okay"
//                     })
//                 }
//             })
//             .then((response) => dispatch(setUserPastContestsData(response.data)))
//     }, [id, dispatch]);

//     return (
//         // <>
//         //     { userPastContestsData.length > 0 ? (
//         //         <React.Fragment>
//         //             {userCurrentContestsData && <AllCurrentContestsBox currentContestsData={userPastContestsData} />}
//         //         </React.Fragment>
//         //         ) : (
//         //         <React.Fragment>
//         //             <EmptyPageComponent />
//         //         </React.Fragment>
//         //         )}
//         // </>
//     )
// }

// export default AllUserPastContests;



 