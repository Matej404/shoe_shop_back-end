const createError = require('http-errors');
const CartModel = require('../models/cart');
const CartModelInstance = new CartModel;
const CartItemModel = require('../models/cartItem');
const CartItemModelInstance = new CartItemModel();

module.exports = class CartService {
    async loadCart(userId) {
        try {
            const cart = await CartModelInstance.findCartByUser(userId);
            const items = await CartItemModelInstance.find(cart.id);

             cart.item = items;
            return cart;
        } catch(err) {
            throw err;
        }
    }

    async create(data) {
        const { userId } = data;

        try {
            const cart = await CartModelInstance.createCart(userId);

            return cart;
        } catch(err) {
            throw err
        }
    }

    async addItem(userId, item) {
        try {
            const cart = await CartModelInstance.findCartByUser(userId);
            const cartItem = await CartItemModelInstance.createItem({ cartId: cart.id, ...item });

            return cartItem;
        } catch(err) {
            throw err;
        }
    }

    async updateItem(cartItemId, data) {
        try {
            const cartItem = await CartItemModelInstance.update(cartItemId, data);

            return cartItem;
        } catch(err) {
            throw err;
        }
    }

    async removeItem(cartItemId) {
        try {
            const cartItem = await CartItemModelInstance.delete(cartItemId);

            return cartItem;
        } catch(err) {
            throw err;
        }
    }
}