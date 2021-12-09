<?php
//koneksi
$konek = mysqli_connect("3306",  "mysql", "dbkelompoka.gmedia.bz", "gmedia_magangb", "indo1945!merdeka", "gmedia_magangb");

//manggil data terakhir
$sql = mysqli_query($konek, "select * from data order by id desc");

//ambil data
$data = mysqli_fetch_array($sql);

$voltage = $data["voltagedc"];

//uji
echo $voltage;

?>