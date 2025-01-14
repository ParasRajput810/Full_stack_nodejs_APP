// api.js
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest', // This header helps with CORS
    },
    withCredentials: true, // Include credentials in requests if needed
});

export default api;
