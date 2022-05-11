<?php
    session_start();

    include("connection.php");

    $Department = $_POST['DepartmentOnAdd'];

    if($_POST["InfosOnAdd"] != ""){
        $Infos = $_POST['InfosOnAdd'];
    }else{
        $Infos = "-";
    }
    $ECTS = $_POST['ECTSonADD'];
    $Exam = $_POST['ExamOnADD'];
    $Site = $_POST['ADDnewSite'];


    $destination1 = "../PDFs/";
    $destination2 = "../PDFs/";

    if (!empty($_FILES["newPdfWinter"]["name"])) {
        $destination1 .= $Department . "-Winter-";                    //adding the username infront of the photo name incase a user uploads a photo with the same name of another user's photo
        $destination1 .= $_FILES["newPdfWinter"]["name"];
        $filename1 = $_FILES["newPdfWinter"]["tmp_name"];
    }
    else{
        $filename1 = "-";
    }

    if (!empty($_FILES["newPdfSummer"]["name"])) {
        $destination2 .= $Department . "-Summer-";                    //adding the username infront of the photo name incase a user uploads a photo with the same name of another user's photo
        $destination2 .= $_FILES["newPdfSummer"]["name"];
        $filename2 = $_FILES["newPdfSummer"]["tmp_name"];
    }else{
        $filename1 = "-";
    }

    if (!empty($username) && !empty($password1) && !empty($password2) && !is_numeric($username) &&  $password1 === $password2) {
        
        $query = "select * from users where username = '$username' limit 1;";    
        $result = mysqli_query($con, $query);
        
        if (mysqli_num_rows($result) == 0) {
            if(is_file($filename1) && is_file($filename2)) {
                move_uploaded_file($filename1, $destination1);
                move_uploaded_file($filename2, $destination2);
                $query = "insert into departmentsinfos (Department,TotalECTS,Site,Conditions,TotalExam,PathWinter,PathSummer) values ('$Department',$ECTS,'$Site','$Infos','$Exam','$destination1','$destination2')";
                mysqli_query($con, $query);
                header("location: ../Main.php");
            }
            else{
                $query = "insert into departmentsinfos (Department,TotalECTS,Site,Conditions,TotalExam,PathWinter,PathSummer) values ('$Department',$ECTS,'$Site','$Infos','$Exam','$filename1','$filename2')";
                mysqli_query($con, $query);
                header("location: ../Main.php");
            }    
           
            unset($_SESSION["SignUpErrors"]);
            header("location: ../login.html");
        }
        else {
            $_SESSION["SignUpErrors"]="This username already exists";
            header("location: ../sign-up.php");
        }
    }
    else {
        $_SESSION["SignUpErrors"]="Please fill the inputs correctly";
        header("location: ../Main.php");
    }

?>