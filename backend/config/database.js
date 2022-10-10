module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 1337),
      database: env("DATABASE_NAME", "banfflogcabin"),
      user: env("DATABASE_USERNAME", "maya"),
      password: env("DATABASE_PASSWORD", "1382NUGGET"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    debug: false,
  },
});
