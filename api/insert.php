<?php
// Include the database connection file
include 'conn.php';

// Check if data is posted as JSON
if(isset($_POST['data'])) {
    // Decode the JSON object into an associative array
    $data = json_decode($_POST['data'], true);

    // Prepare an SQL INSERT statement with placeholders for the values to insert
    $sql = "INSERT INTO data (uid, comp_num, match_num, team_num, alliance, position, mobility, auto_amp_scored, auto_amp_missed, auto_spkr_scored, auto_spkr_missed, tele_amp_scored, tele_amp_missed, tele_spkr_scored, tele_spkr_missed, trap_scored, trap_missed, climb, grnd_pickup, src_pickup, subwfr_shots, podium_shots, stg_lg_shots, coopertition, harmony) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    // Prepare the SQL statement
    $stmt = $conn->prepare($sql);

    // Bind the values from the $data array to the statement
    $stmt->bind_param("iiiiiiiiiiiiiiiiiiiiiiiiii", 
        $data['uid'], 
        $data['comp_num'], 
        $data['match_num'], 
        $data['team_num'], 
        $data['alliance'], 
        $data['position'], 
        $data['mobility'], 
        $data['auto_amp_scored'], 
        $data['auto_amp_missed'], 
        $data['auto_spkr_scored'], 
        $data['auto_spkr_missed'], 
        $data['tele_amp_scored'], 
        $data['tele_amp_missed'], 
        $data['tele_spkr_scored'], 
        $data['tele_spkr_missed'], 
        $data['trap_scored'], 
        $data['trap_missed'], 
        $data['climb'], 
        $data['grnd_pickup'], 
        $data['src_pickup'], 
        $data['subwfr_shots'], 
        $data['podium_shots'], 
        $data['stg_lg_shots'], 
        $data['coopertition'], 
        $data['harmony']
    );

    // Execute the statement
    if ($stmt->execute()) {
        echo "201";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement
    $stmt->close();
} else {
    echo "No data received";
}

// Close connection
$conn->close();
?>
