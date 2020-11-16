// import React, { useEffect } from 'react';
// import userEndpoints from '../../requests/user-requests';
// import axios from '../../requests/axios';
// import swal from '@sweetalert/with-react';
// import UserProfilePersonalInfo from '../../components/Profile/UserProfilePersonalInfo';
// import EmptyContent from '../../components/Contest/EmptyContent'
// import { useDispatch, useSelector } from 'react-redux';
// import { setUserPastContestsData } from '../../redux/actions/index';

// const AllUserPastContests = (props) => {

//     const userState = useSelector(state => state.loginState);
//     const id = userState.user.sub;
//     const dispatch = useDispatch();
//     const userPastContestsData = useSelector(state => state.userPastContestsState);
//     const userData = useSelector(state => state.userState);

//     useEffect(() => {
//         axios.get(userEndpoints.userPastContests)
//             .then((response) => console.log(response))
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
//     }, [id, dispatch]);

//     return (
//         <>
//             { userPastContestsData.length > 0 ? (
//                 <React.Fragment>
//                     {userData && <UserProfilePersonalInfo userData={userData} />}
//                 </React.Fragment>
//             ) : (
//                     <React.Fragment>
//                         {userData && <UserProfilePersonalInfo userData={userData} />}
//                         <EmptyContent />
//                     </React.Fragment>
//                 )}
//         </>
//     )
// }

// export default AllUserPastContests;



