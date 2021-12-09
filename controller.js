"use strict";

<script type="text/javascript" src="./jquery.min.js"></script>


var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("rest api berjalan", res);
};

//menampilkan semua data ina219
// exports.tampilsemuadata = function (req, res) {
//   connection.query("SELECT * FROM data", function (error, rows, fields) {
    
//     if (error) {
//       connection.log(error);
//     } else {
//       response.ok(rows, res);
//     }

//   });
// };

setInterval.tampilsemuadata(function(req, res){
  connection.query("SELECT * FROM data order by id desc", function (error, rows, fields){
    if (error) {
      console.log(error);
    }else{
      response.ok(rows, res);
    }
  },1000);
});

//menampilkan data ina219 berdasarkan id
exports.tampilberdasarid = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM data WHERE id = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//tambah data ina219
exports.tambahdata = function (req, res) {
  var currentac = req.body.currentac;
  var voltageac = req.body.voltageac;
  var currentdc = req.body.currentdc;
  var voltagedc = req.body.voltagedc;
  

  connection.query(
    "INSERT INTO data (currentac,voltageac,currentdc,voltagedc) VALUES (?,?,?,?)",
    [currentac, voltageac, currentdc, voltagedc],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("berhasil tambah", res);
      }
    }
  );
};

// megubah data berdasarkan idnya
exports.ubahdata = function (req, res) {
  var id = req.body.id;
  var currentac = req.body.currentac;
  var voltageac = req.body.voltageac;
  var currentdc = req.body.currentdc;
  var voltagedc = req.body.voltagedc;

  connection.query(
    "UPDATE data SET currentac=?, voltageac=?, currentdc=?, voltagedc=? WHERE id=?",
    [currentac, voltageac, currentdc, voltagedc, id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("berhasil ubah data", res);
      }
    }
  );
};

//menghapus data berdasarkan id
exports.hapusdata = function (req, res) {
  var id = req.body.id;

  connection.query(
    "DELETE FROM data WHERE id=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("menghapus data", res);
      }
    }
  );
};
