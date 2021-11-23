'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok('rest api berjalan',res)

};

//menampilkan semua data ina219
exports.tampilsemuadata = function(req,res){
    connection.query('SELECT * FROM ina219', function(error, rows, fields){
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
    connection.query('SELECT * FROM ina219 WHERE ID = ?', [id], function(error, rows, fields){
        if (error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};

//tambah data ina219
exports.tambahdata = function (req,res){
    var current = req.body.current;
    var voltage = req.body.voltage;
    
    // var time = req.body.time;

    connection.query('INSERT INTO ina219 (current,voltage) VALUES (?,?)',[current,voltage],function(error, rows, fields){
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
        var current = req.body.current;
        var voltage = req.body.voltage;

        connection.query('UPDATE ina219 SET current=?, voltage=? WHERE ID=?',[current,voltage,ID],function(error, rows, fields){
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

    connection.query('DELETE FROM ina219 WHERE ID=?',[ID],function(error, rows, fields){
        if (error){
            console.log(error);   
   
           }else{
               response.ok('menghapus data', res);
           }   
    });
}