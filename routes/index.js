const productRouter = require('./product');
const userRouter = require('./user');
const authRouter = require('./auth');
const cartRouter = require('./cart');

module.exports = (app, passport) => {
    productRouter(app);
    userRouter(app);
    authRouter(app, passport);
    cartRouter(app);
}