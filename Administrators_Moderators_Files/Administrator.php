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
   <link rel="stylesheet" type="text/css" href="styles/Main.css" />
   <!-- <link rel="stylesheet" type="text/css" href="../styles/popup_style.css"> -->
   <link rel="stylesheet" type="text/css" href="styles/Navbar.css" />
   
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-latest.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
  
</head>
     <!--===================================Admin================================-->
     <?php if(isset($_SESSION["role"])) {
            if($_SESSION["role"] == "admin"){ ?>
            <body>
            <nav id="navBar" class="navbar1">
                <div class= "mobButton">
                            <b id="menuButton"onclick="mobileMenu()">&#9776;</b>
                    </div>
                    <div id= "mobileMenu" style="display: none;">
                            <button id="UsersButtonMobile">Χρήστες</button>
                            <button id="INFOSButtonMobile">Τμήματα</button>
                            <a href="php/logout.php">Αποσύνδεση</a>
                    </div>

                    <div class="desktopMenu">
                            <button id="UsersButton" >Χρήστες</button> 
                            <button id="INFOSButton" >Τμήματα</button>     
                            <a href="php/logout.php">Αποσύνδεση</a>  
                    </div>	
            </nav>
                <!-- ===============================================Users============================= -->
                <div id="UsersSection">
                    <button id="AddModeratorButton" onclick="addModerator()">Προσθήκη Moderator</button>
                    <table id="UsersTable">
                            <thead>
                                    <tr>
                                        <th scope="col">Username</th>
                                        <th scope="col">Ρόλος</th>
                                        <th scope="col">Τμήμα</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead> 
                                <?php
                                    $i=0;
                                    $result = mysqli_query($con,"SELECT * FROM users WHERE role = 'moderator';");
                                
                                    while($row = mysqli_fetch_array($result)) {
                                ?>
                                <tr>
                                    <td class="hidden" ><?php echo $row["id"]; ?></td>
                                    <td data-label="Username"><?php echo $row["username"]; ?></td>
                                    <td data-label="Ρόλος"><?php echo $row["role"]; ?></td>
                                    <td data-label="Τμήμα"><?php echo $row["Department"]; ?></td>
                                    <td ><button class="EditButton" onclick="editModerator()">Επεξεργασία</button></td>
                                    <td ><button class="DeleteButton" onclick="deleteModeratorPopUp()">Διαγραφή</button></td> 
                                
                                </tr>
                                <?php
                                    $i++;
                                    }
                                ?>
                            </table>
                            <!-- +++++++++++++++++++++++++++ Alert on Delete ++++++++++++++ -->
                            <div class="popupAlert1" id="popup-Alert1">
                                <div class="overlayUserDelete"></div>
                                <div class="contentAlert">
                                
                                    <form id="formDeleteUser" action="php/deleteModerator.php" method="post">
                                    
                                        <label class="hidden" for="moderatorIDText"><b>Id</b></label>
                                        <input  class="hidden" type="text" name="moderatorIDText" id="moderatorIDText">

                                        <p>Είσαι σίγουρος πως θέλεις να διαγράψεις τον μεσολαβητή με όνομα:</p>
                                        <p id="moderatorName"></p>

                                        <input class="btn"  type="submit" value="Διαγραφή"/> 
                                        <input class="btn2" onclick="deleteModeratorPopUp()" type="button" value="Κλείσιμο" /> 
                                        
                                    </form>
                                </div>
                            </div>
                            <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                            <!-- +++++++++++++++++++++++++++ Alert on Edit ++++++++++++++ -->
                            <div class="popupEditModerator" id="popup-EditModerator">
                                <div class="overlayUserEdit"></div>
                                <div class="content">
                                
                                    <form id="formEditUser" action="php/editModerator.php" method="post">

                                        <label class="hidden" for="moderatorIDText1"><b>Id</b></label>
                                        <input class="hidden" type="text" name="moderatorIDText1" id="moderatorIDText1">
                                        
                                        <p>Αν θέλεις να αλλάξεις το τμήμα ενός διαχειριστή επέλεξε απο τις παρακάτω επιλογές</p>

                                        <select name="Department" id="Tmimata">
                                            <?php
                                            $i=0;
                                            $result = mysqli_query($con,"SELECT DISTINCT Department FROM lessons_table ;");
                                        
                                            while($row = mysqli_fetch_array($result)) {
                                            ?>
                                                <option value="<?php echo $row["Department"]; ?>"><?php echo $row["Department"]; ?></option>
                                            <?php
                                            $i++;
                                            }
                                            ?>

                                        </select>

                                        <div>
                                            <input class="btn"  type="submit" value="Αποθήκευση" />
                                            <input class="btn2"  onclick="editModerator()" type="button" value="Κλείσιμο"/>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <!-- +++++++++++++++++++++++++++ Alert on Add ++++++++++++++ -->
                            <div class="popupAddModerator" id="popup-AddModerator">
                                <div class="overlayUserAdd"></div>
                                <div class="content">
                                
                                    <form id="AddModeratorForm" action="php/addModerator.php" method="post">
                                    
                                        <label for="AddModeratorUsername"><b>Username</b></label>
                                        <input autocomplete="off" type="text" name="AddModeratorUsername" id="AddModeratorUsername">

                                        <label for="AddRoleModerator"><b>Ρόλος</b></label>
                                        <input type="text" name="AddRoleModerator" id="AddRoleModerator" value="moderator" readonly>
                                        
                                        <label><b>Τμήμα</b></label>
                                        <select name="DepartmentAddModerator" id="DepartmentAddModerator">
                                            <?php
                                                $j=0;
                                                $result = mysqli_query($con,"SELECT DISTINCT Department FROM lessons_table ;");
                                                while($row = mysqli_fetch_array($result)) {
                                            ?>
                                            <option value="<?php echo $row["Department"];?>"><?php echo $row["Department"]; ?></option>
                                            <?php
                                            $j++;
                                                }
                                            ?>
                                        </select>

                                        <div id="passwordIcon">
                                            <label for="AddPasswordModerator1"><b>Password</b></label>
                                            <input type="password" name="AddPasswordModerator1" id="AddPasswordModerator1">
                                            <i class="bi bi-eye-slash" id="togglePassword1"></i>
                                        </div>

                                        <div id="passwordIcon">
                                            <label for="AddPasswordModerator2"><b>Επιβεβαίωση Password</b></label>
                                            <input type="password" name="AddPasswordModerator2" id="AddPasswordModerator2">
                                            <i class="bi bi-eye-slash" id="togglePassword2"></i>
                                        </div>

                                        <div>
                                            <button class="btn"  onclick="checkNewUser()" type="button">Αποθήκευση</button>
                                            <button class="btn2"  onclick="addModerator()" type="button">Κλείσιμο</button>
                                        </div>

                                        <input style="display:none" class="btn" id="submitButtonOnAddNewUser" type="submit" />

                                        <p id="warningOnAddUser"></p>
                                    </form>
                                </div>
                            </div>
                </div>
                <!-- ===============================================INFOS============================= -->
                <div id="INFOSection">
                <button onclick="addINFOS(1)" id="AddPDFButton">Προσθήκη Τμήματος</button>
                    <table id="INFOSTable">
                                <thead>
                                    <tr>
                                        <th class="hidden" scope="col">id</th>
                                        <th  scope="col">Τμήμα</th>
                                        <th  scope="col">Σύνολο ECTS</th>
                                        <th scope="col">Σύνολο Εξαμήνων</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead> 
                                  <tbody>
                                <?php
                                    $k=0;
                                    $result = mysqli_query($con,"SELECT * FROM departmentsinfos ;");
                                    while($row = mysqli_fetch_array($result)) {
                                ?>
                              
                                <tr>
                                    <td data-label="id" class="hidden" ><?php echo $row["id"]; ?></td>
                                    <td data-label="Τμήμα" class="Department"><?php echo $row["Department"]; ?></td>
                                    <td data-label="Σύνολο ECTS" ><?php echo $row["TotalECTS"]; ?></td>
                                    <td data-label="Σύνολο Εξαμήνων" ><?php echo $row["TotalExam"]; ?></td>
                                    <td class="hidden" data-label="Πληροφορίες" ><?php echo $row["Conditions"]; ?></td>
                                    <td  class="hidden" ><?php echo $row["Site"]; ?></td>
                                    <td  class="hidden" ><?php echo $row["PathWinter"]; ?></td>
                                    <td  class="hidden" ><?php echo $row["PathSummer"]; ?></td>
                                    <td ><button class="EditButton" onclick="editINFOS(1)">Επεξεργασία</button></td>
                                    <td ><button class="DeleteButton" onclick="deleteINFOS(1)">Διαγραφή</button></td>
                                </tr>
                                <tr class="secondTr">
                                    <td colspan="5">
                                        <div id="aa">
                                            <table id="CollapsibleTable"  style="padding-left:0px;" >
                                                <tbody>
                                                    <tr data-id="infos" >
                                                        <td style=" background:#F0F0F0; color:#06817F; font-size:15px;" width="25%"><p>Site Τμήματος</p></td>
                                                        <td style="background:#F0F0F0; font-size:15px;" width="75%"><a target="_blank" href="<?php echo $row["Site"]; ?>">Site</a></td>
                                                    </tr>
                                                    <?php  if($row["PathWinter"] != "-"){?>
                                                    <tr data-id="infos" >
                                                        <td style=" background:#F0F0F0; color:#06817F; font-size:15px;" width="25%"><p>Χειμερινό Εξαμ.<p></td>
                                                        <td style="background:#F0F0F0; font-size:15px;"  width="75%"><a href="<?php echo "https://undes1red.com/ThesisWebSite".substr($row["PathWinter"],2); ?>" target="_blank">Χειμερινό Εξάμηνο</a></td>
                                                    </tr>
                                                   <?php } ?>
                                                    <?php  if($row["PathSummer"] != "-"){?>
                                                    <tr data-id="infos" >
                                                        <td style=" background:#F0F0F0; color:#06817F; font-size:15px;"  width="25%"><p>Εαρινό Εξαμ.</p></td>
                                                        <td style="background:#F0F0F0; font-size:15px;"  width="75%"><a href="<?php echo "https://undes1red.com/ThesisWebSite".substr($row["PathSummer"], 2); ?>" target="_blank">Εαρινό Εξάμηνο</a></td>
                                                    </tr>
                                                    <?php } ?>
                                                    <?php  if($row["Conditions"] != "-"){?>
                                                    <tr data-id="infos" >
                                                        <td style=" background:#F0F0F0; color:#06817F; font-size:15px;"  width="25%"><p>Πληροφορίες</p></td>
                                                        <td style="background:#F0F0F0; font-size:15px;"  width="75%"><p><?php echo $row["Conditions"]; ?><p></td>
                                                    </tr>
                                                    <?php } ?>
                                                </tbody> 
                                            
                                            </table> 
                                        </div>
                                    </td>
                                </tr>
                                <?php
                                    $k++;
                                    }
                                ?>
                                </tbody>
                            </table>
                            <!-- +++++++++++++++++++++++++++ Alert on Delete ++++++++++++++ -->
                            <div class="popupAlert2" id="popup-Alert2">
                                <div class="overlayINFOSDelete"></div>
                                <div class="contentAlert">
                                
                                    <form id="" action="php/deleteInfos.php" method="post">
                                    
                                        <label  style="display:none" for="pathIDText"><b>Id</b></label>
                                        <input  style="display:none" type="text" name="pathIDText" id="pathIDText">

                                        <p >Είσαι σίγουρος πως θέλεις να διαγράψεις το τμήμα με όνομα:</p>
                                        <b id="PDFname"></b>

                                        <input class="btn" onclick="deleteINFOS(2)" type="submit" value="Διαγραφή" /> 
                                        <input class="btn2" onclick="deleteINFOS(2)" type="button" value="Κλείσιμο" /> 
                                    </form>
                                </div>
                            </div>
                            <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                            <!-- +++++++++++++++++++++++++++ Alert on Edit ++++++++++++++ -->
                            <div class="popupEdiINFOS" id="popup-EdiINFOS" >
                                <div class="overlayEditINFOS"></div>
                                <div class="content">
                                
                                    <form id="formEditPDF" action="php/updateInfo.php" method="post"  enctype="multipart/form-data">
                                    
                                    <div class="column"> 
                                        <label  class="hidden" for="PDFIDtext"><b>Id</b></label>
                                        <input   autocomplete="off" class="hidden" type="text" name="PDFIDtext" id="PDFIDtext">

                                        <label for="newSite"><b>Νέο Site Τμήματος</b></label>
                                        <input autocomplete="off" type="url" id="newSite" name="newSite">

                                           <!-- PDF File-->
                                        <label><b>Αρχείο Χειμερινού Εξαμήνου</b></label>
                                        <input type="file" id="newWinterPDF" name="newWinterPDF" accept="application/pdf">

                                        <!-- PDF File-->
                                        <label><b>Αρχείο Χειμερινού Εξαμήνου</b></label>
                                        <input type="file" id="newSummerPDF" name="newSummerPDF" accept="application/pdf">
                                        

                                        <p><b>Πληροφορίες</b></p>
                                        <textarea type="textarea" autocomplete="off" name="InfosOnEdit" id="InfosOnEdit"></textarea>
                                    </div>
                                      

                                    <div class="column" >
                                          <!-- <input  type="text" name="PDFpath2" id="PDFpath2" readonly> -->
                                          <label  for="PDFIDtext"><b>Ονομασία Τμήματος</b></label>
                                        <input  autocomplete="off" type="text" name="DepartmentOnEdit" id="DepartmentOnEdit">

                                        <p><b>ECTS</b></p>
                                        <input step="1"  value="4" autocomplete="off" type="number" min="1" max="300" name="ECTSonEdit" id="ECTSonEdit" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" >
                                        
                                        <p><b>Πλήθος εξαμήνων</b></p>
                                        <input step="1"  value="8" autocomplete="off" type="number" min="1" max="10" name="ExamOnEdit" id="ExamOnEdit" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" >

                                        <input class="btn" onclick="checkNewInfoOnEdit()" type="button" value="Αποθήκευση" style="margin-left:20%"/>

                                        <input  class="btn2" onclick="editINFOS(2)" type="button" value="Κλείσιμο" style="margin-left:20%"/>

                                        <input style="display:none" class="btn" id="submitButtonOnEditInfo" type="submit" />

                                        <p id="warningOnEditInfo" ></p>
                                    </div>

                                    </form>
                                </div>
                            </div>
                            <!-- +++++++++++++++++++++++++++ Alert on Add ++++++++++++++ -->
                            <div class="popupAddINFOS" id="popup-AddINFOS">
                                <div class="overlayAddINFOS"></div>
                                <div class="content">
                                
                                    <form id="formAddPDF" action="./php/addNewDepartment.php" method="post" enctype="multipart/form-data">

                                          <!-- PDF File-->
                                        <div class="column"> 
                                            <label><b>Αρχείο Χειμερινού Εξαμήνου</b></label>
                                            <input type="file" id="newPdfWinter" name="newPdfWinter" accept="application/pdf">

                                            <label><b>Αρχείο Εαρινού Εξαμήνου</b></label>
                                            <input type="file" id="newPdfSummer" name="newPdfSummer" accept="application/pdf">
                                            
                                            <label   for="DepartmentOnAdd"><b>Τμήμα</b></label>
                                            <input  type="text" name="DepartmentOnAdd" id="DepartmentOnAdd" autocomplete="off">

                                            <p><b>Πληροφορίες</b></p>
                                            <textarea type="textarea" autocomplete="off" name="InfosOnAdd" id="InfosOnAdd"></textarea>

                                        </div> 

                                        <div class="column"> 
                                            <p><b>ECTS</b></p>
                                            <input step="1"  value="4" autocomplete="off" type="number" min="1" max="100" name="ECTSonADD" id="ECTSonADD" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" >
                                            
                                            <p><b>Πλήθος εξαμήνων</b></p>
                                            <input step="1"  value="8" autocomplete="off" type="number" min="8" max="10" name="ExamOnADD" id="ExamOnADD" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" >

                                            <label for="ADDnewSite"><b>Site Τμήματος</b></label>
                                            <input type="url" id="ADDnewSite" name="ADDnewSite" autocomplete="off">

                                       
                                            <input  style="display:none" class="btn" id="submitButtonOnAddNewInfo"  type="submit" />

                                            <input  class="btn" onclick="checkNewInfo()" type="button" value="Αποθήκευση" style="margin-left:20%"/>
                                            <input  class="btn2" onclick="addINFOS(22)" type="button" value="Κλείσιμο" style="margin-left:20%"/>

                                            <p id="warningOnAddInfo" ></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                </div>


            </body>
          <script src="script/AdminScript.js"></script>
        
          
        <!-- From Here | Vale ta temporary .php kai .css-->
      
         <!-- To Here -->
        <?php  }
        } else { 
            header("Location: index.html");
        }?>

</html>
