const client = require('../db');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class CartModel {

    async createCart(userId) {
        try {
            const data = { 
                userId, 
                created: new Date() 
            };

            const statement = pgp.helpers.insert(data, null, 'carts') + 'RETURNING *';
            console.log(statement)

            const result = await client.query(statement);

            if(result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw err;
        }
    }

    async findCartByUser(userId) {
        try {
            const statement = `SELECT * 
                               FROM carts
                               WHERE "userId" = $1`;

            const values = [userId];

            const result = await client.query(statement, values);

            if(result.rows?.length) {
                return result.rows[0];
            } 

            return null;

        } catch(err) {
            throw err;
        }
    }
}