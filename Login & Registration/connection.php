<?php
$servername = "localhost"; //data base server
$username = "root";        // username
$password = "";            // password of the database
$database="3dbookShelf";   //database that we are using
// Create connection
$cn = mysqli_connect($servername, $username, $password,$database);
// Check connection
if(mysqli_connect_errno()) {  
    die("Failed to connect with MySQL: ". mysqli_connect_error()); //connection failed  
}
?>