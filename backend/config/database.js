module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "banff_log_cabin"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "admin"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});

//THIS IS MINE. PLEASE CREATE YOUR OWN DATABASE AND INPUT THE INFORMATION HERE.
