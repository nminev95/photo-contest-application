import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import authEndpoints from './auth-requests';
import decode from 'jwt-decode';
import swal from 'sweetalert';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
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
        return axiosInstance.post(authEndpoints.createNewToken, { id: user.sub })
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