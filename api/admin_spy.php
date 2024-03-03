<?php

include 'conn.php';

header('Content-Type: application/json');

$query = "SELECT * FROM users";
$result = $conn->query($query);

$scouts = [];

while($row = $result->fetch_assoc()) {
    $scouts[] = $row;
}

echo json_encode($scouts);

$conn->close();

?>