"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("rest api berjalan", res);
};

//menampilkan semua data 
exports.tampilsemuadata = function (req, res) {
  connection.query("SELECT * FROM data", function (error, rows, fields) {
    
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }

  });
};

//menampilkan data users 
exports.tampilusers = function (req, res) {
  connection.query("SELECT * FROM users ", function (error, rows, fields) {
    
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }

  });
};

// tambah data user
exports.tambahuser = function (req, res) {
  var nama = req.body.nama;
  var email = req.body.email;
  var password = req.body.password;

  connection.query(
    "INSERT INTO users (nama,email,password) VALUES (?,?,?)",
    [nama, email, password],
    function (error, rows, fields) {
      if (error) {
        const result = {
          status:false,
          message: "gagal tambah users",
          data: null,
          error:error
        }
        res.status(400).json(result);
      } else {
        const result = {
          status:true,
          message: "berhasil tambah users",
          data: {
            nama,
            email,
            password
          },
          error:null
        }
        res.status(200).json(result);
      }
    }
  );
};

//login user
exports.loginuser = function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  connection.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    function (error, rows, fields) {
      if(rows.length<1){
        const result = {
              status:false,
              message: "username dan password masih salah",
              data: null,
              error:error
        }
        res.status(400).json(result);
      }else{
        const result = {
          status:true,
          message: "selamat datang",
          data: rows,
          error:null
        }
        res.status(200).json(result);
      }
    }
  );
};

//tampil semua data dari yang terbaru
exports.tampilsemuadata1 = function (req, res) {
  connection.query("SELECT * FROM data order by id desc ", function (error, rows, fields) {
    
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }

  });
};

//menampilkan data terakhir
exports.dataterbaru = function (req, res) {
  connection.query("SELECT * FROM data order by id desc limit 1 ", function (error, rows, fields) {
    
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }

  });
};

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
  var dayaac = req.body.dayaac;
  var currentdc = req.body.currentdc;
  var voltagedc = req.body.voltagedc;
  var dayadc = req.body.dayadc;
  

  connection.query(
    "SELECT INTO data (currentac,voltageac,dayaac,currentdc,voltagedc,dayadc) VALUES (?,?,?,?,?,?)",
    [currentac, voltageac, dayaac, currentdc, voltagedc, dayadc],
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
  var dayaac = req.body.dayaac;
  var currentdc = req.body.currentdc;
  var voltagedc = req.body.voltagedc;
  var dayadc = req.body.dayadc;

  connection.query(
    "UPDATE data SET currentac=?, voltageac=?,  dayaac=?, currentdc=?, voltagedc=?, dayadc=? WHERE id=?",
    [currentac, voltageac, dayaac, currentdc, voltagedc, dayadc, id],
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