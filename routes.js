"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route('/').get(function (req, res) {
  res.sendFile(process.cwd() + '/index.html');});

  app.route("/tampil").get(jsonku.tampilsemuadata);

  app.route("/tampilbaru").get(jsonku.dataterbaru);

  app.route("/tampil/:id").get(jsonku.tampilberdasarid);

  app.route("/tambah").post(jsonku.tambahdata);

  app.route("/ubah").put(jsonku.ubahdata);

  app.route("/hapus").delete(jsonku.hapusdata);
};
