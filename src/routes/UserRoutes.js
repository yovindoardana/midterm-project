import express from 'express';
import UserController from '../controllers/UserController.js';

const Router = express.Router();

Router.get('/', UserController.getUsers);

export default Router;
