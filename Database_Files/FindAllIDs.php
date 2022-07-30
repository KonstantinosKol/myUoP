<?php

$dbhost = "localhost";
$dbusername = "u272610912_UnDes1red_db";
$dbpassword = "UnDes1red_db_0910";
$dbname = "u272610912_UnDes1red_db";



$con = mysqli_connect($dbhost, $dbusername, $dbpassword, $dbname);

    $jsonp = $_GET['callback'];

    $return_arr = array();

    $query = "SELECT id FROM lessons_table ;";

    
    $result = mysqli_query($con,$query);
    
    while($row = mysqli_fetch_array($result)){
    
        $return_arr[] = array("id" => $row['id']);
    }
    
    echo $jsonp.'('. json_encode($return_arr). ')';
?>