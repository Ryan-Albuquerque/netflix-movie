const route = require('express').Router();
const validator = require('./validator');
const controller = require('./controller');

const routes = () => {
  route.get('/movies', controller.list);
  route.post('/movie', validator.create, controller.create);
  route.delete('/movie/:id', validator.remove, controller.remove);
  route.patch('/movie/:id', validator.update, controller.update);
};

module.exports = routes;
