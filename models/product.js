const client = require('../db');

module.exports = class ProductModel {
    async find() {
        try {
            const statement = `SELECT *
                               FROM products`;


            const values = [];

            const result = await client.query(statement, values);

            if(result.rows?.length) {
                return result.rows;
            }

            return [];
        } catch(err) {
            throw err;
        }
    }

    async findProductById(id) {
        try {
            const statement = `SELECT * 
                               FROM products
                               WHERE id = $1`;

            const values = [id];

            const result = await client.query(statement, values);

            if(result.rows?.length) {
                return result.rows[0];
            }

            return null;
            
        } catch(err) {
            throw err
        }
    }
}