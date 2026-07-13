require('dotenv').config();

module.exports = {

    baseUrl:
        process.env.BASE_URL ||
        'https://react-shopping-cart-67954.firebaseapp.com'

};