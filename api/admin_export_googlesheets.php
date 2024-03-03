<?php

include 'conn.php';

if (!empty($_GET['super'])) {
    $table = "data_ss";
} else {
    $table = "data";
}

// Fetch data from database
$query = "SELECT * FROM $table";
$result = mysqli_query($conn, $query);

// Check if there are rows
if (mysqli_num_rows($result) > 0) {
    // Define the CSV header
    $csv_content = '';
    // $columns = mysqli_fetch_fields($result);
    // $header = array();
    // foreach($columns as $column) {
    //     $header[] = $column->name;
    // }
    // $csv_content .= implode(",", $header) . "\n";

    // Fetch rows
    while ($row = mysqli_fetch_assoc($result)) {
        array_shift($row); // Remove the first column (uid)
        $remove_me = array("\n", "\t");
        $row = str_replace($remove_me, "", $row);
        $csv_content .= implode("\t", $row) . "\n";
    }
    
    // Escape newline characters for JavaScript
    $csv_content_js = json_encode($csv_content);
} else {
    echo "0 results";
}

echo $csv_content;

mysqli_close($conn);
?>