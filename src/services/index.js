import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production' ?
    (baseURL = 'here should be your production endpoint') :
    (baseURL = 'http://localhost:3000');

const api = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
    ITEMS: async(query) => await api.get(`/api/items?q=${query}`),
    ITEM: async(id) => await api.get(`/api/items/${id}`),
};

export default MY_SERVICE;