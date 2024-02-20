<?php
// Check if GD Library is available
if (!extension_loaded('gd')) {
    die("GD library is not available. Please install and enable it.");
}

// Function to overlay images
function overlayImages($baseImage, $overlayImages) {
    $base = imagecreatefromjpeg($baseImage);
    foreach ($overlayImages as $overlayImage) {
        $overlay = imagecreatefrompng($overlayImage);
        imagecopy($base, $overlay, 0, 0, 0, 0, imagesx($overlay), imagesy($overlay));
        imagedestroy($overlay);
    }
    return $base;
}

// Process GET parameters
$baseImage = './assets/field2024.jpg';
$overlayImages = [];

foreach ($_GET as $key => $value) {
    if (strpos($key, 'p') === 0 && intval(substr($key, 1)) > 0) {
        $overlayImages[] = './assets/' . $value . '.png';
    }
}

// Create final image
$finalImage = overlayImages($baseImage, $overlayImages);

// Output the image
header('Content-Type: image/jpeg');
imagejpeg($finalImage);

// Clean up
imagedestroy($finalImage);
?>