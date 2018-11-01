import express from 'express';
import * as productsController from './products.controller';

const productsRouter = express.Router();

productsRouter.route('/')
  .get(productsController.getAll)
  .post(productsController.createOne);

productsRouter.route('/:id')
  .get(productsController.getOne)
  .post(productsController.createOne)
  .put(productsController.updateOne)
  .delete(productsController.deleteOne);

export default productsRouter;
