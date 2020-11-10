// import React from 'react';
// import swal from '@sweetalert/with-react';
// import axios from '../../requests/axios';
// import contestEndpoints from '../../requests/contest-requests';
// import OpenEntryFormButton from './../../components/Contest/ContestEntryFormModal.js';
// import { withRouter } from 'react-router-dom';

// const UploadNewPhoto = () => {

//     const handleSubmit = (ev) => {
//         ev.preventDefault();

//         axios.post(contestEndpoints.addNewPhoto + `${id}`,Data)
//             .catch((error) => {
//                 if (error.response) {
//                     swal({
//                         title: "Oops!",
//                         text: "Something went wrong!",
//                         icon: "error",
//                         button: "Okay"
//                     })
//                 }
//             })
//             .then((response) => {
//                 if (response) {
//                     swal({
//                         title: "Success!",
//                         text: "Your photo has been uploaded successfully!",
//                         icon: "success",
//                         button: "Ок"
//                     })
//                 }
//             })
//     }

//     return (
//         <div className="sadasd">
//               <OpenEntryFormButton handleSubmit={handleSubmit}/>
//         </div>
//     )
// }

// export default withRouter(UploadNewPhoto);