import React from 'react';
import axiosInstance from "../../requests/axios"
import contestEndpoints from "../../requests/contest-requests"
import swal from '@sweetalert/with-react';
import ContestEntryFormModal from "../../components/Contest/ContestEntryFormModal";



const UploadPhoto = () => {

    const Upload = (formData, id) => {
        axiosInstance.post(contestEndpoints.addNewPhoto + `${id}`, formData)
            .catch((error) => {
                if (error.response.error) {
                    swal({
                        title: "Oops!",
                        text: "Something went wrong! Please try again.",
                        icon: "error",
                        button: "Okay"
                    })
                }
            })
            .then((response) => {
                if (response) {
                    swal({
                        title: "Success!",
                        text: "Your photo has been uploaded successfully!",
                        icon: "success",
                        buttons: false,
                        timer: 1500,
                    })
                }
            })
    }

    return (
        <>
            <ContestEntryFormModal upload={Upload} />
        </>
    )
};

export default UploadPhoto;