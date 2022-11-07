<?php
session_start();
include("connection.php");


$id=$_POST['moderatorIDText'];

$query = "DELETE FROM users WHERE id = $id;";
$result = mysqli_query($con,$query);

header('Location: '."../Administrator.php");
?>