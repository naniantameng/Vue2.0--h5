// 连接数据库
var mysql = require('mysql');
var ConnectServer = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'myf'
});
ConnectServer.connect();
module.exports = ConnectServer;
