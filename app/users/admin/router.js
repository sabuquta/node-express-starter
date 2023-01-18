const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/auth');
const controller = require('./controller');
// const uploadController = require('../../commons/upload_middleware');
// const limit = require('express-better-ratelimit');

// const mobileCodeLimiter = limit({
//   duration: 1000 * 60, //1 minute
//   max: 10
// });
//
router.route('/')
  .get(authMiddleware.authenticateToken , controller.getUsers)
  .post(authMiddleware.authenticateToken , controller.addUser);

router.route('/:id')
    .get(authMiddleware.authenticateToken , controller.getUserById);

router.route('/:id')
    .delete(authMiddleware.authenticateToken , controller.deleteUserById);

router.route('/:id')
    .put(authMiddleware.authenticateToken , controller.updateUserById);

router.route('/change-status/:id')
    .put(authMiddleware.authenticateToken , controller.changeUserStatus);

module.exports = router;
