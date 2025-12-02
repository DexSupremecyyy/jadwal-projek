<?php 
include_once 'db.php';

// ambil id dari url (contoh: delete.php?id=1)
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "DELETE FROM projects WHERE id='$id'";

    if (mysqli_query($koneksi, $query)) {
        echo json_encode(["message" => "Terhapus"]);
    } else {
        echo json_encode(["message" => "Gagal hapus"]);
    }
}
?>