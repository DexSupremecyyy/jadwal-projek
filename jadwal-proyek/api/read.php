<?php

include_once 'db.php';

$query = "SELECT * FROM projects ORDER BY id DESC";
$result = mysqli_query($koneksi, $query);
$response = [];


while ($row = mysqli_fetch_assoc($result)) {
    $response[] = $row;
}

echo json_encode($response);

?>