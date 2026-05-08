const { Client } = require('pg');

const connectionString = 'postgresql://portfolio_db_r4x8_user:mzflwEgebyXlgfsn2gmnvh6XLU3FotdU@dpg-d7unnl5b910c73ep99eg-a.singapore-postgres.render.com/portfolio_db_r4x8';

const client = new Client({
  connectionString: connectionString,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;