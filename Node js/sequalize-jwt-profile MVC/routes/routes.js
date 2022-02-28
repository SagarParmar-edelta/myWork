const express = require('express');
const contoller = require('../controllers/contoller.js');
const athenticateToken = require('../middlewares/athenticateToken.js');
const router = express.Router();

router.post('/reg', contoller.registration);
router.post('/login', contoller.login);
router.get('/userdetails', contoller.getAllUsers);
router.get('/profile', athenticateToken, contoller.userProfile);
router.put('/profile', athenticateToken, contoller.updateProfile);
router.delete('/account', contoller.deleteAccount);

module.exports = router;
