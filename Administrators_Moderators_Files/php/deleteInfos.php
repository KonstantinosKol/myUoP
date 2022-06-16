<?php
include("connection.php");


$id=$_POST['pathIDText'];

$pathWinter = "";
$pathSummer= "";
$result = mysqli_query($con,"SELECT * FROM departmentsinfos where id=$id;");
while($row = mysqli_fetch_array($result)) {
    $pathWinter =  $row["PathWinter"];
    $pathSummer = $row["PathSummer"];
}

if( $pathWinter !="-"){
    unlink($pathWinter);
}
if( $pathSummer !="-"){
    unlink($pathSummer);
}

$query = "DELETE FROM departmentsinfos WHERE id = $id;";
$result = mysqli_query($con,$query);

header('Location: '."../Administrator.php");
?>