<?php

include 'conn.php';

if (!empty($_GET['super'])) {
    $table = "data_ss";
} else {
    $table = "data";
}

$filename = "export_" . $table . "_" . date('Y-m-d') . ".csv";

header("Content-Disposition: attachment; filename=\"$filename\"");
header("Content-Type: text/csv");

$output = fopen('php://output', 'w');

// Fetch the header fields
$result = mysqli_query($conn, "SELECT * FROM $table LIMIT 1");
$row = mysqli_fetch_assoc($result);
if ($row) {
    fputcsv($output, array_keys($row));
}

// Fetch the data
$result = mysqli_query($conn, "SELECT * FROM $table");
while ($row = mysqli_fetch_assoc($result)) {
    fputcsv($output, $row);
}

fclose($output);

?>