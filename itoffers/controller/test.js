var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'itoffers',
    port: 3308
});
conn.connect();
var selectSQL = "select * from test";

conn.query(selectSQL, function (err2, rows) {
    if (err2) console.log(err2);
    console.log(rows);
});

conn.end();