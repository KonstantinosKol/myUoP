<?php
    session_start();

    include("connection.php");

    $id=$_POST['PDFIDtext'];
    $Department = $_POST['DepartmentOnEdit'];
    $TotalECTS  =$_POST['ECTSonEdit'];
    $site  = $_POST['newSite'];
    $Conditions = $_POST['InfosOnEdit'];
    $TotalExam = $_POST['ExamOnEdit'];

    if($Conditions == ""){
        $Conditions ="-";
    }

    $destination1 = "../PDFs/";
    $destination2 = "../PDFs/";

    $result = mysqli_query($con,"SELECT * FROM departmentsinfos where id = $id;");
    while($row = mysqli_fetch_array($result)) {
        $pathWinter =  $row["PathWinter"];
        $pathSummer = $row["PathSummer"];
    }

    if (!empty($_FILES["newWinterPDF"]["name"])) {
        $destination1 .= $Department . "-Winter-";                    //adding the username infront of the photo name incase a user uploads a photo with the same name of another user's photo
        $destination1 .= $_FILES["newWinterPDF"]["name"];
        $filename1 = $_FILES["newWinterPDF"]["tmp_name"];
        // if($pathWinter !="-"){
        //     unlink($pathWinter);
        // }
        move_uploaded_file($filename1, $destination1);
        // $destination1 = substr($destination1, 2);
    }else{
        $destination1="-";
    }

    // echo "-->".$_FILES["newSummerPDF"]["name"]."<--";
    if (!empty($_FILES["newSummerPDF"]["name"])) {
        $destination2 .= $Department . "-Summer-";                    //adding the username infront of the photo name incase a user uploads a photo with the same name of another user's photo
        $destination2 .= $_FILES["newSummerPDF"]["name"];
        $filename2 = $_FILES["newSummerPDF"]["tmp_name"];
        // if($pathSummer !="-"){
        //     unlink($pathSummer);
        // }
        move_uploaded_file($filename2, $destination2);
        // $destination2 = substr($destination2, 2);
    }else{
        $destination2 = "-"; 
    }
    
     $query = "UPDATE  departmentsinfos SET Department = '$Department' , TotalECTS = $TotalECTS , Site = '$site ', Conditions = '$Conditions',TotalExam = $TotalExam";

     if($destination1 != "-"){
        $query = $query.",PathWinter = '".$destination1."'";
    }if($destination2 != "-"){
        $query = $query.",PathSummer = '".$destination2."'";
    }
    
    $query = $query. "WHERE id=".$id.";";
    echo $query;

    $result = mysqli_query($con,$query);

    header('Location: '."../Administrator.php");

?>