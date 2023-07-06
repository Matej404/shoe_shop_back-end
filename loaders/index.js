const routeLoader = require('../routes');

module.exports = async(app) => {

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