const mongoose = require('mongoose');
const config = require('../config');

const mongoService = {};

const connect = async () => {
  try {
    await mongoose.connect(config.MONGO_URL);
    console.log('[MongoDB] Database connected!');
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

mongoService.connect = connect;

module.exports = mongoService;
