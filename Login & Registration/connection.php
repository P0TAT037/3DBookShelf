<?php
$servername = "localhost";
$username = "root";
$password = "";
$database="library";
// Create connection
$cn = mysqli_connect($servername, $username, $password,$database);
// Check connection
if(mysqli_connect_errno()) {  
    die("Failed to connect with MySQL: ". mysqli_connect_error());  
} 
?>