<?php
// Include the database connection file
include 'conn.php';

$data = json_decode(file_get_contents('php://input'), true);

// Check if data is posted as JSON
if(isset($data)) {
    
    foreach ($data as $key => $value) {
        if (is_numeric($value)) {
            $data[$key] = (int) $value;
        }
    }

    // Prepare an SQL INSERT statement with placeholders for the values to insert
    $sql = "INSERT INTO data_ss (uid, comp_num, match_num, team_num, alliance, position, auto_path, amplified_scored, amplified_missed, offense_rate, defense_rate, offense_defense_notes, score_focus, drive_team_rate, amp_strat_rate, amp_strat_notes, climb_attempts, trap_attempts, human_frisbee, climb_rate, climb_notes, robot_broke) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    // Prepare the SQL statement
    $stmt = $conn->prepare($sql);

    // Bind the values from the $data array to the statement
    $stmt->bind_param("iiiiiisiiiisiiisiiiisi", 
        $data['uid'], 
        $data['comp_num'], 
        $data['match_num'], 
        $data['team_num'], 
        $data['alliance'], 
        $data['position'], 
        $data['auto_path'], 
        $data['amplified_scored'], 
        $data['amplified_missed'], 
        $data['offense_rate'], 
        $data['defense_rate'], 
        $data['offense_defense_notes'], 
        $data['score_focus'], 
        $data['drive_team_rate'], 
        $data['amp_strat_rate'], 
        $data['amp_strat_notes'], 
        $data['climb_attempts'], 
        $data['trap_attempts'], 
        $data['human_frisbee'], 
        $data['climb_rate'], 
        $data['climb_notes'], 
        $data['robot_broke']
    );

    // Execute the statement
    if ($stmt->execute()) {
        $insert_id = $conn->insert_id;
        if (updateMatchesTable($conn, $data['uid'], $data['comp_num'], $data['match_num'], $data['team_num'])) {
            http_response_code(201);
            echo json_encode([
                "response_code" => 201,
                "insert_id" => $insert_id
            ]);
        } else {
            http_response_code(201);
            echo json_encode([
                "response_code" => 201,
                "insert_id" => $insert_id
            ]);
        }
    } else {
        http_response_code(500);
        echo "Server Error: " . $stmt->error;
    }

    // Close statement
    $stmt->close();
} else {
    http_response_code(400);
    echo "Server Error: No data received.";
}

function updateMatchesTable($conn, $uid, $comp_num, $match_num, $team_num) {
    $columns = ['r1', 'r2', 'r3', 'b1', 'b2', 'b3'];

    foreach ($columns as $column) {
        // Dynamic column for UID update, assuming a naming convention of column_uid (e.g., r1_uid)
        $uid_column = $column . '_ss_uid';
    
        // Prepare the SELECT statement to check if the team_num exists in the current column
        $selectQuery = $conn->prepare("SELECT $column FROM matches WHERE match_num = ? AND $column = ?");
        $selectQuery->bind_param("ii", $match_num, $team_num);
    
        // Execute the SELECT query
        $selectQuery->execute();
        $result = $selectQuery->get_result();
    
        // If the team_num is found in the current column, update the corresponding UID column
        if ($result && $result->num_rows > 0) {
            // Prepare the UPDATE statement to update the UID column
            $updateQuery = $conn->prepare("UPDATE matches SET $uid_column = ? WHERE match_num = ?");
            $updateQuery->bind_param("ii", $uid, $match_num);
    
            // Execute the UPDATE query
            if ($updateQuery->execute()) {
                return true;
            } else {
                echo "Error updating record for $column: " . $conn->error . "\n";
            }
        }
    }
}

// Close connection
$conn->close();
?>
