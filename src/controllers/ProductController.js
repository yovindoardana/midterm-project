import Product from '../models/ProductModel.js';

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({status: 'success', data: products});
  } catch (err) {
    res.status(404).json({status: 'error', message: err.message});
  }
};

const getProductbyId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({status: 'success', data: product});
  } catch (err) {
    res.status(404).json({status: 'error', message: 'Product Not Found'});
  }
};

const getProductbyVideoId = async (req, res) => {
  try {
    const product = await Product.find({videoId: req.params.videoId});

    if (product.length === 0) {
      return res.status(404).json({status: 'success', message: 'Product Not Found.'});
    }

    res.status(200).json({status: 'success', data: product});
  } catch (err) {
    res.status(404).json({status: 'error', message: err.message});
  }
};

const searchProduct = async (req, res) => {
  const {query} = req.params;
  try {
    const products = await Product.find({title: {$regex: query, $options: 'i'}});

    if (products.length === 0) {
      return res.status(404).json({status: 'success', message: 'No products found.'});
    }

    res.status(200).json({status: 'success', data: products});
  } catch (err) {
    res.status(404).json({status: 'error', message: 'Product Not Found'});
  }
};

const addProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).json({status: 'success', data: product});
  } catch (err) {
    res.status(400).json({status: 'error', message: 'Please enter valid data!'});
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({status: 'success', data: updatedProduct});
  } catch (err) {
    res.status(404).json({status: 'error', message: 'Product Not Found'});
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({status: 'success', message: 'Product deleted'});
  } catch (err) {
    res.status(404).json({status: 'error', message: 'Product Not Found'});
  }
};

export default {
  getProducts,
  getProductbyId,
  addProduct,
  searchProduct,
  updateProduct,
  deleteProduct,
  getProductbyVideoId
};
