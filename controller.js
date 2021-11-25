'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok('rest api berjalan',res)

};

//menampilkan semua data ina219
exports.tampilsemuadata = function(req,res){
    connection.query('SELECT * FROM data', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
        
    });
};

//menampilkan data ina219 berdasarkan id
exports.tampilberdasarid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM data WHERE ID = ?', [id], function(error, rows, fields){
        if (error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};

//tambah data ina219
exports.tambahdata = function (req,res){
    var currentdc = req.body.currentdc;
    var voltagedc = req.body.voltagedc;
    
    // var time = req.body.time;

    connection.query('INSERT INTO data (currentdc,voltagedc) VALUES (?,?)',[currentdc,voltagedc],function(error, rows, fields){
        if (error){
         console.log(error);   

        }else{
            response.ok('berhasil tambah', res);
        }
    });
};

// megubah data berdasarkan idnya
    exports.ubahdata = function (req,res){
        var ID = req.body.ID;
        var currentdc = req.body.currentdc;
        var voltagedc = req.body.voltagedc;

        connection.query('UPDATE data SET currentdc=?, voltagedc=? WHERE ID=?',[currentdc,voltagedc,ID],function(error, rows, fields){
            if (error){
                console.log(error);   
       
               }else{
                   response.ok('berhasil ubah data', res);
               }   
        });
    };

//menghapus data berdasarkan id
exports.hapusdata = function(req,res){
    var ID = req.body.ID;

    connection.query('DELETE FROM data WHERE ID=?',[ID],function(error, rows, fields){
        if (error){
            console.log(error);   
   
           }else{
               response.ok('menghapus data', res);
           }   
    });
}