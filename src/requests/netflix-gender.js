const requestService = require('./config');

const requestBase = requestService('NETFLIX_GENDER');

const requests = {};

const getGenderInfo = async (genderId) => {
  const genderInfo = await requestBase.get(`${genderId}`);
  return genderInfo;
};

requests.getGenderInfo = getGenderInfo;

module.exports = requests;
