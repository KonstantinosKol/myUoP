<?php


$dbhost = "localhost";
$dbusername = "your_db_name";
$dbpassword = "your_db_name_password";
$dbname = $dbusername;




if (!$con = mysqli_connect($dbhost, $dbusername, $dbpassword, $dbname)) {
    echo "n oConnection";
    die("Failed to connect.");
}else{

 

    $jsonp = $_GET['callback'];

    $return_arr = array();

    $query = "SELECT id,Department FROM lessons_table GROUP BY Department ;";

    $result = mysqli_query($con,$query);
    
    while($row = mysqli_fetch_array($result)){
    
        $return_arr[] = array("Department" => $row['Department'],"id" => $row['id']);
    }

    echo $jsonp.'('. json_encode($return_arr). ')'; 
    // Encoding array in JSON format
    
}


?>