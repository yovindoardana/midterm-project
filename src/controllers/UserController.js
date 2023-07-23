import User from '../models/UserModel.js';

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const getUserbyId = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const addUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({message: 'User deleted'});
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

export default {getUsers, getUserbyId, addUser, updateUser, deleteUser};
