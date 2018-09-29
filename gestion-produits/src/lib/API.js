//import ezFetch from 'ez-fetch';
import './products.js';

// const API_URL = 'http://localhost:3000/api/v1/products';

export default {
    getProducts() {
        // return ezFetch(API_URL);
        return my_products;
        // sans la bibliothèque ez-fetch :
        // return fetch(API_URL)
        // .then(response => response.json);
    },
    getProduct(id) {
        return my_products[id];
        // return fetch ('${API_URL}/${id}')
        // .then(response => response.json);
    },
    createProduct(product) {
        return my_products.push(product);
    }   
};
