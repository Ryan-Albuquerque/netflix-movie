const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  MONGO_URL: process.env.MONGO_URI,
  NETFLIX_GENDER_URL: process.env.NETFLIX_GENDER_URL,
};
