<?php
include("connection.php");

$id=$_POST['IDonDeleteLesson'];


$query = "DELETE FROM lessons_table WHERE id = $id;";
$result = mysqli_query($con,$query);

header('Location: '."../tmpMod.php");
?>