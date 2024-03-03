<?php

include 'conn.php';

// Check if both match_num and team_num are provided
if (isset($_GET['match_num']) && isset($_GET['team_num'])) {
    $matchNum = $_GET['match_num'];
    $teamNum = $_GET['team_num'];

    // Prepare the SQL statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM matches WHERE match_num = ? AND (r1 = ? OR r2 = ? OR r3 = ? OR b1 = ? OR b2 = ? OR b3 = ?)");
    $stmt->bind_param("iiiiiii", $matchNum, $teamNum, $teamNum, $teamNum, $teamNum, $teamNum, $teamNum);

    // Execute the query
    $stmt->execute();
    
    // Get the result
    $result = $stmt->get_result();

    // Check if any rows are returned
    if ($result->num_rows > 0) {
        // Team found in the match
        echo json_encode(true);
    } else {
        // Team not found in the match
        echo json_encode(false);
    }
} else {
    // Required parameters not provided
    echo json_encode(["error" => "match_num and team_num are required."]);
}

?>