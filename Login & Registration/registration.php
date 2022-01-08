<?php
	 if(array_key_exists('signup', $_POST))
	 	{
			signup();
		}
	 function signup()
	 {
		 include('connection.php'); 
		 if(isset($_POST['name'])||isset($_POST['email1'])||isset($_POST['password1'])||isset($_POST['signup']))
		{
		   if($_SERVER['REQUEST_METHOD'] == 'POST')
		   {
			  $errors = array(); 
			   $name=$_POST['name'];
			   $email = $_POST['email1'];  
			   $password = $_POST['password1'];  
			   //to prevent from mysqli injection  
			   $name = stripcslashes($name);  
			   $email = stripcslashes($email);  
			   $password = stripcslashes($password);  
			   $name = mysqli_real_escape_string($cn, $name); 
			   $email = mysqli_real_escape_string($cn, $email);  
			   $password = mysqli_real_escape_string($cn, $password);  
			   
			//    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);  
			//    $count = mysqli_num_rows($result);  

			// first check the database to make sure 
			// a user does not already exist with the same email
			$checkEmail = "SELECT * FROM accounts WHERE email='$email' LIMIT 1";
			$result = mysqli_query($cn, $checkEmail);
			$user = mysqli_fetch_assoc($result);
			 // if user exists
			if ($user) {
				if ($user['email'] === $email) {
				array_push($errors, "email already exists");
				}
			}

			// register user if there are no errors in the form
			if (count($errors) == 0) {
				$password = md5($password);//encrypt the password before saving in the database
				$query = "INSERT INTO accounts (email,name, password) 
						VALUES('$email', '$name', '$password')";
				mysqli_query($cn, $query);
				$_SESSION['email'] = $email;
				$_SESSION['success'] = "You are now logged in";
				header("Location: http://localhost/3dbookshelf/Main%20Page/Main_Page.php", true, 301);
			}
			   		   
		   }
		}
	 }
	
?>