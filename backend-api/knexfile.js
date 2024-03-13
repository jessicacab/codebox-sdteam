'use strict';

const Path = require('path');
const Hoek = require('@hapi/hoek');
const Manifest = require('./server/manifest');

// Take schwifty registration's knex option
// but specify the plugin's migrations directory

module.exports = Hoek.applyToDefaults(
    {
        migrations: {
            directory: Path.relative(process.cwd(), './lib/migrations/')
        }
    },
    Manifest
        .get('/register/plugins', process.env)
        .find(({ plugin }) => plugin === '@hapipal/schwifty')
        .options.knex
);