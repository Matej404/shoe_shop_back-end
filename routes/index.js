const productRouter = require('./product');
const userRouter = require('./user');
const authRouter = require('./auth');

module.exports = (app, passport) => {
    productRouter(app);
    userRouter(app);
    authRouter(app, passport);
}