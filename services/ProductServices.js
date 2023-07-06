const ProductModel = require('../models/product');
const ProductModelInstance = new ProductModel();

module.exports = class ProductService {
    async list() {
        try {
            const products = await ProductModelInstance.find();
            return products;
        } catch(err) {
            throw err;
        }
    }
}