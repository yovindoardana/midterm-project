import express from 'express';
import VideoController from '../controllers/VideoController.js';

const Router = express.Router();

Router.get('/', VideoController.getVideos);
Router.get('/:id', VideoController.getVideoById);
Router.post('/', VideoController.addVideo);
Router.put('/:id', VideoController.updateVideo);
Router.delete('/:id', VideoController.deleteVideo);

export default Router;
