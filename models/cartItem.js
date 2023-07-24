const client = require('../db');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class CartItemModel {
    async find(cartId) {
        try {
            const statement = `SELECT
                               ci.quantity, 
                               ci.id AS "cartItemId",
                               p.*
                               FROM "cartItems" ci
                               INNER JOIN products p ON p.id = ci."productId"
                               WHERE "cartId" = $1`;

            const values = [cartId];

            const result = await client.query(statement, values);

            if(result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw err;
        }
    }

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

    async update(id, data) {
        try {
            const condition = pgp.as.format('WHERE id = ${id} RETURNING *', {id});
            const statement = pgp.helpers.update(data, null, 'cartItems') + condition;

            const result = await client.query(statement);

            if(result.rows?.length) {
                return result.rows[0];
            }

            return null;
        } catch(err) {
            throw err;
        }
    }

    async delete(id) {
        try {
            const statement = `DELETE
                               FROM "cartItems"
                               WHERE id = $1
                               RETURNING *`;

            const values = [id];

            const result = await client.query(statement, values);

            if(result.rows?.length) {
                return result.rows[0]
            }

            return null;
        } catch(err) {
            throw err;
        }
    }
}