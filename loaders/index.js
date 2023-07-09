const routeLoader = require('../routes');
const cors = require('cors')

module.exports = async(app) => {

    app.use(cors());

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