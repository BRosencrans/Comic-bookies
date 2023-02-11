const express = require('express');
const router = express.Router();

const userRoutes =  require('./userController')
router.use('/api/users', userRoutes);

const postRoutes =  require('./postController')
router.use('/api/posts', postRoutes);

const commentRoutes =  require('./commentController')
router.use('/api/comments', commentRoutes);

const publisherRoutes = require('./publisherController')
router.use('/api/publishers', publisherRoutes);

const characterRoutes = require('./characterController')
router.use('/api/characters', characterRoutes);

const seriesRoutes = require('./seriesController')
router.use('/api/series', seriesRoutes);

const volumeRoutes = require('./volumeController')
router.use('/api/volumes', volumeRoutes);

module.exports = router;