import axios from 'axios';

export default {
    // ITEMS
    findAll: function() {
        return axios.get('/api/items');
    },
    findCategories: function() {
        return axios.get('/api/categories');
    },
    findItemsByCategory: function(category) {
        return axios.get('/api/categories/' + category);
    },
    findItemByID: function() {
        return axios.get('/api/items/:id');
    },
    addItem: function() {
        return axios.post('/api/items');
    },
    process: function() {
        return axios.get('/api/process');
    },
    checkout: function() {
        return axios.post('/api/checkout');
    },
    updateItem: function(id, body) {
        return axios.post('/api/items/' + id, body);
    },
    deleteItem: function() {
        return axios.delete('/api/items/:id');
    },

    // COMMENTS
    addComment: function() {
        return axios.post('/api/:itemID/comments');
    },
    findItemWithComments: function() {
        return axios.get('/api/:itemID/comments');
    },

    // MAINTENANCE COMMENTS
    addMaintComment: function() {
        return axios.post('/api/:itemID/maintcomments');
    },
    findItemWithMaintComments: function() {
        return axios.get('/api/:itemID/maintcomments');
    },

    // CUSTOMER
    addCustomer: function() {
        return axios.post('/api/customers');
    },
    addItemToCustomer: function() {
        return axios.post('/api/:customerID/:itemID');
    },
    findCustomerByID: function() {
        return axios.get('/api/:customerID/items');
    },
    deleteItemFromCustomer: function() {
        return axios.delete('/api/:customerID/:itemID');
    }
}