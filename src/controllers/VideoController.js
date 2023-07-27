import Video from '../models/VideoModel.js';
import Product from '../models/ProductModel.js';

const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json({status: 'success', data: videos});
  } catch (err) {
    res.status(404).json({status: 'error', message: err.message});
  }
};

const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json({status: 'success', data: video});
  } catch (err) {
    res.status(404).json({status: 'error', message: `Video Not Found`});
  }
};

const addVideo = async (req, res) => {
  const video = new Video(req.body);
  try {
    await video.save();
    res.status(201).json({status: 'success', data: video});
  } catch (err) {
    res.status(400).json({status: 'error', message: 'Please enter valid data!'});
  }
};

const updateVideo = async (req, res) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({status: 'success', data: updatedVideo});
  } catch (err) {
    res.status(404).json({status: 'error', message: `Video Not Found`});
  }
};

const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    const isVideoHasProduct = await Product.find({videoId: req.params.id});

    if (isVideoHasProduct.length > 0) {
      return res.status(400).json({status: 'error', message: 'Video has product!'});
    }

    await video.deleteOne();
    res.status(200).json({status: 'success', message: `Video ${video.title} Deleted Successfully!`});
  } catch (err) {
    res.status(404).json({status: 'error', message: 'Video Not Found'});
  }
};

export default {getVideos, getVideoById, addVideo, updateVideo, deleteVideo};
