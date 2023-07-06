const client = require('../db');

module.exports = class ProductModel {
    async find() {
        try {
            const statement = `SELECT *
                               FROM products`;


            const value = [];

            const result = await client.query(statement, value);

            if(result.rows?.length) {
                return result.rows;
            }

            return [];
        } catch(err) {
            throw err;
        }
    }
}