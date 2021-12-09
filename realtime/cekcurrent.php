<?php
//koneksi
$konek = mysqli_connect("dbkelompoka.gmedia.bz", "gmedia_magangb", "indo1945!merdeka", "gmedia_magangb");

//manggil data terakhir
$sql = mysqli_query($konek, "select * from data order by id desc");

//ambil data
$data = mysqli_fetch_array($sql);

$current = $data["currentdc"];

//uji
echo $current;

?>