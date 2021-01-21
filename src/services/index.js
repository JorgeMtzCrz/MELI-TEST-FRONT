import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production' ?
    (baseURL = 'https://meli-test-front.herokuapp.com') :
    (baseURL = 'http://localhost:3000');

const api = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
    ITEMS: async(query) => await api.get(`/api/items?q=${query}`),
    ITEM: async(id) => await api.get(`/api/items/${id}`),
};

export default MY_SERVICE;