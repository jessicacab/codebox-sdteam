'use strict';

const { Model } = require('./helpers');
const Joi = require('joi');

module.exports = class Users extends Model {

  static get tableName() {
    return 'users';
  }

  static get joiSchema() {
    return Joi.object({
      id: Joi.number().integer(),
      first_name: Joi.string(),
      last_name: Joi.string()
    });
  }
};
