// Update with your config settings.
const pg = require('pg')
pg.defaults.ssl = true

module.exports = {
  //Delete in Production
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL_SSL_TRUE,
    migrations: {
      directory: 'db/knex/migrations',
    },
    seeds: {
      directory: 'db/knex/seeds'
    },
    ssl: true
  }

};
