const mongoose = require('mongoose');
const config = require('../config');

const mongoService = {};

const connect = async () => {
  try {
    await mongoose.connect(config.MONGO_URL);
    console.log('[MongoDB] Database connected!');
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

const close = async () => {
  await mongoose.disconnect();
};

mongoService.connect = connect;
mongoService.close = close;

module.exports = mongoService;
