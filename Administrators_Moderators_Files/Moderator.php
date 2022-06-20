<?php
    session_start();
	include_once 'php/connection.php';
?>
<!DOCTYPE html>
<html lang="gr">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale-1.0">
   <title>index</title>
   <link rel="stylesheet" type="text/css" href="styles/tmpMod.css" />
   <link rel="stylesheet" type="text/css" href="styles/Navbar.css" />
   <!-- <link rel="stylesheet" type="text/css" href="../styles/popup_style.css"> -->
   
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-latest.js"></script>
  
</head>
<?php if(isset($_SESSION["role"])) {
        if($_SESSION["role"] == "moderator"){ ?>
<body>
        <!-- ==============================================Lessons===================================== -->
             <div id="LessonsSection" >
                    <button id="addNewLesson" onclick="AddNewLessonPopUp(1)">Νέο Μάθημα</button>
                    <p id="DepartmentTitle" style="color:white;font-size:18px;margin-bottom:2%;margin-top:2%;"><?php  echo $_SESSION["Department"]; ?></p>
                    <a class="LinkForLogout" href="php/logout.php">Αποσύνδεση</a>  
                    <table id="LessonTable">
                       <thead>
                            <tr > 
                                <th  class="hidden" scope="col">id</th>
                                <th class="hidden"  scope="col">University</th>
                                <th class="hidden" scope="col">Department</th>
                                <th width="50%" scope="col">Μάθημα</th>
                                <th class="hidden" scope="col">Required</th>
                                <th width="10%" scope="col">Εξάμηνο</th>
                                <th class="hidden" scope="col">Infos</th>
                                <th width="10%" scope="col">ECTS</th>
                                <th class="hidden" scope="col">Direction</th>
                                <th width="10%" scope="col"></th>
                                <th width="10%" scope="col"></th>
                            </tr>
                        </thead> 
                        <?php
                            $i=0;
                            $result = mysqli_query($con,"SELECT * FROM lessons_table WHERE Department = '".$_SESSION["Department"]."';");
                            while($row = mysqli_fetch_array($result)) {
                        ?>
                        <tbody>
                        <tr class="mainTr" >
                            <td class="hidden" data-label="id"><?php echo $row["id"]; ?></td>
                            <td class="hidden" data-label="University"><?php echo $row["University"]; ?></td>
                            <td class="hidden" data-label="Department"><?php echo $row["Department"]; ?></td>
                            <td  style="color:#06817F; font-size:15px;" class ="lesson"><?php echo $row["Lesson"]; ?></td>
                            <td  class="hidden" data-label="Required"><?php echo $row["Required"]; ?></td>
                            <td  class ="exam" data-id='closed' data-label="Εξάμηνο"><?php echo str_replace("/"," ",$row["Exam"]); ?></td>
                            <td  class="hidden" data-label="Infos"><?php echo $row["Infos"]; ?></td>
                            <td class ="ECTS" data-id='closed' data-label="ECTS"><?php echo $row["ECTS"]; ?></td>
                            <td class="hidden" data-label="Direction"><?php echo $row["Direction"]; ?></td>
                            <td  > <button class="EditButton " onclick="EditLesson();">Επεξεργασία</td>
                            <td  > <button class="DeleteButton " onclick="DeleteLessonPopUp()">Διαγραφή</td>
                        </tr>
                        <tr class="secondTr">
                            <td colspan="5">
                                <div id="aa">
                                    <table id="CollapsibleTable"  >
                                        <tbody>
                                            <tr data-id="infos" >
                                                <td style=" background:#F0F0F0; color:#06817F; font-size:15px;">Προαπαιτούμενα Μαθήματα</td>
                                                <td style="background:#F0F0F0; font-size:15px;"><?php echo $row["Required"]; ?></td>
                                            </tr>
                                            <tr data-id="infos"style="background:#F0F0F0;" >
                                                <td style="background:#F0F0F0; color:#06817F; font-size:15px;">Κατεύθυνση</td>
                                                <td style="background:#F0F0F0; font-size:15px;"><?php echo $row["Direction"]; ?></td>
                                            </tr>
                                            <tr data-id="infos"style="background:#F0F0F0;" >
                                                <td style="background:#F0F0F0; color:#06817F; font-size:15px;">Πληροφορίες</td>
                                                <td style="background:#F0F0F0; font-size:15px;"><?php echo $row["Infos"]; ?></td>
                                            </tr>
                                        </tbody> 
                                    
                                    </table> 
                                </div>
                            </td>
                        </tr>
                        <?php
                            $i++;
                            }
                        ?>
                        </tbody>
                    </table>
                     <!-- ++++++++++++++++++++ Edit ++++++++++++++++++++ -->
                    <div class="popup" id="popup-1">
                        <div class="overlay"></div>
                        <div class="content">
                        
                            <form id="form1" action="php/updateLesson.php" method="post">
                               

                                <div class="column">
                                    <label class="hidden" for="id1"><b>Id</b></label>
                                    <input class="hidden" type="text" name="id1" id="id1">
                            
                                    <p style="display:none" ><b>Τμήμα</b></p>
                                    <input  style="display:none" readonly type="text" name="DepartmentInputOnEdit" id="DepartmentInputOnEdit" autocomplete="off">

                                    <p><b>Μάθημα</b></p>
                                    <input type="text" name="LessonInputOnEdit" id="LessonInputOnEdit" autocomplete="off">

                                    <p><b>Προαπαιτούμενα Μαθήματα</b></p>
                                    <p style="color: rgb(230, 74, 74);" >Τοποθετήστε τους χαρακτήρες '&&' για την λέξη 'και' ή την τους χαρακτήρες '||' για το γράμμα 'ή'</p>
                                    <input type="text" name="RequiredInputOnEdit" id="RequiredInputOnEdit" autocomplete="off">

                                    <p><b>Χειμερινό Εξάμηνα</b></p>
                                    <div class="radioButtonsGroup">
                                        <!--<input type="checkbox" id="test1" name="test1" value="value1"> Option 1-->
                                        <input type="checkbox" id="Exam1oInputOnEdit" name="Exam1oInputOnEdit" value="1">1o
                                        <!--<label for="Exam1oInputOnEdit">1ο</label><br>-->
                                        <input type="checkbox" id="Exam3oInputOnEdit" name="Exam3oInputOnEdit" value="3">
                                        <label for="Exam3oInputOnEdit">3ο</label><br>
                                        <input type="checkbox" id="Exam5oInputOnEdit" name="Exam5oInputOnEdit" value="5">
                                        <label for="Exam5oInputOnEdit">5ο</label>
                                        <input type="checkbox" id="Exam7oInputOnEdit" name="Exam7oInputOnEdit" value="7">
                                        <label for="Exam7oInputOnEdit">7ο</label>
                                        <input type="checkbox" id="Exam9oInputOnEdit" name="Exam9oInputOnEdit" value="9">
                                        <label for="Exam9oInputOnEdit">9ο</label>
                                    </div>

                                    <p><b>Εαρινά Εξάμηνα</b></p>
                                    <div class="radioButtonsGroup">
                                        <input type="checkbox" id="Exam2oInputOnEdit" name="Exam2oInputOnEdit" value="2">
                                        <label for="Exam2oInputOnEdit">2ο</label><br>
                                        <input type="checkbox" id="Exam4oInputOnEdit" name="Exam4oInputOnEdit" value="4">
                                        <label for="Exam4oInputOnEdit">4ο</label><br>
                                        <input type="checkbox" id="Exam6oInputOnEdit" name="Exam6oInputOnEdit" value="6">
                                        <label for="Exam6oInputOnEdit">6ο</label>
                                        <input type="checkbox" id="Exam8oInputOnEdit" name="Exam8oInputOnEdit" value="8">
                                        <label for="Exam8oInputOnEdit">8ο</label>
                                        <input type="checkbox" id="Exam10oInputOnEdit" name="Exam10oInputOnEdit" value="0">
                                        <label for="Exam10oInputOnEdit">10ο</label>
                                    </div>
                                </div>

                                <div class="column">
                                    <p><b>Πληροφορίες</b></p>
                                    <textarea type="textarea" name="InfosInputOnEdit" id="InfosInputOnEdit" autocomplete="off"></textarea>

                                    <p><b>ECTS</b></p>
                                    <input step="1"  autocomplete="off" type="number" min="0" max="100" name="ECTSInputOnEdit" id="ECTSInputOnEdit" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" >

                                    <p><b>Κατεύθυνση</b></p>
                                    <input type="text" name="DirectionInputOnEdit" id="DirectionInputOnEdit" autocomplete="off">

                                    <button class="btn" onclick="checkLessonOnEdit()" type="button" >Αποθήκευση</button>
                                    <button class="btn2" onclick="EditLesson(2)" type="button">Κλείσιμο</button>

                                    <button id="submitButtonOnEditLesson" style="display:none" class="btn"  type="submit" value="Edit"></button>

                                    <p id="warningOnEditLesson" ></p>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                      <!-- ++++++++++++++++++++ Add new ++++++++++++++++++++ -->
                      <div class="popupAddNewLesson" id="popup-AddNewLesson">
                        <div class="overlay"></div>
                        <div class="content">
                        
                            <form id="form1" action="php/addNewLesson.php" method="post">

                                <div class="column">
                                    <input style="display:none" readonly autocomplete="off" type="text" name="DepartmentInputOnAdd" id="DepartmentInputOnAdd" value='<?php  echo $_SESSION["Department"]; ?>'>

                                    <p><b>Μάθημα</b></p>
                                    <input type="text" autocomplete="off" name="LessonOnADD" id="LessonOnADD">

                                    <p><b>Προαπαιτούμενα Μαθήματα</b></p>
                                    <p style="color: rgb(230, 74, 74);" >Τοποθετήστε τους χαρακτήρες '&&' για την λέξη 'και' ή την τους χαρακτήρες '||' για το γράμμα 'ή'</p>
                                    <input type="text" autocomplete="off" name="RequiredOnAdd" id="RequiredOnAdd">

                                    <p><b>Χειμερινό Εξάμηνα</b></p>
                                    <div class="radioButtonsGroup">
                                        <input type="checkbox" id="Exam1o" name="Exam1o" value="1">
                                        <label for="Exam1o">1ο</label><br>
                                        <input type="checkbox" id="Exam3o" name="Exam3o" value="3">
                                        <label for="Exam3o">3ο</label><br>
                                        <input type="checkbox" id="Exam5o" name="Exam5o" value="5">
                                        <label for="Exam5o">5ο</label>
                                        <input type="checkbox" id="Exam7o" name="Exam7o" value="7">
                                        <label for="Exam7o">7ο</label>
                                        <input type="checkbox" id="Exam9o" name="Exam9o" value="9">
                                        <label for="Exam9o">9ο</label>
                                    </div>

                                    <p><b>Εαρινά Εξάμηνα</b></p>
                                    <div class="radioButtonsGroup">
                                        <input type="checkbox" id="Exam2o" name="Exam2o" value="2">
                                        <label for="Exam2o">2ο</label><br>
                                        <input type="checkbox" id="Exam4o" name="Exam4o" value="4">
                                        <label for="Exam4o">4ο</label><br>
                                        <input type="checkbox" id="Exam6o" name="Exam6o" value="6">
                                        <label for="Exam6o">6ο</label>
                                        <input type="checkbox" id="Exam8o" name="Exam8o" value="8">
                                        <label for="Exam8o">8ο</label>
                                        <input type="checkbox" id="Exam10o" name="Exam10o" value="0">
                                        <label for="Exam10o">10ο</label>
                                    </div>
                                </div>

                                <div class="column">

                                    <p><b>Πληροφορίες</b></p>
                                    <textarea type="textarea" autocomplete="off" name="InfosOnAdd" id="InfosOnAdd"></textarea>

                                    <p><b>ECTS</b></p>
                                    <input step="1"  autocomplete="off" type="number" min="1" max="100" name="ECTSonADD" id="ECTSonADD" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" >

                                    <p><b>Κατεύθυνση</b></p>
                                    <input type="text" autocomplete="off" name="DirectionOnAdd" id="DirectionOnAdd">

                                    <button  class="btn" onclick="checkLessonOnAdd()" type="button" >Αποθήκευση</button>
                                    <button  class="btn2" onclick="AddNewLessonPopUp(2)" type="button" >Κλείσιμο</button>

                                    <input id="submitButtonOnAddNewLesson" style="display:none" class="btn" type="submit" value="Edit">

                                    <p id="warningOnAddLesson" ></p>
                                
                                </div>

                            </form>
                        </div>
                    </div>
                      <!-- ++++++++++++++++++++ Alert on Lessons ++++++++++++++++++++ -->
                      <div class="popupDeleteLesson" id="popupDeleteLesson">
                        <div class="overlay"></div>
                        <div class="content">
                        
                            <form id="" action="php/deleteLesson.php" method="post">
                        
                                    <p><b>Είσαι Σίγουρος πως θές να διαγράψεις το μάθημα με όνομα:</b></p>
                                    <p id="DeletedLesson"></p>

                                    <input  style="display:none" type="text" name="IDonDeleteLesson" id="IDonDeleteLesson" >

                                    <button class="btn" onclick="DeleteLessonPopUp(2)" type="submit" value="Edit">Διαγραφή</button>
                                    <button class="btn2" onclick="DeleteLessonPopUp()" type="button" value="Edit">Κλείσιμο</button>
                             
                            </form>
                        </div>
                    </div>
            </div>

         </body>
         <?php  }
        } else { 
            header("Location: index.html");
        }?>
         <script src="script/ModeratorScript.js"></script> 

</html>
