var express = require('express');
var path = require('path');
var app = express();

app.use('/jsFiles', express.static(__dirname + '/js'));
app.use('/cssFiles', express.static(__dirname + '/css'));
app.use('/image', express.static(__dirname + '/images'));
app.get('/', function(req, resp) {
    resp.sendFile('index.html', {root: path.join(__dirname, './')});
});
app.post('/stop_button', function (req, res) {
    const data = { name: 'John', age: 30 };
    res.json(data);
});
app.post('/home_team_dropdown', function (req, res) {
    console.log('valasztva');
    console.log(req.query.hometeam);
    res.json([{
        name_recieved: req.body.name,
        designation_recieved: req.body.designation
     }])
     console.log(name_recieved)
     console.log(designation_recieved)
});
app.post('/away_team_dropdown', function (req, res) {
    console.log('valasztvaaway');
});
app.listen(1337, function(){
    console.log("fut");
});

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
});*/