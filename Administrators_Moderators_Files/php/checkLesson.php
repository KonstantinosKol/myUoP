<?php
include("connection.php");

$Lesson = $_POST['Lesson'];

$query = "select * from lessons_table where Lesson = '$Lesson ' and Department = '".$_SESSION['Department']."';";
$result = mysqli_query($con,$query);

if (mysqli_num_rows($result) == 1) {
    echo "lessonAlreadyIn";     
}
else {
    echo "ok";
}

?>