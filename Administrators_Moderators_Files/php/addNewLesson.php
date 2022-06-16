<?php

    include("connection.php");

    $Department	 = $_POST['DepartmentInputOnAdd'];
    $Lesson = $_POST['LessonOnADD'];
    $Required = $_POST['RequiredOnAdd'];
    $Infos = $_POST['InfosOnAdd'];
    $ECTS = $_POST['ECTSonADD'];
    $Direction = $_POST['DirectionOnAdd'];

    $exam="";

    if(isset($_POST['Exam1o'])){
        $exam= $exam."1/";
    }
    if(isset($_POST['Exam2o'])){
        $exam= $exam."2/";
    }
    if(isset($_POST['Exam3o'])){
        $exam= $exam."3/";
    }
    if(isset($_POST['Exam4o'])){
        $exam= $exam."4/";
    }
    if(isset($_POST['Exam5o'])){
        $exam= $exam."5/";
    }
    if(isset($_POST['Exam6o'])){
        $exam= $exam."6/";
    }
    if(isset($_POST['Exam7o'])){
        $exam= $exam."7/";
    }
    if(isset($_POST['Exam9o'])){
        $exam= $exam."9/";
    }
    if(isset($_POST['Exam8o'])){
        $exam= $exam."8/";
    }
    if(isset($_POST['Exam10o'])){
        $exam= $exam."0/";
    }

  

    $query = "insert into lessons_table (Department,Lesson,Required,Exam,Infos,ECTS,Direction) values ('$Department','$Lesson','$Required','$exam','$Infos','$ECTS','$Direction')";
    // if( 
        mysqli_query($con, $query)  ;

        $error_message = mysqli_error($con);
        echo "Query Failed: ".$error_message;
    // {
    //     echo "11";
    // }else{
    //     echo "222";
    // }
    header('Location: '."../Moderator.php");

    // mysqli_query($db,"INSERT INTO stockdetails (`itemdescription`,`itemnumber`,`sellerid`,`purchasedate`,`otherinfo`,`numberofitems`,`isitdelivered`,`price`) VALUES ('$itemdescription','$itemnumber','$sellerid','$purchasedate','$otherinfo','$numberofitems','$numberofitemsused','$isitdelivered','$price')") or die(mysqli_error($db));
?>