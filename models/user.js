const client = require('../db');
const pgp = require('pg-promise')({ capSQL: true });

module.exports = class UserModel {
    async find() {
        try {
            const statement = `SELECT * 
                               FROM users`;

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

    async findUserById(id) {
        try {
            const statement = `SELECT *
                               FROM users
                               WHERE id = $1`;

            const values = [id];

            const result = await client.query(statement, values);

            if(result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw(err);
        }
    }

    async findUserByEmail(email) {
        try {
            const statement = `SELECT *
                               FROM users
                               WHERE email = $1`;
            
            const values = [email];

            const result = await client.query(statement, values);

            if(result.rows?.length) {
                return result.rows[0];
            } 

            return null;
        } catch(err) {
            throw err;
        }
    }

    async create(data) {
        try {
            const columns = ['email', 'password'];

            const statement = pgp.helpers.insert(data, columns, 'users') + 'RETURNING *';
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