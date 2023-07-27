import Comment from '../models/CommentModel.js';

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({videoId: req.params.videoId});

    if (comments.length === 0) {
      return res.status(404).json({status: 'success', message: 'Comments Not Found.'});
    }

    res.status(200).json({status: 'success', data: comments});
  } catch (err) {
    res.status(404).json({status: 'error', message: err.message});
  }
};

const addComment = async (req, res) => {
  const comment = new Comment(req.body);
  try {
    await comment.save();
    res.status(201).json({status: 'success', data: comment});
  } catch (err) {
    res.status(400).json({status: 'error', message: 'Please enter valid data!'});
  }
};

export default {getComments, addComment};
