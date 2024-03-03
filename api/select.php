<?php

include 'conn.php';


// SET LAST SEEN FOR USER

if (isset($_GET['reset']) && $_GET['reset'] == 1) {
    $resetQuery = "UPDATE users SET current_override_timestamp = NULL WHERE uid = ?";
    $resetStmt = $conn->prepare($resetQuery);
    $resetStmt->bind_param("i", $_GET['uid']);
    $resetStmt->execute();
    $resetStmt->close();
}

$currentTime = time();
$query = "INSERT INTO users (uid, super, last_seen, current_match, current_team) 
VALUES (?, 2, ?, ?, ?) 
ON DUPLICATE KEY UPDATE 
    last_seen = VALUES(last_seen), 
    current_match = IF(current_override_timestamp IS NOT NULL, current_match, VALUES(current_match)), 
    current_team = IF(current_override_timestamp IS NOT NULL, current_team, VALUES(current_team))
";
$stmt = $conn->prepare($query);
$stmt->bind_param("iiii", $_GET['uid'], $currentTime, $_GET['m'], $_GET['t']);
$stmt->execute();
$stmt->close();

$checkQuery = "SELECT current_override_timestamp, current_match, current_team FROM users WHERE uid = ?";
$checkStmt = $conn->prepare($checkQuery);
$checkStmt->bind_param("i", $_GET['uid']);
$checkStmt->execute();
$checkStmt->bind_result($currentOverrideTimestamp, $currentMatch, $currentTeam);
$checkStmt->fetch();
$checkStmt->close();


// RETURN SCORING DATA

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
        "select_data" => $data,
        "current_override_timestamp" => $currentOverrideTimestamp,
        "current_match" => $currentMatch,
        "current_team" => $currentTeam
    ]);
} else {
    echo json_encode([
        "response_code" => 200,
        "select_data" => []
    ]);
}

$conn->close();

?>