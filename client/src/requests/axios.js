import axios from 'axios';
import { BASE_URL } from '../constants/constants';

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
        console.log(token)
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        // config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error)
    });


export default axiosInstance;