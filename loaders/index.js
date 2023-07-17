const routeLoader = require('../routes');
const cors = require('cors')
const express = require('express');

module.exports = async(app) => {

    app.use(cors());
    app.use(express.json());

    await routeLoader(app);

    app.use((err, req, res, next) => {
        console.log(
            '\n***************************************\n',
            err,
            '\n***************************************\n'
        )

        const { message, status } = err;

        return res.status(status).send({ message });
    })
}