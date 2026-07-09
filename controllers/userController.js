const userService = require('../services/userService');

exports.getMe = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.user.id);
    res.json({ id: user.id, username: user.username, createdAt: user.createdAt });
  } catch (err) {
    next(err);
  }
};
