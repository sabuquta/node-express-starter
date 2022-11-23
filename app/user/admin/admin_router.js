const express = require('express');
const router = express.Router();
const authController = require('../../auth/user/auth_controller');
const admin_controller = require('./admin_controller');
// const uploadController = require('../../commons/upload_middleware');
// const limit = require('express-better-ratelimit');

// const mobileCodeLimiter = limit({
//   duration: 1000 * 60, //1 minute
//   max: 10
// });
//
// router.route('/me')
//   .get(authController.authenticate,
//     userController.getMyProfile);
//
// router.route('/billing_detail')
//   .get(authController.authenticate,
//     userController.getBillingDetail)
//
// router.route('/billing_detail')
//   .post(authController.authenticate,
//     userController.createBillingDetail)
//
// router.route('/billing_detail')
//   .put(authController.authenticate,
//     userController.updateBillingDetail)
//
// router.route('/location')
//   .put(authController.authenticate,
//     userController.updateLocation)
//
// router.route('/')
//   .delete(authController.authenticate,
//     userController.deleteAccount);
//
// router.route('/send_verify_code')
//   .post(mobileCodeLimiter, authController.authenticate,
//     userController.sendDeleteVerifyCode);
//
// router.route('/:user_id')
//   .get(authController.authenticate,
//     userController.getUserDetails)
//   .put(authController.authenticate,
//     authController.authorize,
//     uploadController.uploadFiles,
//     userController.updateMyUserProfile);

module.exports = router;
