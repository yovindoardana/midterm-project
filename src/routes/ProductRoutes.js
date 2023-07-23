import express from 'express';
import ProductController from '../controllers/ProductController.js';

const Router = express.Router();

Router.get('/', ProductController.getProducts);
// Router.get('/:id', ProductController.getProductbyId);
Router.get('/:videoId', ProductController.getProductbyVideoId);
Router.post('/', ProductController.addProduct);
Router.put('/:id', ProductController.updateProduct);
Router.delete('/:id', ProductController.deleteProduct);

export default Router;
