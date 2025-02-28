import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_Backend_base_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default API;