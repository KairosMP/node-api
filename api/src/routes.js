const express = require('express');
const routes = express.Router();

const VideoController = require('./controllers/VideoController');
const VideoMiddleware = require('./middlewares/VideoMiddleware');

const videosUrl = '/videos';

routes.get(videosUrl, VideoController.index);
routes.post(videosUrl, VideoController.store);

routes.put(videosUrl + "/:id", VideoMiddleware.validateId, VideoController.update)
routes.delete(videosUrl + "/:id", VideoMiddleware.validateId, VideoController.delete)

module.exports = routes;
