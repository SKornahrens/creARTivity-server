module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/secrets'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
