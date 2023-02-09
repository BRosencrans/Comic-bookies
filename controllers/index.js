const express = require('express');
const router = express.Router();

const userRoutes =  require('./userController')
router.use('/api/users', userRoutes);

const forumRoutes =  require('./forumController')
router.use('/api/forum');

module.exports = router;