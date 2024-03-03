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
        $csv_content .= implode("\t", $row) . "\n";
    }
    
    // Escape newline characters for JavaScript
    $csv_content_js = json_encode($csv_content);
} else {
    echo "0 results";
}
mysqli_close($conn);
?>

<h1>Copy <?php if (!empty($_GET['super'])) echo "super"; else echo "regular"; ?> scout data to clipboard</h1>

<!-- HTML to hold the CSV for JavaScript -->
<textarea id="csvContent" style="display:none;"><?php echo htmlspecialchars($csv_content); ?></textarea>

<button onclick="copyToClipboard()">Copy to Clipboard</button>

<script>
function copyToClipboard() {
    var copyText = document.getElementById("csvContent").value;
    
    // New Clipboard API
    navigator.clipboard.writeText(copyText).then(function() {
        alert('Copied to clipboard successfully!');
        window.close();
    }, function(err) {
        alert('Could not copy text: ', err);
    });
}
</script>