const model = require('./model');

const service = {};

const listMovies = async () => {
  const result = await model.find({});
  return result;
};
const createMovie = async (movie) => {
  const created = await model.create(movie);
  return created;
};
const removeMovie = async (movieId) => {
  const removed = await model.findOneAndDelete(movieId);
  return removed;
};
const updateMovie = async (id, movieUpdate) => {
  const updated = await model.findByIdAndUpdate(id, movieUpdate, {
    new: true,
  });
  return updated;
};
const isValidMovie = async (id) => {
  const movie = await model.findById(id);
  return Boolean(movie);
};

service.listMovies = listMovies;
service.createMovie = createMovie;
service.removeMovie = removeMovie;
service.updateMovie = updateMovie;
service.isValidMovie = isValidMovie;

module.exports = service;
