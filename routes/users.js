var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const dbConfig = require('../config/dbconfig');
const connection = mysql.createConnection(dbConfig);

/* GET users listing. */
router.get('/', (req, res) => {
  connection.query('SELECT * from table_sample', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

module.exports = router;
