const axios = require('axios');
const url = require('../../config').NETFLIX_GENDER_URL;

const requests = {};

const getGenderInfo = async (genderId) => {
  try {
    const { data } = await axios.get(`${url}/gender/${genderId}`);
    if (data.gender) return true;
    return false;
  } catch (error) {
    console.log('Error try to request: ', error);
    return false;
  }
};

requests.getGenderInfo = getGenderInfo;

module.exports = requests;
