const requestService = require('./config');

const requests = {};

const getGenderInfo = async (genderId) => {
  const genderInfo = await requestService.get(`${genderId}`);
  return genderInfo;
};

requests.getGenderInfo = getGenderInfo;

module.exports = requests;
