const ProductModel = require('../models/product');
const ProductModelInstance = new ProductModel();
const createError = require('http-errors');

module.exports = class ProductService {
    async list() {
        try {
            const products = await ProductModelInstance.find();
            return products;
        } catch(err) {
            throw err;
        }
    }


    async get(data) {
        const { id } = data;
        try {
            const product = await ProductModelInstance.findProductById(id);

            if(!product) {
                return createError(404, 'Product not found');
            }

            return product;

        } catch(err) {
            throw err;
        }
    }
}