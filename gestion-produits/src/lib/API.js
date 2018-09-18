//import ezFetch from 'ez-fetch';

const API_URL = 'http://localhost:3000/api/v1/products';

export default {
    getProducts() {
        // return ezFetch(API_URL);
        return fetch(API_URL)
        .then(response => response.json);
    },
};
