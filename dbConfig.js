const env = process.env;


// setup database
const config = {
  host: env.DB_HOST || 'localhost',
  user: env.DB_USER || 'root',
  password: env.DB_PASSWORD || "1234",
  database: env.DB_NAME || "watersupply",
  multipleStatements: true
}

module.exports = config;