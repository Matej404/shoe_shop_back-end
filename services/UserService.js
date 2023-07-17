const createError = require('http-errors');
const UserModel = require('../models/User');
const UserModelInstance = new UserModel();

module.exports = class UserService {
    async list() {
        try {
            const users = await UserModelInstance.find();

            return users;
        } catch(ree) {
            throw(err);
        }
    }

    async get(data) {
        const { id } = data;
        try {
            const user = await UserModelInstance.findUserById(id);
            if(!user) {
                return createError(404, 'User not found');
            }

            return user;
        } catch(err) {
            throw(err);
        }
    }
}