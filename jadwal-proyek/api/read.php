<?php

include_once 'db.php';

$query = "SELECT * FROM projects ORDER BY id DESC";
$result = mysqli_query($koneksi, $query);
$response = [];

$hari_ini = date('Y-m-d');

while ($row = mysqli_fetch_assoc($result)) {
    if ($row['status'] != 'Selesai' && $row['selesai'] < $hari_ini) {
        // manipulasi outputnya (Gak ngerubah database, cuma tampilan)
        $row['status'] = 'Telat';
    }
    
    $response[] = $row;
}

echo json_encode($response);

?>