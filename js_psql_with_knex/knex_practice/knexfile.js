// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_practice_nov_19',
      // LINUX ONLY
      // username: 'your_username',
      // password: 
    },
    migrations: {
      tableName: 'migrations',
      directory: 'db/migrations',
    },
  },

};
