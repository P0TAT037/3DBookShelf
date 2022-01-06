<?php
     include('connection.php');  
	 error_reporting(0);
	 if(isset($email)||isset($password))
	 {
		if($_SERVER['REQUEST_METHOD'] == 'POST')
		{
			$email = $_POST['email'];  
			$password = $_POST['password'];  
			
			//to prevent from mysqli injection  
			$email = stripcslashes($email);  
			$password = stripcslashes($password);  
			$email = mysqli_real_escape_string($cn, $email);  
			$password = mysqli_real_escape_string($cn, $password);  
			$sql="select * from accounts where email='".$email."'AND password='".$password."'";
			$result = mysqli_query($cn, $sql);  
			$row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
			$count = mysqli_num_rows($result);  
		
			if($count == 1)
			{echo "<h1><center> Login successful </center></h1>";}  
			else
			{echo "<h1> Login failed. Invalid email or password.</h1>";}   
		}
	 }
	
	?>