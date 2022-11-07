<?php
include("connection.php");

$id=$_POST['id1'];

$Lesson = $_POST['LessonInputOnEdit'];
$Required = $_POST['RequiredInputOnEdit'];
$Infos = $_POST['InfosInputOnEdit'];
$ECTS = $_POST['ECTSInputOnEdit'];
$Direction = $_POST['DirectionInputOnEdit'];

$exam="";


if(isset($_POST['Exam1oInputOnEdit'])){
    $exam= $exam."1/";
    
}
if(isset($_POST['Exam2oInputOnEdit'])){
    $exam= $exam."2/";
}
if(isset($_POST['Exam3oInputOnEdit'])){
    $exam= $exam."3/";
}
if(isset($_POST['Exam4oInputOnEdit'])){
    $exam= $exam."4/";
}
if(isset($_POST['Exam5oInputOnEdit'])){
    $exam= $exam."5/";
}
if(isset($_POST['Exam6oInputOnEdit'])){
    $exam= $exam."6/";
}
if(isset($_POST['Exam7oInputOnEdit'])){
    $exam= $exam."7/";
}
if(isset($_POST['Exam8oInputOnEdit'])){
    $exam= $exam."8/";
}
if(isset($_POST['Exam9oInputOnEdit'])){
    $exam= $exam."9/";
}
if(isset($_POST['Exam10oInputOnEdit'])){
    $exam= $exam."0/";
}

if(empty($Required)){
   $Required="-";
}

$query = "UPDATE  lessons_table SET  Lesson = '$Lesson' , Required = '$Required', Exam = '$exam',Infos = '$Infos',ECTS = $ECTS, Direction= '$Direction' WHERE id=$id;";
// echo $query ;
$result = mysqli_query($con,$query);

header('Location: '."../Moderator.php");
?>

