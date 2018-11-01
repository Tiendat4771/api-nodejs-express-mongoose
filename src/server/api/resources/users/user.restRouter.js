import express from 'express';
import * as userController from './user.controller';

const userRouter = express.Router();
userRouter.route('/')
  .post(userController.createOne);

userRouter.route('/:id')
  .get(userController.getOne);

export default userRouter;
