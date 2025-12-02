<?php
include_once 'db.php';

$input = json_decode(file_get_contents("php://input"));

if (!empty($input->id) && !empty($input->nama)) {
    $id = $input->id;
    $nama = $input->nama;
    $mulai = $input->mulai;
    $selesai = $input->selesai;
    $status = $input->status;

    $query = "UPDATE projects SET 
                nama='$nama', 
                mulai='$mulai', 
                selesai='$selesai', 
                status='$status' 
                WHERE id='$id'";

    if (mysqli_query($koneksi, $query)) {
        echo json_encode(["message" => "Update Berhasil"]);
    } else {
        echo json_encode(["message" => "Gagal Update"]);
    }
}
?>