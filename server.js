var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === "/") {
        fs.readFile('index.html', (err, html) => {
            if (err) {
                throw err;
            }
            res.setHeader('Content-type', 'text/html');
            res.write(html);
            res.statusCode = 200;
            res.end();
        });
    }
    else if (req.url == '/style.css') {
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('style.css'));
        res.end();
    } else {
        res.write("invalid request")
        res.end();
    }
}).listen(8090);

//Ez lesz az adatbázis
/*
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wildem'
});

con.query('SELECT * FROM login', (err,rows) => {
    if(err) throw err;
        rows.forEach(function(row){
            console.log(`${row.username} lives in ${row.email}`);
        });
});
*/
