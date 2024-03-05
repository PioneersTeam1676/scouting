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

/*
0 = NULL
1 = Training
2 = Mt Olive
3 = Montgomery
4 = Lehigh
5 = Houston
*/

$COMP_NUM = 3;