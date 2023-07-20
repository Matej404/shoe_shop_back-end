const express = require('express');
const router = express.Router();

const CartService = require('../services/CartService');
const CartServiceInstance = new CartService();

module.exports = (app) => {
    app.use('/carts', router);

    router.post('/mine', async(req, res, next) => {
        try {
            const { id } = req.user;

            const response = await CartServiceInstance.create({ userId: id });

            res.status(200).send(response);
        } catch(err) {
            next(err);
        }
    })
}