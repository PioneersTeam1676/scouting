<?php

include 'conn.php';

echo "<b>Please check log below for errors:</b><br/><hr/><br/>";

if (isset($_POST["submit"])) {
    $target_dir = "uploads/"; // Make sure this directory exists and is writable
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);

    // Try to upload file
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file " . htmlspecialchars(basename($_FILES["fileToUpload"]["name"])) . " has been uploaded.<br/>";

        // Empty the table
        // $conn->query("TRUNCATE TABLE matches");

        // Open the uploaded file
        $file = fopen($target_file, "r");

        // Skip the header row if your CSV file includes a header
        // fgetcsv($file);

        // Read file line by line and insert into database
        while (($column = fgetcsv($file, 10000, ",")) !== FALSE) {
            $sql = "INSERT INTO matches (comp_num, match_num, r1, r2, r3, b1, b2, b3) VALUES ($COMP_NUM, '" . $column[0] . "', '" . $column[1] . "', '" . $column[2] . "', '" . $column[3] . "', '" . $column[4] . "', '" . $column[5] . "', '" . $column[6] . "')";

            if (!$conn->query($sql)) {
                echo "Error: " . $sql . "<br>" . $conn->error;
            } else {
                echo "<br/>Match " . $column[0] . " was imported successfully.";
            }
        }
        fclose($file);

        // Optionally, delete the file after processing
        // unlink($target_file);
        
        echo "<br/><br/><hr/><a href='../admin.html'>Back to admin portal ›</a>";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}

$conn->close();

?>