const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const conString = process.env.DATABASE_URL;

if (!conString) throw new Error("no database URL env var!");

const options = {
  connectionString: conString,
};

const db = new pg.Pool(options);

export default db;
