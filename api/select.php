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
    echo json_encode($data); // Convert the data array to JSON and echo it
} else {
    echo "0 results"; // Handle the case of no rows found
}

$conn->close();

?>