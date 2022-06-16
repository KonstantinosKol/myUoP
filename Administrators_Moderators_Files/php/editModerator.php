<?php
session_start();
include("connection.php");


$id=$_POST['moderatorIDText1'];
$newDepartment=$_POST['Department'];

$query = "UPDATE users SET Department = '".$newDepartment."' WHERE id = $id";
$result = mysqli_query($con,$query);

header('Location: '."../Administrator.php");
?>