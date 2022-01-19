const util = require('../utils');
const service = require('./service');
const netflixGenderRequest = require('../requests/netflix-gender');

const validator = {};

const create = (req, res, next) => {
  const movie = req.body;

  if (!movie.name) {
    return res.status(400).json({
      message: 'Movie name is not defined',
    });
  }
  if (!movie.description) {
    return res.status(400).json({
      message: 'Movie description is not defined',
    });
  }
  if (!movie.gender) {
    return res.status(400).json({
      message: 'Movie gender is not defined',
    });
  }
  movie.gender.map(async (gen) => {
    const isValidGender = await netflixGenderRequest.getGenderInfo(gen);
    if (!isValidGender) {
      return res.status(400).json({
        message: `The gender ${gen} not exists.`,
      });
    }
  });
  if (!movie.releaseDate) {
    return res.status(400).json({
      message: 'Movie release date is not defined',
    });
  }
  if (!movie.rating) {
    return res.status(400).json({
      message: 'Movie rating is not defined',
    });
  }
  if (!movie.duration) {
    return res.status(400).json({
      message: 'Movie duration is not defined',
    });
  }
  next();
};

const remove = (req, res, next) => {
  const { id } = req.params;

  if (!id || !util.isValidMongoId(id) || !service.isValidMovie(id)) {
    return res.status(400).json({ message: 'Invalid Id' });
  }

  next();
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const updateMovie = req.body;

  if (!id || !util.isValidMongoId(id) || !(await service.isValidMovie(id))) {
    return res.status(400).json({ message: 'Invalid Id' });
  }

  if (updateMovie.gender) {
    updateMovie.gender.map(async (gen) => {
      const isValidGender = await netflixGenderRequest.getGenderInfo(gen);
      if (!isValidGender) {
        return res.status(400).json({
          message: `The gender ${gen} not exists.`,
        });
      }
    });
  }

  next();
};

validator.create = create;
validator.remove = remove;
validator.update = update;

module.exports = validator;
