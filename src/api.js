import axios from 'axios';

const api = axios.create({
    baseURL: "https://casashow-api.herokuapp.com",

});

export default  api;