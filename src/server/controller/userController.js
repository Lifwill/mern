import User from '../model/user';

const express = require('express');
const userRouter = express.Router();

userRouter.route('/').get((req, res) => {
  User.find((errors, users ) => {
    if (errors) return errors;
    res.status(200).json(users);
  });
});

export default userRouter;
