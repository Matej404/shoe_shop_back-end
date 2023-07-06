const express = require('express');
const router = express.Router();

const ProductService = require('../services/ProductServices');
const ProductServiceInstance = new ProductService();

module.exports = (app) => {
    app.use('/products', router);

    router.get('/', async(req, res, next) => {
        try {
            const response = await ProductServiceInstance.list();

            res.status(200).send(response);
        } catch(err) {
            next(err);
        }
    })
}