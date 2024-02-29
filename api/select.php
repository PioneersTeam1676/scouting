<?php

include 'conn.php';

$sql = "SELECT * FROM data";
$result = $conn->query($sql);

$data = array(); // Initialize an empty array to store the rows

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        $data[] = $row; // Add each row into the data array
    }
    echo json_encode([
        "response_code" => 200,
        "select_data" => $data
    ]);
} else {
    echo json_encode([
        "response_code" => 200,
        "select_data" => []
    ]);
}

$conn->close();

?>