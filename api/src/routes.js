const express = require('express');
const routes = express.Router();

const VideoController = require('./controllers/VideoController');

const videosUrl = "/videos"

routes.get(videosUrl, VideoController.index);
routes.post(videosUrl, VideoController.store)

module.exports = routes;
