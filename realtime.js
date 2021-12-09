var mysql      = require('mysql');
var connection = mysql.createConnection({
    server: "3306",
    connection: "mysql",
    host: "dbkelompoka.gmedia.bz",
    user: "gmedia_magangb",
    password: "indo1945!merdeka",
    database: "gmedia_magangb",
});

connection.connect();

var get_next = function(next_id){
  var statement = 'SELECT currentdc from data order by id desc';
  if(typeof next_id !== 'undefined'){
    statement = 'SELECT currentdc from data where id > "'+next_id+'"  order by id desc';
  }

  connection.query(statement, function(err, rows, fields) {
    if (!err){
      if(rows.length > 0){
        console.log("current: ", rows[0].id, rows[0].username);
        setTimeout(function(){
          get_next(rows[0].id)
        }, 10000);
      }else{
        console.log("no more new records!");
        connection.end();
      }
    }
    else
      console.log('Error while performing Query.');
  });  

  connection.on("error", function(err){
    console.log("an error occurred: ", err);
  });
}

setInterval(function () {
    connection.query('SELECT 1');
}, 5000);

get_next();