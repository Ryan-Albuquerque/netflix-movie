const mongoose = require('mongoose');

const util = {};

const isValidMongoId = (id) => mongoose.Types.ObjectId.isValid(id);

util.isValidMongoId = isValidMongoId;

module.exports = util;
