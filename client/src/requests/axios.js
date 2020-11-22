import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import userEndpoints from './user-requests';
import decode from 'jwt-decode';
import swal from 'sweetalert';

// axios.interceptors.response.use((response) => {
//     return response
// }, async function (error) {
//     const originalRequest = error.config;

//     if (error.response.status === 403) {

//     return Promise.reject(error);
// }

//     if (error.response.status === 401 && !originalRequest._retry) {

//     return axios.post('/auth/token',
//         {
//             "refresh_token": refreshToken
//         })
//         .then(res => {
//             if (res.status === 201) {
//                 localStorageService.setToken(res.data);
//                 axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getAccessToken();
//                 return axios(originalRequest);
//             }
//         })
// }
// return Promise.reject(error);
//  });

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: {
            toString() {
                return `Bearer ${localStorage.getItem('accessToken')}`;
            }
        }
    }
})

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers = {
                Authorization: {
                    toString() {
                        return `Bearer ${localStorage.getItem('accessToken')}`;
                    }
                }
            }
        }
        return config;
    },
    error => {
        Promise.reject(error)
    }
);

axiosInstance.interceptors.response.use((response) => {
    return response
}, async function (error) {
    
    const originalRequest = error.config;
    
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const oldToken = localStorage.getItem('accessToken');
        const user = decode(oldToken);
        return axiosInstance.post(userEndpoints.createNewToken, { id: user.sub })
            .catch((error) => {
                if (error.response.status > 400) {
                    swal({
                        title: "Oops!",
                        text: "An unexpected error occured. Please try again.",
                        icon: "error",
                        button: "Ok"
                    })
                }
            }).then((response) => {
                const newToken = response.data
                localStorage.setItem('accessToken', newToken);
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`.toString();
                originalRequest.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`.toString();

                return axiosInstance(originalRequest);
            })
    }
    return Promise.reject(error);
});

export default axiosInstance;