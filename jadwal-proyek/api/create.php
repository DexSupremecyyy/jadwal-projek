<?php

include_once 'db.php';

// Terima data json dari js
$input = json_decode(file_get_contents("php://input"));

if (!empty($input->nama) && !empty($input->mulai)) {
    $nama = $input->nama;
    $mulai = $input->mulai;
    $selesai = $input->selesai;
    $status = $input->status;

    $query = "INSERT INTO projects (nama, mulai, selesai, status) VALUES ('$nama', '$mulai', '$selesai', '$status')";

    if (mysqli_query($koneksi, $query)) {
        echo json_encode(["message" => "Berhasil"]);
    } else {
        echo json_encode(["message" => "Gagal"]);
    }
} else {
    echo json_encode(["message" => "Data tidak lengkap"]);
}


?>