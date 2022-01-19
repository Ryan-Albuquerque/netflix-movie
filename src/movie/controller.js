const service = require('./service');

const controller = {};

const list = async (req, res, next) => {
  try {
    const requests = await service.listMovies();
    return res.json({ requests });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const request = req.body;
    const created = await service.createMovie(request);
    return res.status(201).json({ created });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await service.removeMovie(id);
    return res.status(202).json({ removed });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const requestBody = req.body;
    const updated = await service.updateMovie(id, requestBody);
    return res.status(200).json({ updated });
  } catch (error) {
    next(error);
  }
};

controller.list = list;
controller.create = create;
controller.remove = remove;
controller.update = update;

module.exports = controller;
