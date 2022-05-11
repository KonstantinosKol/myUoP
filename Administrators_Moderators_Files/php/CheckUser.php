<?php
include("connection.php");


$username = $_POST['username'];

$query = "select * from users where username = '$username' ;";
$result = mysqli_query($con,$query);

if (mysqli_num_rows($result) == 1) {
    echo "userAlreadyIn";     
}
else {
    echo "ok";
}

?>