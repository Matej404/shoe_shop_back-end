const routeLoader = require('../routes');
const passportLoader = require('./passport');
const expressLoader = require('./express');

module.exports = async(app) => {

    const expressApp = await expressLoader(app);
    const passport = await passportLoader(expressApp);

    

    await routeLoader(app, passport);

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