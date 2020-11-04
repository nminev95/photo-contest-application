import axios from 'axios';
import { BASE_URL } from '../constants/constants';

export default axios.create({
    baseUrl: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})
