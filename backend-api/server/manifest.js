'use strict';

const Dotenv = require('dotenv');
const Confidence = require('@hapipal/confidence');
const Toys = require('@hapipal/toys');
const Schwifty = require('@hapipal/schwifty');

// Pull .env into process.env
Dotenv.config({ path: `${__dirname}/.env` });

// Glue manifest as a confidence store
module.exports = new Confidence.Store({
    server: {
        host: 'localhost',
        port: {
            $param: 'PORT',
            $coerce: 'number',
            $default: 3000
        },
        debug: {
            $filter: 'NODE_ENV',
            $default: {
                log: ['error', 'start'],
                request: ['error']
            },
            production: {
                request: ['implementation']
            }
        }
    },
    register: {
        plugins: [
            {
                plugin: '../lib', // Main plugin
                options: {}
            },
            {
                plugin: '@hapipal/schwifty',
                options: {
                  $filter: { $env: 'NODE_ENV' },
                  $default: {},
                  $base: {
                    migrateOnStart: true,
                    knex: {
                      client: 'pg',
                      connection: {
                        host: '127.0.0.1',
                        user: 'postgres',
                        password: 'admin',
                        database: 'yoga-pgmt'
                      },
                      seeds: {
                        directory: './lib/seeds'
                      }
                    }
                  },
                  production: {
                    migrateOnStart: false,
                    knex: {
                      client: 'pg',
                      connection: {
                        host: process.env.DB_HOST || '',
                        user: process.env.DB_USERNAME || '',
                        password: process.env.DB_PASSWORD || '',
                        database: '<your production db name>'
                      },
                      seeds: {
                        directory: './lib/seeds'
                      },
                      debug: true
                    }
                  },
                  development: {
                    knex: {
                      client: 'pg',
                      connection: {
                        host: '127.0.0.1',
                        user: 'postgres',
                        password: 'admin',
                        database: 'yoga-pgmt'
                      },
                      seeds: {
                        directory: './lib/seeds'
                      },
                      debug: true
                    }
                  }
                }
            },        
            {
                plugin: './plugins/swagger'
            },
            {
                plugin: {
                    $filter: 'NODE_ENV',
                    $default: '@hapipal/hpal-debug',
                    production: Toys.noop
                }
            }
        ]
    }
});
