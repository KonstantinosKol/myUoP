<?php


$dbhost = "localhost";
$dbusername = "your_db_name";
$dbpassword = "your_db_name_password";
$dbname = $dbusername;



if (!$con = mysqli_connect($dbhost, $dbusername, $dbpassword, $dbname)) {
    echo "noConn";
    die("Failed to connect.");
}else{

    $jsonp = $_GET['callback'];

    $return_arr = array();

    $query = "SELECT * FROM departmentsinfos ;";
    
    $result = mysqli_query($con,$query);
    
    while($row = mysqli_fetch_array($result)){
    
        $return_arr[] = array("id" => $row['id'],
                        "Department" => $row['Department'],
                        "TotalECTS" => $row['TotalECTS'],
                        "Site" => $row['Site'],
                        "Required" => $row['Required'],
                        "Conditions" => $row['Conditions'],
                        "TotalExam" => $row['TotalExam'],
                        "PathWinter" =>  $row['PathWinter'],
                        "PathSummer" =>  $row['PathSummer'],);
    }
    echo $jsonp.'('. json_encode($return_arr). ')'; 
    // Encoding array in JSON format
}


?>