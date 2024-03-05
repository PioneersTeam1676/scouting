<?php

include 'conn.php';

$sql = "SELECT default_alliance, default_position FROM users WHERE uid = " . $_GET['uid'] . " LIMIT 1";
$result = $conn->query($sql);

$data = array(); // Initialize an empty array to store the rows

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo json_encode([
            "response_code" => 200,
            "competition" => $COMP_NUM,
            "alliance" => $row['default_alliance'],
            "position" => $row['default_position']
        ]);
    }
} else {
    echo json_encode([
        "response_code" => 500
    ]);
}

?>