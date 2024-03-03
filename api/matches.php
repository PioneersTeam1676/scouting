<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'conn.php';

if (isset($_GET['input1_match']) && isset($_GET['input1_team'])) {
    $input1_match = $_GET['input1_match'];
    $input1_team = $_GET['input1_team'];

    // Prepare the SQL statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT r1, r2, r3, b1, b2, b3 FROM matches WHERE match_num = ?");
    $stmt->bind_param("s", $input1_match);
    $stmt->execute();
    $result = $stmt->get_result();
    
    $suggestions = [];
    
    while ($row = $result->fetch_assoc()) {
        foreach (['r1', 'r2', 'r3', 'b1', 'b2', 'b3'] as $column) {
            if (stripos($row[$column], $input1_team) !== false) { // Case-insensitive search
                $suggestions[] = $row[$column];
            }
        }
    }
    
    echo json_encode(array_unique($suggestions)); // Return unique suggestions
}

?>