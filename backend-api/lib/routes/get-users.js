'use strict';

const Joi = require('joi');
const fp = require('lodash/fp');

module.exports = {
  method: 'GET',
  path: '/users',
  options: {
    tags: ['api'],
    handler: async (request, h) => {
      try {
        const { userService } = request.services();
       
        const response = await userService.getUsers();
        

        return response;
      }
      catch (error) {
        return error;
      }
    }
  }
};
