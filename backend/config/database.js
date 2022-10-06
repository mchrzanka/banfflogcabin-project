module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'dmitstudent.ca'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'banfflogcabin'),
      user: env('DATABASE_USERNAME', 'banfflogcabin'),
      password: env('DATABASE_PASSWORD', 'P@ssword321'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
