

$(function() {
    $("td[colspan=5]").find("#aa").hide();

    $(".lesson , .exam , .ECTS").click(function(event) {
     
        var $target = $(event.target);
        $target.parent("tr").closest("tr").next().find("#aa").slideToggle();
        //td      tr        //next tr                              
    });

    $(".secondTr").click(function(event) {
      
        var $target = $(event.target);
        $target.parent().parent().parent().parent().slideToggle();
        //td      tr        //next tr                              
    });

    //==========Close-ADD new Popup======================
    $("#popup-AddNewLesson .overlay").click(function(event) {
        document.getElementById("popup-AddNewLesson").classList.toggle("active");


        document.getElementById("Exam1o").checked = false;
        document.getElementById("Exam3o").checked = false;
        document.getElementById("Exam5o").checked = false;
        document.getElementById("Exam7o").checked = false;
        document.getElementById("Exam9o").checked = false;
    
        document.getElementById("Exam2o").checked = false;
        document.getElementById("Exam4o").checked = false;
        document.getElementById("Exam6o").checked = false;
        document.getElementById("Exam8o").checked = false;
        document.getElementById("Exam10o").checked = false;
        
        document.getElementById("LessonOnADD").value ="";
        document.getElementById("RequiredOnAdd").value =""; 
        document.getElementById("InfosOnAdd").value =""; 
        document.getElementById("ECTSonADD").value ="";
        document.getElementById("DirectionOnAdd").value =""; 
        
        $('html, body').css("overflow","auto");  
    });



    // $(".overlayEditModerator").click(function(event) {
    //     document.getElementById("popup-EditModerator").classList.toggle("active2");                 
    // });

 
    
});

 //==========Close-EDIT Popup======================
$("#popup-1 .overlay").click(function(event) {
    document.getElementById("popup-1").classList.toggle("active");  
    $('html, body').css("overflow","auto");  

    document.getElementById("Exam1oInputOnEdit").checked = false;
    document.getElementById("Exam3oInputOnEdit").checked = false;
    document.getElementById("Exam5oInputOnEdit").checked = false;
    document.getElementById("Exam7oInputOnEdit").checked = false;
    document.getElementById("Exam9oInputOnEdit").checked = false;
    document.getElementById("Exam2oInputOnEdit").checked = false;
    document.getElementById("Exam4oInputOnEdit").checked = false;
    document.getElementById("Exam6oInputOnEdit").checked = false;
    document.getElementById("Exam8oInputOnEdit").checked = false;
    document.getElementById("Exam10oInputOnEdit").checked = false;
  
});

 //==========Close-DELETE Popup======================

$("#popupDeleteLesson .overlay").click(function(event) {
    document.getElementById("popupDeleteLesson").classList.toggle("active");  
    $('html, body').css("overflow","auto");     
});



 //==========Open-EDIT Popup======================
function EditLesson() {
    document.getElementById("Exam1oInputOnEdit").checked = false;
    document.getElementById("Exam3oInputOnEdit").checked = false;
    document.getElementById("Exam5oInputOnEdit").checked = false;
    document.getElementById("Exam7oInputOnEdit").checked = false;
    document.getElementById("Exam9oInputOnEdit").checked = false;
    document.getElementById("Exam2oInputOnEdit").checked = false;
    document.getElementById("Exam4oInputOnEdit").checked = false;
    document.getElementById("Exam6oInputOnEdit").checked = false;
    document.getElementById("Exam8oInputOnEdit").checked = false;
    document.getElementById("Exam10oInputOnEdit").checked = false;
    document.getElementById("popup-1").classList.toggle("active");
    // $('html, body').css("overflow","hidden");
    $('html, body').animate({scrollTop:0}, '300');
}

 //==========Open-ADD Popup======================
function AddNewLessonPopUp(str) {
    if(str=="1"){
        document.getElementById("popup-AddNewLesson").classList.toggle("active");
        // $('html, body').css("overflow","hidden");
        $('html, body').animate({scrollTop:0}, '300');
    }else{
        document.getElementById("popup-AddNewLesson").classList.toggle("active");
        $('html, body').css("overflow","auto");
    }
      
   
    $("#DepartmentInputOnAdd").val("");
    $("#LessonOnADD").val("");
    $("#RequiredOnAdd").val("");
    $("#InfosOnAdd").val("");
    $("#InfosOnAdd").val("");
    $("#ECTSonADD").val("1");
    $("#DirectionOnAdd").val("");

    $("#Exam1o").prop( "checked", false );
    $("#Exam3o").prop( "checked", false );
    $("#Exam5o").prop( "checked", false );
    $("#Exam7o").prop( "checked", false );
    $("#Exam9o").prop( "checked", false );
    $("#Exam2o").prop( "checked", false );
    $("#Exam4o").prop( "checked", false );
    $("#Exam6o").prop( "checked", false );
    $("#Exam8o").prop( "checked", false );
    $("#Exam10o").prop( "checked", false );


}

 //==========Open-DELETE Popup======================
function DeleteLessonPopUp() {
    document.getElementById("popupDeleteLesson").classList.toggle("active");
    // $('html, body').css("overflow","hidden");
    $('html, body').animate({scrollTop:0}, '300');
}




var moderatorTable = document.getElementById("LessonTable");
for (var i=0; i<moderatorTable.rows.length; i++) {
    moderatorTable.rows[i].onclick = function() {

        //=============Edit==================
        document.getElementById("id1").value = this.cells[0].innerHTML;
        document.getElementById("DepartmentInputOnEdit").value = this.cells[2].innerHTML;
        document.getElementById("LessonInputOnEdit").value = this.cells[3].innerHTML;
        document.getElementById("RequiredInputOnEdit").value = this.cells[4].innerHTML;

        if(this.cells[5].innerHTML.includes("1")){
            document.getElementById("Exam1oInputOnEdit").checked = true;
        }
        if(this.cells[5].innerHTML.includes("3")){
            document.getElementById("Exam3oInputOnEdit").checked = true;
        }
        if(this.cells[5].innerHTML.includes("5")){
            document.getElementById("Exam5oInputOnEdit").checked = true;
        }
        if(this.cells[5].innerHTML.includes("7")){
            document.getElementById("Exam7oInputOnEdit").checked = true;
        }
        if(this.cells[5].innerHTML.includes("9")){
            document.getElementById("Exam9oInputOnEdit").checked = true;
        }

        if(this.cells[5].innerHTML.includes("2")){
            document.getElementById("Exam2oInputOnEdit").checked = true;
        }
        if(this.cells[5].innerHTML.includes("4")){
            document.getElementById("Exam4oInputOnEdit").checked = true;
        }
        if(this.cells[5].innerHTML.includes("6")){
            document.getElementById("Exam6oInputOnEdit").checked = true;
        }
        if(this.cells[5].innerHTML.includes("8")){
            document.getElementById("Exam8oInputOnEdit").checked = true;
        }
        if(this.cells[5].innerHTML.includes("0")){
            document.getElementById("Exam10oInputOnEdit").checked = true;
        }
        // document.getElementById("Exam").value = this.cells[5].innerHTML;
        document.getElementById("InfosInputOnEdit").value = this.cells[6].innerHTML;
        document.getElementById("ECTSInputOnEdit").value = this.cells[7].innerHTML;
        document.getElementById("DirectionInputOnEdit").value = this.cells[8].innerHTML;

        //============Alert- On Delete Lesson==============
        document.getElementById("DeletedLesson").innerHTML = this.cells[3].innerHTML;
        document.getElementById("IDonDeleteLesson").value = this.cells[0].innerHTML;
    }
}


function checkLessonOnAdd(){

    var checkbox = 0;
    if(document.getElementById('Exam1o').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam3o').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam5o').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam7o').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam7o').checked){
        checkbox = 1;
    }

    if(document.getElementById('Exam2o').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam4o').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam6o').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam8o').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam10o').checked){
        checkbox = 1;
    }


    var Lesson = document.getElementById("LessonOnADD").value.replace(/\s+/, '').length;
    var Direction = document.getElementById("DirectionOnAdd").value.replace(/\s+/, '').length;
    var Required = document.getElementById("RequiredOnAdd").value.replace(/\s+/, '').length
    var ECTS = document.getElementById("ECTSonADD").value;
    var Infos = document.getElementById("InfosOnAdd").value.replace(/\s+/, '').length;
    if(ECTS != "" && Required != 0 && Lesson != 0 && Direction !=0 && checkbox==1 && Infos!=0){
        // if(password1 == password2){
            var Lesson1 = document.getElementById("LessonOnADD").value;
            $.ajax({
                type: 'POST',
                url: "http://localhost/Thesis/php/checkLesson.php",
                data:{  
                    "Lesson":Lesson1,  
                }, 
                success: function (data) {
                  if(data == "ok"){
                    document.getElementById("submitButtonOnAddNewLesson").click();
                  }else{
                    $("#warningOnAddLesson").html("Το μάθημα υπάρχει")
                    $("#warningOnAddLesson").css("display","block")
                    setTimeout(function() {
                        $("#warningOnAddLesson").css("display","none")
                    }, 2500);
                  }
                }//====End Success    
            });//===End AJAX

        // }else{
        //     $("#warningOnAddUser").html("Οι κωδικοί δεν είναι όμοιοι");
        //     $("#warningOnAddUser").css("display","block")
        //     setTimeout(function() {
        //         $("#warningOnAddUser").css("display","none")
        //     }, 2500);
        // }
    }else{
        $("#warningOnAddLesson").html("Συμπληρώστε όλα τα στοιχεία");
        $("#warningOnAddLesson").css("display","block")
        setTimeout(function() {
            $("#warningOnAddLesson").css("display","none")
        }, 2500);
    }

}


function checkLessonOnEdit(){

    var checkbox = 0;
    if(document.getElementById('Exam1oInputOnEdit').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam3oInputOnEdit').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam5oInputOnEdit').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam7oInputOnEdit').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam9oInputOnEdit').checked){
        checkbox = 1;
    }

    if(document.getElementById('Exam2oInputOnEdit').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam4oInputOnEdit').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam6oInputOnEdit').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam8oInputOnEdit').checked){
        checkbox = 1;
    }
    if(document.getElementById('Exam10oInputOnEdit').checked){
        checkbox = 1;
    }


    var Lesson = document.getElementById("LessonInputOnEdit").value.replace(/\s+/, '').length;
    var Direction = document.getElementById("DirectionInputOnEdit").value.replace(/\s+/, '').length;
    var Required = document.getElementById("RequiredInputOnEdit").value.replace(/\s+/, '').length
    var ECTS = document.getElementById("ECTSInputOnEdit").value;
    var Infos = document.getElementById("InfosInputOnEdit").value.replace(/\s+/, '').length;
    if(ECTS != "" && Required != 0 && Lesson != 0 && Direction !=0 && checkbox==1 && Infos!=0){
        document.getElementById("submitButtonOnEditLesson").click();
    }else{
        $("#warningOnEditLesson").html("Συμπληρώστε όλα τα στοιχεία");
        $("#warningOnEditLesson").css("display","block")
        setTimeout(function() {
            $("#warningOnEditLesson").css("display","none")
        }, 2500);
    }

}



// $(document).ready(function() {
//     var delayInMilliseconds = 5000;  //<<<<<<<<====================SOS=======================

//     setTimeout(function() {
//         window.location="./php/logout.php"
//     }, delayInMilliseconds);
// });



