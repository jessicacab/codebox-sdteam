# FULL STACK BOILERPLATE API
Base API project for create web API(s). A sample is provided for a purchase order system. Feel free to play with the example and remove it after.


## ARCHITECTURE
  ### Stack
  - Nodejs
  - HapiPal https://hapipal.com/
  - Postgres

## Deployment
  - PM2 http://pm2.keymetrics.io/

## Auth Strategy
  - Authentication strategy JWT (https://jwt.io/)
  - This API would produce a **JSON Web Token** for any client to be authorized to call protected endpoints.

## Schema
  - This seed project uses Walmart's **hapijs/joi** to create schema and validate payloads, parameters, or any other javascript objects

  - **Joi** is an *object schema description language and validator for JavaScript objects*. Joi allows you to create blueprints or schemas for JavaScript objects to ensure validation of key information. Joi can validate both input and output data.

## Starting a new project from this seed app
  ### Re-Initialize GIT
    - clone this repository
    - re-initialize git.
      1. cd to the project dir
      2. `rm -rf .git && git init`
      3. set the remote path of git to the new repository URL
    - (optional) You may opt to remove the sample files in this seed project.  
  ### Use the provided Node version via `NVM`
    - Node Version Manager (NVM) https://github.com/creationix/nvm
    - execute `nvm install && nvm use`
  ### Installing Modules (YARN)
    - Use only yarn instead of npm
    - if you don't have yarn in your machine install it (https://www.npmjs.com/package/yarn)
    - execute `yarn`
      *this will install the dependencies needed for the app to run*
  ### Edit Manifest file
    App settings is configured using a manifest file found in `server/manifest.js`
    - Update the manifest file to your config.

## API Documentation
  - This boilerplate also provides a way to document all available API endpoints needed by using Swagger in combination with hapiJS framework, it is able to automatically detect any endpoints added.
  - Swagger (https://swagger.io/), (https://github.com/glennjones/hapi-swagger)
  - You may edit `server/plugins/swagger/index.js` to customize swagger (title, url, etc...)

## CLI Commands and generators
  *ref: https://hapipal.com/docs/hpal*
  ```
    Usage: hpal <command> <options>

    Commands:

      hpal new <new-project-directory>
        e.g. hpal new ~/node-projects/new-pal-project

      hpal make [--asDir|--asFile] <haute-couture-item> [<item-name>]
        e.g. hpal make route create-user

      hpal docs[:<package-name>] [--ver x.y.z|ref] <docs-section> [<config-item>]
        e.g. hpal docs --ver 17.2.0 h.continue

      hpal run [--list] <cmd> [<cmd-options>]
        e.g. hpal run plugin-name:command-name


    Options:

      -h, --help       show usage options
      -v, --version    show version information
      -d, --asDir      [make] creates new haute-couture item in a directory index file
      -f, --asFile     [make] creates new haute-couture item in a file
      -V, --ver        [docs] specifies the version/ref of the API docs to search for the given package
      -l, --list       [run] lists all available commands on your server
  ```


## Migrations and Models
  *ref: https://hapipal.com/getting-started#models-and-migrations*
  ### CLI Generators
    - GENERATE Models
      1. `npx hpal make model <model-name>`. this will create `lib/models/<model-name>.js`
    - GENERATE Migrations (http://knexjs.org/#Migrations-CLI)
      1. npx knex migrate:make <migration name>. this will create `lib/migrations/<timestamp>_<migration-name>.js`
    - Run the migration
      1. npx knex migrate:latest

## Contributing
  _TODO_
