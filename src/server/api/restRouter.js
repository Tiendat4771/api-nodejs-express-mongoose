import express from 'express';
import productsRouter from './resources/products/products.restRouter';
import usersRestRouter from './resources/users/user.restRouter';

const restRouter = express.Router();

restRouter.use('/products', productsRouter);
restRouter.use('/user', usersRestRouter);

export default restRouter;
