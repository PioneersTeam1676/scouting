<?php

$servername = "localhost";
$dbname = "team1676_scouting24";
$username = "team1676_scouting24";
$password = ")ONvUL[mYsL7JHnm";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
