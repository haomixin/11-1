var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root'
});


/* GET home page. */
router.post('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    connection.query('SELECT * FROM baobei.jgr LIMIT 0,3',function(err,rows,fileds){
        res.send(rows)
    })
});
module.exports = router;
