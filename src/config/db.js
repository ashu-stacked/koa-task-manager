const pgp = require('pg-promise')();
const connectionString = 'postgres://postgres:postgres@localhost:5000/utkarsh'; //database credentials

const db = pgp(connectionString);

module.exports = db;