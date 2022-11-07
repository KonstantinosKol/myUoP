
<?php

include "connection.php";

$jsonp = $_GET['callback'];

$DepartmentsSTR=$_GET['SavedDepartments'];

$return_arr = array();
$data = json_decode(stripslashes($_GET['SavedDepartments']));


foreach($data as $Department){
        
    $tmp_return_arr = array();
    $query= "SELECT id,Department,Lesson,Exam,ECTS,Direction FROM lessons_table WHERE Department = '$Department'";
    $result = mysqli_query($con,$query);
    while($row = mysqli_fetch_array($result)){
        $tmp_return_arr[] = array("id" => $row['id'],
                            "Department" => $row["Department"],
                            "Lesson" => $row["Lesson"],
                            "Exam" => $row["Exam"],
                            "ECTS" => $row["ECTS"],
                            "Direction" => $row["Direction"]);
    }
    array_push($return_arr,$tmp_return_arr);
}

echo $jsonp.'('. json_encode($return_arr). ')';

?>
