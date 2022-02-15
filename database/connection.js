var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

const conString = process.env.DATABASE_URL //Can be found in the Details page
const db = new pg.Client(conString);

export { db } ;