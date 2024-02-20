<?php
// Define the pattern to search for '.jpg' files
$pattern = "*.jpg";

// Use glob() to get all .jpg files in the current directory
$images = glob($pattern);

// Check if there are any images
if ($images !== false) {
    // Loop through the array of image files
    foreach ($images as $image) {
        // Echo an img tag for each image
        echo '<img src="' . htmlspecialchars($image) . '" alt="" width="100" />';
        echo '<span style="position: absolute; color: white; font-size: 10px; margin-left: -97px;">' . htmlspecialchars(basename($image)) . '</span>';
        
    }
} else {
    echo "No images found.";
}
?>
