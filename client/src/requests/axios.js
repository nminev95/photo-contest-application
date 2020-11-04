import axios from 'axios';
import { BASE_URL } from '../constants/constants';

const baseUrl = axios.create({
    baseUrl: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})

export default baseUrl;