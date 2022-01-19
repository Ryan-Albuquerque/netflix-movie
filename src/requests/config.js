const axios = require('axios');
const config = require('../../config');

const request = (service) => {
  const serviceURL = `${config[service]}_URL`;
  // const serviceToken = `${config[service]}_TOKEN`;

  const baseRequest = axios.create({
    baseUrl: serviceURL,
    // headers: {
    //   Authorization: serviceToken,
    // },
  });

  const responseHandler = (response) => {
    if (response.status > 400) {
      throw new Error('Service is with problem!');
    }

    return response;
  };

  const errorHandler = (error) => Promise.reject(error);

  baseRequest.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
  );

  return baseRequest;
};

module.exports = request;
