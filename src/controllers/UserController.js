import User from '../models/UserModel.js';

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({status: 'success', data: users});
  } catch (err) {
    res.status(404).json({status: 'error', message: err.message});
  }
};

const getUserbyId = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({status: 'success', data: user});
  } catch (err) {
    res.status(404).json({status: 'error', message: 'User Not Found'});
  }
};

const addUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).json({status: 'success', data: user});
  } catch (err) {
    res.status(400).json({status: 'error', message: 'Please enter valid data!'});
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({status: 'success', data: updatedUser});
  } catch (err) {
    res.status(404).json({status: 'error', message: 'User Not Found'});
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({status: 'success', message: 'User deleted'});
  } catch (err) {
    res.status(404).json({status: 'error', message: 'User Not Found'});
  }
};

export default {getUsers, getUserbyId, addUser, updateUser, deleteUser};
