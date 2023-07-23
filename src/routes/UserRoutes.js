import express from 'express';
import UserController from '../controllers/UserController.js';

const Router = express.Router();

Router.get('/', UserController.getUsers);
Router.get('/:id', UserController.getUserbyId);
Router.post('/', UserController.addUser);
Router.put('/:id', UserController.updateUser);
Router.delete('/:id', UserController.deleteUser);

export default Router;
