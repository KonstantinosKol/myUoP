<?php
include("connection.php");


$username=$_POST['AddModeratorUsername'];
$Department=$_POST['DepartmentAddModerator'];
$password=$_POST['AddPasswordModerator1'];


$encryptedPassword = md5( $password );


$query = "INSERT INTO users (username,password,role,Department) VALUES ('".$username."' ,'".$encryptedPassword."' ,'moderator','".$Department."');";
$result = mysqli_query($con,$query);

header('Location: '."../Main.php");

?>

