const API_URL = 'http://localhost:3000/api/v1/products';

export default {
    getProducts() {
        return fetch(API_URL)
        .then(response => response.json());
    },
};