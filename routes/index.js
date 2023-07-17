const productRouter = require('./product');
const userRouter = require('./user');

module.exports = (app) => {
    productRouter(app);
    userRouter(app);
}