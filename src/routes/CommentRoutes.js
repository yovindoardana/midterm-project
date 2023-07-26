import express from 'express';
import CommentController from '../controllers/CommentController.js';

const Router = express.Router();

Router.get('/:videoId', CommentController.getComments);
Router.post('/', CommentController.addComment);

export default Router;
