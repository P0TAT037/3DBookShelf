<?php
	 if(array_key_exists('signup', $_POST)) {
		signup();
	}
	 function signup()
	 {
		 include('connection.php'); 
		 if(isset($_POST['name'])||isset($_POST['email1'])||isset($_POST['password1'])||isset($_POST['signup']))
		{
		   if($_SERVER['REQUEST_METHOD'] == 'POST')
		   {
			   echo $_POST['name'];
			   echo $_POST['email1'];  
			   echo$_POST['password1'];
			   $name=$_POST['name'];
			   $email = $_POST['email1'];  
			   $password = $_POST['password1'];  
			   //to prevent from mysqli injection  
			   $name = stripcslashes($name);  
			   $email = stripcslashes($email1);  
			   $password = stripcslashes($password1);  
			   $name = mysqli_real_escape_string($cn, $name); 
			   $email = mysqli_real_escape_string($cn, $email);  
			   $password = mysqli_real_escape_string($cn, $password);  
			   $sql="insert into accounts values ('$email','$name','$password')";
			   $result = mysqli_query($cn, $sql);  
			//    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);  
			//    $count = mysqli_num_rows($result);  
		   
			   
			   echo "<h1><center> registered successful </center></h1>";
			   
		   }
		}
	}
	
	?>
