import express from 'express';
import ProductController from '../controllers/ProductController.js';

const Router = express.Router();

Router.get('/', ProductController.getProducts);
Router.get('/product:id', ProductController.getProductbyId);
Router.get('/video:videoId', ProductController.getProductbyVideoId);
Router.post('/', ProductController.addProduct);
Router.get('/search/:query', ProductController.searchProduct);
Router.put('/:id', ProductController.updateProduct);
Router.delete('/:id', ProductController.deleteProduct);

export default Router;
