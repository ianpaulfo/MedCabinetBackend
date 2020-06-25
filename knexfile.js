// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/users.db3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: { 
      database: "process.env.DATABASE_URL",
      user: "agpvsvypryours",
      password: "6307155856ee086df582e1ab19efc05c3c172c8db2b36b6b874cf65aa47557be"
      },
    pool: {
      min:2,
      max:10
    },
    migrations: { 
      tableName: "knex_migrations",
      directory: "./migrations" 
    },
    seeds: { 
      directory: "./seeds" }
    }
};
