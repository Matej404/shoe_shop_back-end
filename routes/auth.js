const express = require('express');
const router = express.Router();

const AuthService = require('../services/AuthService');
const AuthServiceInstanse = new AuthService();

module.exports = (app) => {
    app.use('/auth', router);

    router.post('/register', async(req, res, next) => {
        try {
            const data = req.body;
            const response = await AuthServiceInstanse.register(data);

            res.status(200).send(response);
        } catch(err) {
            next(err);
        }
    })
}