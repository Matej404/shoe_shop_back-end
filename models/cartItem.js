const client = require('../db');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class CartItemModel {
    async createItem(data) {
        try {
            const statement = pgp.helpers.insert(data, null, 'cartItems') + "RETURNING *";

            const result = await client.query(statement);

            if(result.rows?.length) {
                return result.rows[0];
            }

            return null;
        } catch(err) {
            throw err;
        }
    }
}