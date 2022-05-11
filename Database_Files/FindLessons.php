<?php


$dbhost = "localhost";
$dbusername = "your_db_name";
$dbpassword = "your_db_name_password";
$dbname = $dbusername;




if (!$con = mysqli_connect($dbhost, $dbusername, $dbpassword, $dbname)) {
    echo "no Connection";
    die("Failed to connect.");
}else{

    $tmima=$_GET['tmima'];
    $examino=$_GET['examino'];

    $jsonp = $_GET['callback'];

    $return_arr = array();

    $query = "SELECT * FROM lessons_table WHERE Department='".$tmima."' AND Exam LIKE '%".$examino."%' ;";


    
    $result = mysqli_query($con,$query);
    
    while($row = mysqli_fetch_array($result)){
    
        $return_arr[] = array("id" => $row['id'],
                        "University" => $row['University'],
                        "Department" => $row['Department'],
                        "Lesson" => $row['Lesson'],
                        "Required" => $row['Required'],
                        "Exam" => $row['Exam'],
                        "Infos" => $row['Infos'],
                        "ECTS" =>  $row['ECTS'],
                        "Direction" =>  $row['Direction'],);
    }

    echo $jsonp.'('. json_encode($return_arr). ')'; 
    // Encoding array in JSON format
    
}


?>