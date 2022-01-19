function errorHandler(err, req, res, next) {
  console.log(`${err.message}\n${err.stack}`);

  if (res.headersSent) {
    return next(err);
  }
  return res.status(500).json({ message: err.message, stack: err.stack });
}

module.exports = errorHandler;
