const createError = require('http-errors');
const CartModel = require('../models/cart');
const CartModelInstance = new CartModel;

module.exports = class CartService {
    async create(data) {
        const { userId } = data;

        try {
            const cart = await CartModelInstance.create(userId);

            return cart;
        } catch(err) {
            throw err
        }
    }
}