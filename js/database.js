const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'login'
});

con.query('SELECT * FROM login', (err,rows) => {
    if(err) throw err;
        rows.forEach(function(row){
            console.log(`${row.username} lives in ${row.email}`);
        });
});