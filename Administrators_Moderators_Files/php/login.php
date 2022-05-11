<?php
session_start();
include("connection.php");
$_SESSION["role"] = "";

$username=$_GET['username'];
$password=$_GET['password'];

$encryptedPassword = md5( $password );

$message="";

if (!empty($username) && !empty($password) && !is_numeric($username)) {
    
    
    $query = "select * from users where username = '$username' and password ='$encryptedPassword';";
    $result = mysqli_query($con,$query);
    
    if (mysqli_num_rows($result) == 1) {
        
        $row = mysqli_fetch_assoc($result);
        
        $_SESSION["username"] = $username;
        $_SESSION["role"] = $row['role'];
        $_SESSION["Department"] = $row['Department'];
        $_SESSION["log_status"] = "loggedin";
        if($row['role']=="admin"){
            $message= "doneAdmin";
        }else{
            $message= "doneMod";
        }
                   
    }
    else {
        $message="Inavlid username or password";
    }
}
else {
   
    $message="Give username and password";
} 
echo  $message;
?>