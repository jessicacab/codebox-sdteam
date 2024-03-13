'use strict';

const Schmervice = require('@hapipal/schmervice');

module.exports = class UserService extends Schmervice.Service {
  async getUsers() {
    try {
      const { Users } = this.server.models();
      const data = await Users.query();

      return data;
    }
    catch (error) {
      throw error;
    }
  }
};