  var adminTable = document.getElementById("UsersTable");
for (var i=0; i<adminTable.rows.length; i++) {
    adminTable.rows[i].onclick = function() {
        document.getElementById("moderatorIDText").value = this.cells[0].innerHTML;
        document.getElementById("moderatorIDText1").value = this.cells[0].innerHTML;
        document.getElementById("moderatorName").innerHTML = this.cells[1].innerHTML;

        const $select = document.querySelector('#Tmimata');
        $select.value = this.cells[3].innerHTML;
    }
}

var togglePassword1 = document.querySelector("#togglePassword1");
var password1 = document.querySelector("#AddPasswordModerator1");

togglePassword1.addEventListener("click", function () {
    // toggle the type attribute
    const type = password1.getAttribute("type") === "password" ? "text" : "password";
    password1.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});    

var togglePassword2 = document.querySelector("#togglePassword2");
var password2 = document.querySelector("#AddPasswordModerator2");

togglePassword2.addEventListener("click", function () {
    // toggle the type attribute
    const type = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});    
//===========Add-moderator==================================================

function addModerator(){
   
    document.getElementById("popup-AddModerator").classList.toggle("activeUserAdd"); 
    $('html, body').animate({scrollTop:0}, '300');
    
     //=====clear inputs====
     $("#AddModeratorUsername").val("");
     $("#DepartmentAddModerator").prop('selectedIndex',0);
     $("#AddPasswordModerator1").val("");
     $("#AddPasswordModerator2").val("");  
   
}

$(".overlayUserAdd").click(function(event) {
    document.getElementById("popup-AddModerator").classList.toggle("activeUserAdd"); 
    $('html, body').css("overflow","auto");   

    //=====clear inputs====
    $("#AddModeratorUsername").val("");
    $("#DepartmentAddModerator").prop('selectedIndex',0);
    $("#AddPasswordModerator1").val("");
    $("#AddPasswordModerator2").val("");              
});
$(".closeAddPopupOnAdmins").click(function(event) {
    document.getElementById("popup-AddModerator").classList.toggle("activeUserAdd");
    $('html, body').css("overflow","auto");                  
});


//===========Delete-Moderator==================================================

function deleteModeratorPopUp() {
    document.getElementById("popup-Alert1").classList.toggle("activeUserDelete");
    $('html, body').animate({scrollTop:0}, '300');
}

$(".overlayUserDelete").click(function(event) {
    document.getElementById("popup-Alert1").classList.toggle("activeUserDelete");  
    $('html, body').css("overflow","auto");                   
});
//===========Edit-Moderator==================================================

function editModerator() {
    document.getElementById("popup-EditModerator").classList.toggle("activeUserEdit");
    $('html, body').animate({scrollTop:0}, '300');
    // $('html, body').css("overflow","hidden"); 
}

$(".overlayUserEdit").click(function(event) {
    document.getElementById("popup-EditModerator").classList.toggle("activeUserEdit"); 
    $('html, body').css("overflow","auto");                
});

//===============Navbar==================================================
function mobileMenu() {
	var tmp = document.getElementById("mobileMenu");	
	if (tmp.style.display === "block") 
	{
		tmp.style.display = "none";
		document.getElementById("navBar").className="navbar1"
        document.getElementById("navBar").className="navbar2"
        $(".desktopMenu #UsersButton").css("display","block");
        $(".desktopMenu #INFOSButton").css("display","block");
        $(".desktopMenu a").css("display","block");
	}
	else {
		tmp.style.display = "block";
		document.getElementById("navBar").className="navbar2"
        $(".desktopMenu #UsersButton").css("display","none");
        $(".desktopMenu #INFOSButton").css("display","none");
        $(".desktopMenu a").css("display","none");
	}
}

//====================ChangeSections==================================================


$("#UsersButton").click(function(event) {
    $("#UsersSection").css("display","block");
    $("#INFOSection").css("display","none");             
});

$("#UsersButtonMobile").click(function(event) {
    $("#UsersSection").css("display","block");
    $("#INFOSection").css("display","none");                
});




$("#INFOSButtonMobile").click(function(event) {
    $("#UsersSection").css("display","none");
    $("#INFOSection").css("display","block");       
});

$("#INFOSButton").click(function(event) {
    $("#UsersSection").css("display","none");
    $("#INFOSection").css("display","block");           
});




//+++++++++++++++++++++++++++++++++++++++++++ INFOS ++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var adminTable = document.getElementById("INFOSTable");
for (var i=0; i<adminTable.rows.length; i++) {
    adminTable.rows[i].onclick = function() {
        document.getElementById("pathIDText").value = this.cells[0].innerHTML;
        document.getElementById("PDFIDtext").value = this.cells[0].innerHTML;
        document.getElementById("PDFname").innerHTML = this.cells[1].innerHTML;
        document.getElementById("DepartmentOnEdit").value = this.cells[1].innerHTML;
        document.getElementById("InfosOnEdit").value = this.cells[4].innerHTML;
        document.getElementById("ECTSonEdit").value = this.cells[2].innerHTML;
        document.getElementById("ExamOnEdit").value = this.cells[3].innerHTML;
        
        document.getElementById("newSite").value = this.cells[5].innerHTML;
      

        // document.getElementById("PDFpath2").value = this.cells[2].innerHTML;
        // $(".WinterExamLink").attr("href", this.cells[2].innerHTML)
        // $(".SummerExamLink").attr("href",)

        // const $select = document.querySelector('#Seasons');
        // $select.value = this.cells[3].innerHTML;

        // const $select2 = document.querySelector('#EditDepartmentDropdown');
        // $select2.value = this.cells[1].innerHTML;
    }
}

//============================Alert On Delete PDF-path=============

function deleteINFOS(str) {
    if(str =="1"){
        document.getElementById("popup-Alert2").classList.toggle("activeINFOSDelete");
      
        $('html, body').animate({scrollTop:0}, '300');
    }else{
        document.getElementById("popup-Alert2").classList.toggle("activeINFOSDelete");
        $('html, body').css("overflow","auto");
    }
}

$(".overlayINFOSDelete").click(function(event) {
    document.getElementById("popup-Alert2").classList.toggle("activeINFOSDelete");  
    $('html, body').css("overflow","auto");               
});

//============================Alert On Edit PDF-path=============

function editINFOS(str) {
    if(str == "1"){
        document.getElementById("popup-EdiINFOS").classList.toggle("activeINFOSEdit");
        $('html, body').animate({scrollTop:0}, '300');
        // $('html, body').css("overflow","hidden");
    }else{
        document.getElementById("popup-EdiINFOS").classList.toggle("activeINFOSEdit");
        $('html, body').css("overflow","auto");
        document.getElementById("newWinterPDF").value="";
        document.getElementById("newSummerPDF").value="";
    }
}

$(".overlayEditINFOS").click(function(event) {
    document.getElementById("popup-EdiINFOS").classList.toggle("activeINFOSEdit"); 
    $('html, body').css("overflow","auto");  
     document.getElementById("newWinterPDF").value="";
        document.getElementById("newSummerPDF").value="";
});

//============================Alert On Add PDF-path=============

function addINFOS(str) {
    if(str == "1"){
        document.getElementById("popup-AddINFOS").classList.toggle("activeINFOSAdd");
        $('html, body').animate({scrollTop:0}, '300'); 
        // $('html, body').css("overflow","hidden"); 
    }else{
        document.getElementById("popup-AddINFOS").classList.toggle("activeINFOSAdd");
        $('html, body').css("overflow","auto"); 
        console.log(str);
    }

    $("#newPdfWinter").val("");
    $("#newPdfSummer").val("");
    $("#DepartmentOnAdd").val("");
    $("#InfosOnAdd").val("");
    $("#ECTSonADD").val("4");
    $("#ExamOnADD").val("8");
    $("#ADDnewSite").val("");
}

$(".overlayAddINFOS").click(function(event) {
    document.getElementById("popup-AddINFOS").classList.toggle("activeINFOSAdd"); 
    $('html, body').css("overflow","auto");
    document.getElementById("DepartmentOnAdd").value="";
    document.getElementById("InfosOnAdd").value="";
    document.getElementById("ECTSonADD").value="";
    document.getElementById("ExamOnADD").value="";
    document.getElementById("ADDnewSite").value="";
});




$(function() {
    $("td[colspan=5]").find("#aa").hide();

    $("#INFOSTable td").click(function(event) {
        var $target = $(event.target);
        $target.parent("tr").closest("tr").next().find("#aa").slideToggle();
        //td      tr        //next tr                              
    });

    $(".secondTr td p").click(function(event) {
      
        event.stopPropagation();
        var $target = $(event.target);
        // console.log($target.contents().get(0));
        console.log($target.tagName);
        // if($target.tagName != 'a'){
             $target.parent().parent().parent().parent().parent().slideToggle();
        // }
        //td      tr        //next tr                              
    });


    // $(".overlayEditModerator").click(function(event) {
    //     document.getElementById("popup-EditModerator").classList.toggle("active2");                 
    // });
    
});


function checkNewUser(){

    var username1 = document.getElementById("AddModeratorUsername").value.replace(/\s+/, '').length;
    var role = document.getElementById("AddRoleModerator").value;
    var password1 = document.getElementById("AddPasswordModerator1").value.replace(/\s+/, '').length
    var password2 = document.getElementById("AddPasswordModerator2").value.replace(/\s+/, '').length
    if(username1 != 0 && role != null && password1 != 0 && password2 !=0 ){
        if(password1 == password2){
            var username = document.getElementById("AddModeratorUsername").value;
            $.ajax({
                type: 'POST',
                url: "https://undes1red.com/ThesisWebSite/CheckUser.php",
                data:{  
                    "username":username,  
                }, 
                success: function (data) {
                  if(data == "ok"){
                    document.getElementById("submitButtonOnAddNewUser").click();
                  }else{
                    $("#warningOnAddUser").html("Ο χρήστης υπάρχει")
                    $("#warningOnAddUser").css("display","block")
                    setTimeout(function() {
                        $("#warningOnAddUser").css("display","none")
                    }, 2500);
                  }
                }//====End Success    
            });//===End AJAX

        }else{
            $("#warningOnAddUser").html("Οι κωδικοί δεν είναι όμοιοι");
            $("#warningOnAddUser").css("display","block")
            setTimeout(function() {
                $("#warningOnAddUser").css("display","none")
            }, 2500);
        }
    }else{
        $("#warningOnAddUser").html("Συμπληρώστε όλα τα στοιχεία");
        $("#warningOnAddUser").css("display","block")
        setTimeout(function() {
            $("#warningOnAddUser").css("display","none")
        }, 2500);
    }

}


function checkNewInfo(){

    console.log("11111")
    var Department = document.getElementById("DepartmentOnAdd").value.replace(/\s+/, '').length;
    var Site = document.getElementById("ADDnewSite").value.replace(/\s+/, '').length;
    var ECTS = document.getElementById("ECTSonADD").value;
    var Exam = document.getElementById("ExamOnADD").value;
    if(ECTS != "" && Exam != "" && Department != 0  && Site !=0){

            var Department1 = document.getElementById("DepartmentOnAdd").value;
            $.ajax({
                type: 'POST',
                url: "http://localhost/Thesis/php/CheckInfo.php",
                data:{  
                    "Department":Department1,  
                }, 
                success: function (data) {
                  if(data == "ok"){
                    //   alert("ok");
                    document.getElementById("submitButtonOnAddNewInfo").click();
                    console.log("click")
                  }else{
                    $("#warningOnAddInfo").html("Το τμήμα υπάρχει")
                    $("#warningOnAddInfo").css("display","block")
                    setTimeout(function() {
                        $("#warningOnAddInfo").css("display","none")
                    }, 2500);
                  }
                }//====End Success    
            });//===End AJAX
    }else{
        $("#warningOnAddInfo").html("Συμπληρώστε όλα τα στοιχεία");
        $("#warningOnAddInfo").css("display","block")
        setTimeout(function() {
            $("#warningOnAddInfo").css("display","none")
        }, 2500);
    }

}


function checkNewInfoOnEdit(){

    var Department = document.getElementById("DepartmentOnEdit").value.replace(/\s+/, '').length;
    var Site = document.getElementById("newSite").value.replace(/\s+/, '').length;
    var ECTS = document.getElementById("ECTSonEdit").value;
    var Exam = document.getElementById("ExamOnEdit").value;
    if(ECTS != "" && Exam != "" && Department != 0  && Site !=0){

    
             document.getElementById("submitButtonOnEditInfo").click();
               
    }else{
        $("#warningOnEditInfo").html("Συμπληρώστε όλα τα στοιχεία");
        $("#warningOnEditInfo").css("display","block")
        setTimeout(function() {
            $("#warningOnEditInfo").css("display","none")
        }, 2500);
    }

}



// $(document).ready(function() {
//     var delayInMilliseconds = 100000;  //<<<<<<<<====================SOS=======================

//     setTimeout(function() {
//         window.location="../php/logout.php"
//     }, delayInMilliseconds);
// });








