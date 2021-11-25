"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/tampil").get(jsonku.tampilsemuadata);

  app.route("/tampil/:id").get(jsonku.tampilberdasarid);

  app.route("/tambah").post(jsonku.tambahdata);

  app.route("/ubah").put(jsonku.ubahdata);

  app.route("/hapus").delete(jsonku.hapusdata);
};
