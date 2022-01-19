const route = require('express').Router();

const movieRoutes = require('./src/movie/routes');
const errorHandler = require('./src/middlewares/errorHandler');

route.use(movieRoutes);
route.use(errorHandler);

module.exports = route;
