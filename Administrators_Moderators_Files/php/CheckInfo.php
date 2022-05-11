<?php
include("connection.php");


$Department = $_POST['Department'];

$query = "select * from departmentsinfos where Department = '$Department' ;";
$result = mysqli_query($con,$query);

if (mysqli_num_rows($result) == 1) {
    echo "infoAlreadyIn";     
}
else {
    echo "ok";
}

?>