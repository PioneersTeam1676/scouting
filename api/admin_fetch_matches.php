<?php

include 'conn.php';

header('Content-Type: application/json');

$query = "SELECT * FROM matches WHERE comp_num = 1 ORDER BY match_num ASC";
    
$results = $conn->query($query);

if ($results) {
    $matches = array();
    while($row = $results->fetch_assoc()) {
        $matches[] = $row;
    }
    echo json_encode($matches);
} else {
    echo json_encode(['error' => 'Query failed: ' . $conn->error]);
}

?>