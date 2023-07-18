const createError = require('http-errors');
const UserModel = require('../models/User');
const UserModelInstance = new UserModel();

module.exports = class AuthService {
    async register(data) {

        const { email } = data;
    
        try {
            const user = await UserModelInstance.findUserByEmail(email);

            if(user) {
                throw createError(409, 'Email already in use');
            }

            return await UserModelInstance.create(data);

        } catch(err) {
            throw createError(500, err);
        }
    }

    async login(data) {

        const { email, password } = data;

        try {
            const user = await UserModelInstance.findUserByEmail(email);

            if(!user) {
                throw createError(401, 'Incorect username or password')
            }

            if(user.password !== password) {
                return createError(401, 'Incorect username or password');
            }

            return user;

        } catch(err) {
            throw(500, err);
        }
    }
}