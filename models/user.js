const client = require('../db');

module.exports = class UserModel {
    async find() {
        try {
            const statement = `SELECT * 
                               FROM users`;

            const values = [];

            const result = await client.query(statement, values);

            if(result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw(err);
        }
    }

    async findUserById(id) {
        try {
            const statement = `SELECT *
                               FROM users
                               WHERE id = 1$`;

            const value = [id];

            const result = await client.query(statement, value);

            if(result.rows?.length) {
                return result.rows[0];
            }
            return null;
        } catch(err) {
            throw(err);
        }
    }
}