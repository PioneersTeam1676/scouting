<?php

include 'conn.php';
$currentTime = time();

$data = json_decode(file_get_contents('php://input'), true);

// var_dump($data);

// Check if data is posted as JSON
if(isset($data)) {
    
    foreach ($data as $key => $value) {
        $data[$key] = (int) $value;
    }
    
    $sql = "UPDATE users SET default_alliance = ?, default_position = ?, default_override_timestamp = ? WHERE uid = ?";

    // Prepare the SQL statement
    $stmt = $conn->prepare($sql);

    // Bind the values from the $data array to the statement
    $stmt->bind_param("iiii",
        $data['default_alliance'],
        $data['default_position'],
        $currentTime,
        $data['uid']
    );

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode([
            "response_code" => 200
        ]);
    } else {
        http_response_code(500);
        echo "Server Error: " . $stmt->error;
    }
    
    $stmt->close();
    
} else {
    http_response_code(400);
    echo "Server Error: No data received.";
}

$conn->close();

?>