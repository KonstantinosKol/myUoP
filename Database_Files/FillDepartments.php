<?php

include "connection.php";

$jsonp = $_GET['callback'];

$return_arr = array();

$query = "SELECT Department,id FROM departmentsinfos ORDER BY Department ASC;";

$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){

       $return_arr[] = array("Department" => $row['Department'],"id" => $row['id']);
}

echo $jsonp.'('. json_encode($return_arr). ')';

?>