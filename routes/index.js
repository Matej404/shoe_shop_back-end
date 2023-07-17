const productRouter = require('./product');
const userRouter = require('./user');
const authRouter = require('./auth');

module.exports = (app) => {
    productRouter(app);
    userRouter(app);
    authRouter(app);
}