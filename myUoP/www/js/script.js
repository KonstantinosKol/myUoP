
const myUrl ="https://yourUrl.com";


function OpenCloseHelpPopUp(){
    document.getElementById("popup-1").classList.toggle("active");

    if(localStorage.getItem("welcomeAnimation") == null){
        localStorage.setItem("welcomeAnimation", "true");
        $(".welcomeSection1").stop(true, true).delay(2000).animate({opacity: '0',top:"-100px"},"slow");
        $(".welcomeSection2").stop(true, true).delay(2200).animate({opacity: '1'},"slow");
    }else{
        $(".welcomeSection1").css("display","none");
        $(".welcomeSection2").css("opacity","1")
    }
 
}


	


function swapStyleSheet(sheet) {

    if($(sheet).prop("checked") == true){
        localStorage.setItem("darkTheme", "on");
        setDarkTheme();
      
    }else{
        localStorage.setItem("darkTheme", "off");
        setLightTheme();
    }

}

function setDarkTheme(){
    $('#Menu').css("background","#1a1a1a");
    $('.button3').css({"background":"#333333","color":"#e1e1e1"});
    $('.button4').css({"background":"#333333","color":"#e1e1e1"});

    $('#GroupOfButtons').css("background","#1a1a1a");
    $('#myInput').css({"background":"#333333","color":"#969696"});

    $('.contentExamina').css("background","#333333");
    $('.contentSeason').css("background","#333333");

    $('.PortfolioButton').css("background","rgb(215, 215, 215)");
    $('.CurvedSection').css("background","#333333");

    $('.content2').css({
        background:"linear-gradient(to top,#333333 0%,#333333 40%,#1a1a1a 40%,#1a1a1a 100%)"
    });

    $('.contentAlert').css("background","rgb(215, 215, 215)");

    $('#DepartmentInfos').css({"background":"#333333","color":"#e1e1e1"});

    $('#Array').css({"background":"#333333"});

    $('#Array').css({"background":"#333333"});


    $('.popup .content').css({"background":"#333333"});
    $('.welcomeSection2').css("color","#e1e1e1");

    $('.button3 img').attr("src","./img/Untitled-1-White.png");
    $('.button4 img').attr("src","./img/Untitled-2White.png");
}

function setLightTheme(){
    $('#Menu').css("background","rgb(231, 240, 240)");

    $('.button3').css({"background":"rgb(231, 240, 240)","color":"#14A098"});
    $('.button4').css({"background":"rgb(231, 240, 240)","color":"#14A098"});
    
    $('#GroupOfButtons').css("background","rgb(231, 240, 240)");
    $('#myInput').css("background","rgb(240, 239, 239)");
    $('.contentExamina').css("background","rgb(231, 240, 240)");
    $('.contentSeason').css("background","rgb(231, 240, 240)");
    $('.PortfolioButton').css("background","white");
    $('.CurvedSection').css("background","rgb(231, 240, 240)");
    $('.content2').css("background","rgb(231, 240, 240)");
    $('.contentAlert').css("background","rgb(231, 231, 231)");

    $('#DepartmentInfos').css({"background":"#E7F0F0","color":"#black"});

    $('#Array').css({"background":"#82b3b0"});

    $('.popup .content').css({"background":"rgb(231, 240, 240)"});
    $('.welcomeSection2').css("color","#14A098");

    
    $('.button3 img').attr("src","./img/Untitled-1.png");
    $('.button4 img').attr("src","./img/Untitled-2Black.png");
}



function back(){
    document.querySelector('.containerS').classList.toggle('view-change');

    setTimeout(function() {
        var  ul, li,  i;
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
                li[i].style.display = "block";
                li[i].className="button1";
                // li[i].style.color = "white";
        }
    
        document.getElementById("myInput").value="";
      }, 400);
}




var mode;
function GoToDepartments1(){

    document.querySelector('.containerS').classList.toggle('view-change');
    mode=0;
}




function GoToDepartments2(){
    document.querySelector('.containerS').classList.toggle('view-change');
    mode=1;
}




document.querySelector(".overlaySeason").addEventListener("click",e=>{
    $('#popupSeason2').animate({
        top: 1000
    });
    document.getElementById("popupSeason").classList.toggle("activeSeason");

})





setInterval(function() {
    if($('#myUL li').length != 0){
        document.getElementById("loading1").className="loader1 hidden"
    }
    else{
        document.getElementById("loading1").className="loader1 show"
       
    }
    if( document.getElementById("tableBodyId").innerHTML != ""){
        document.getElementById("loading2").className="loader2 hidden"
    }
    else{
        document.getElementById("loading2").className="loader2 show"
       
    }

   
}, 1000); 





var DepartmentsInfoTable;

document.addEventListener("deviceready", function() {

    //================Ajax for Departments=======================
    $.ajax({
        type: 'GET',
        url: myUrl+"/FindDepartment.php",
        dataType: 'jsonp',
        jsonp:"callback",
        success: function (data) {
        
            var len = data.length;

            for(var i=0; i<len; i++){
                Department=data[i].Department;
                // alert(data[i].id);
                var tr_str = `<li class="button1" >${Department}</li>`;
                $("#myUL").append(tr_str);

            }
        }//====End Success    
    });//===End AJAX

    //================Ajax for ECTS/TotalExam//..=======================
    $.ajax({
        type: 'GET',
        url: myUrl+"/DepartmentsAllInfos.php",
        dataType: 'jsonp',
        jsonp:"callback",
        success: function (data) { 

            var len = data.length;
            DepartmentsInfoTable = new Array(len)
            for(var i=0; i<len ;i++){
                DepartmentsInfoTable[i] = new Array(7)
                DepartmentsInfoTable[i][0]=data[i].Department;
                DepartmentsInfoTable[i][1]=data[i].TotalECTS;
                DepartmentsInfoTable[i][2]=data[i].Site;
                DepartmentsInfoTable[i][3]=data[i].Conditions;
                DepartmentsInfoTable[i][4]=data[i].TotalExam;
                DepartmentsInfoTable[i][5]=data[i].PathWinter;
                DepartmentsInfoTable[i][6]=data[i].PathSummer;
            }

        }//====End success
    });//===End AJAX


}, false);





document.addEventListener("deviceready", function() {

    if(localStorage.getItem("darkTheme") !== null){
        if(localStorage.getItem("darkTheme") == "on"){
            document.getElementById("switchDarkTheme").checked =true;
            setDarkTheme();

        }else{
            document.getElementById("switchDarkTheme").checked =false;
            setLightTheme();
        }
    }

    

}, false);




function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}




$('#myUL').on('click', 'li', function(event){
    var target = getEventTarget(event);

    const ul = document.querySelectorAll('#myUL li');
    for (let i = 0; i <= ul.length - 1; i++) {
        ul[i].className="button1";
    }

    target.className="pressedButton";
    Department=target.innerHTML;

    document.getElementById("HiddenDepartment").innerHTML=target.innerHTML;            //<<<<<<<<===================Tmima


    if(mode==0){

        for(var i=0;i<DepartmentsInfoTable.length;i++){

            if(DepartmentsInfoTable[i][0] == Department){
                if(DepartmentsInfoTable[i][4]  == 8){
                    $("#5thyearB").css("display", "none");
                    $("#5thyearLine").css("display", "none");
                    $("#5thyear").css("display", "none");
                }else{
                   $("#5thyearB").css("display", "block");
                    $("#5thyearLine").css("display", "block");
                    $("#5thyear").css("display", "grid");
                }
            }  
        }

        $('#popupExamina2').animate({
            top: "40%"
        });
        document.getElementById("popupExamina").classList.toggle("activeExamina");

    }else{
        $('#popupSeason2').animate({
            top: "65%"
        }, "fast");
        document.getElementById("popupSeason").classList.toggle("activeSeason");
    }
});








//=====================Close-PopUp-Examina==============================

document.querySelector(".overlayExamina").addEventListener("click",e=>{

    $('#popupExamina2').animate({
        top: 10000
    });
    document.getElementById("popupExamina").classList.toggle("activeExamina");

    const ul = document.querySelectorAll('#myUL li');
    for (let i = 0; i <= ul.length - 1; i++) {
        ul[i].className="button1";
    }
    
})





function redirectToPDF(Season1){
    $('#popupSeason2').animate({
        top: 1000
    });
    document.getElementById("popupSeason").classList.toggle("activeSeason");


    var Department=document.getElementById("HiddenDepartment").innerHTML;

    var today = new Date();
    var month = String(today.getMonth() + 1).padStart(2, '0');
    if(month=="03" ||  month=="04" || month=="05" || month=="06" || month=="07"){
        if(Season1=="Summer"){

            for(var i=0;i<DepartmentsInfoTable.length;i++){
                if(DepartmentsInfoTable[i][0] == Department){
                    if(DepartmentsInfoTable[i][2] != "-"){
                        window.location = DepartmentsInfoTable[i][2];
                    }
                   
                }  
            }
        }else{

            for(var i=0;i<DepartmentsInfoTable.length;i++){
                if(DepartmentsInfoTable[i][0] == Department){
                    if(DepartmentsInfoTable[i][5] != "-"){
                        window.location = DepartmentsInfoTable[i][5];
                    }
                }  
            }
        }
    }else{
        if(Season1=="Winter"){

            for(var i=0;i<DepartmentsInfoTable.length;i++){
                if(DepartmentsInfoTable[i][0] == Department){
                    if(DepartmentsInfoTable[i][2] !="-"){
                        window.location = DepartmentsInfoTable[i][2];
                    }
                }  
            }
        }else{

            for(var i=0;i<DepartmentsInfoTable.length;i++){
                if(DepartmentsInfoTable[i][0] == Department){
                    if(DepartmentsInfoTable[i][4] !="-"){
                        window.location = DepartmentsInfoTable[i][4];
                    }
                   
                }  
            }
        }
    }
}





//===============================Portofolio-List===Slide============================



// document.addEventListener("deviceready", function() {
//     var networkState = navigator.connection.type;
// }, false);



// document.addEventListener("online", function() {
//     // device went online
//     var networkState = navigator.connection.type; // Get new network state
//     alert("Connection on");
// }, false);

// document.addEventListener("offline", function() {
//     // device went offline
//     var networkState = navigator.connection.type; // Get new network state
//     alert("No connection");
// }, false);

//=========================================================================================================================
//=========================================================================================================================



function aJaxCall(examino){


    //====================================================

    var Department = document.getElementById("HiddenDepartment").innerHTML;
    
    document.getElementById("HiddenExam").innerHTML=examino;                            //<<<<<<===================Examino

    $("#tableBodyId").empty();  //<<=====clear table from 'Nothing'
    
    //----------Close pop-up----------
    $('#popupExamina2').animate({
        top: 10000
    });
    document.getElementById("popupExamina").classList.toggle("activeExamina");
    //---------------Animation------------------

    document.querySelector('.containerS').classList.toggle('view-change2');

  
    $.ajax({
        type: 'GET',
        url: myUrl+"/FindLessons.php",
        data:{  
            "tmima":Department,  
            "examino":examino,  
        },  
        dataType: 'jsonp',
        jsonp:"callback",
        success: function (data) {
            
            var len = data.length;

            for(var i=0; i<len; i++){
                id=data[i].id;
                Lesson = data[i].Lesson;
                ECTS = data[i].ECTS;
                Infos = data[i].Infos;
                // var Department = data[i].Department;
                Required = data[i].Required;
                Direction = data[i].Direction;
                Examino = data[i].Exam;
               

                fillLessonsTable(id,Lesson,ECTS,Infos,Required,Direction,i,len,Examino);

            }//=====end for


        }//====End success
    });//===End AJAX

    //Save 'ECTS' for Departmnet its time
     for(var i=0;i<DepartmentsInfoTable.length;i++){
        if(DepartmentsInfoTable[i][0] == Department){
            document.getElementById("HiddenECTS").innerHTML = DepartmentsInfoTable[i][1]
        }  
    }

    //Save 'Infos' for Departmnet its time
     for(var i=0;i<DepartmentsInfoTable.length;i++){
        if(DepartmentsInfoTable[i][0] == Department){
            if(DepartmentsInfoTable[i][3] != "-"){
                document.getElementById("DepartmentInfos").innerHTML = DepartmentsInfoTable[i][3]
            }else{
                document.getElementById("DepartmentInfos").innerHTML="<p style='margin-top:25%;'>Δεν υπάρχουν πληροφορίες για το Τμήμα που επέλεξες</p>"
            }
        }  
    }

}//====End function()



function fillLessonsTable(id,Lesson,ECTS,Infos,Required,Direction,i,len,Examino) {
                
        var db = null;
        db = window.sqlitePlugin.openDatabase({
            name: 'my.db',
            location: 'default',
        });

        var darkTheme = false
        if(localStorage.getItem("darkTheme") !== null){
            if(localStorage.getItem("darkTheme") == "on"){
                darkTheme=true;
            }
        }

        db.executeSql("SELECT count(*) AS mycount FROM savedLessonsTable WHERE id=?", [id], function(rs) {
          
            var tr_str = 
            "<tr data-id='mainTr'>" +
                "<td  width='80%' class='lessonInsideRows' data-id='closed'><p style='padding-left:5px;padding-right:10px; padding-top:5px; padding-bottom:5px;'>" +Lesson + "</p></td>" ;     //<<<=====0
            if (rs.rows.item(0).mycount!=0) {
                //Remove
                tr_str=tr_str+"<td  width='20%'  ><button class='removeFromArray' id='addButton' data-id="+id+"><i class='far fa-trash-alt'></i></button></td>" 
            } else {
                //ADD
                tr_str=tr_str+"<td  width='20%'  ><button class='addToList' id='addButton' data-id="+id+">&#10010;</button></td>";
            }
            tr_str=tr_str+ 
                "<td  width='0%' class='hidden'>" +ECTS + "</td>" +     //<<<=====2
                "<td  width='0%' class='hidden'>" +changeZero(Examino) + "</td>"+ //<<<=====3
                "<td  width='0%' class='hidden'>" +Infos + "</td>" +         //<<<=====4
                "<td  width='0%' class='hidden'>" +Direction + "</td>" +         //<<<=====5
                "<td  width='0%' class='hidden'>" +changeOperators(Required) + "</td>" +              //<<<=====6
            "</tr>"
            $("#userTable tbody").append(tr_str);

            if(i==len-1){
                if(darkTheme == true){
                    $('#userTable tr').each(function() {
                        $(this).find("td").css({"background":"#525252","color":"#e1e1e1"});
                    });
                }else{
                    $('#userTable tr').each(function() {
                        $(this).find("td").css({"background":"#E7F0F0","color":"black"});
                    });
                }
                formLessonsTable();
                $("#userTable").removeAttr( 'style' );
                $("#userTable").attr( 'style' ,'width:100%');
            }

        }, function(error) { //Otan tha apothikeusei kati o xristis PRWTI fora
           
            var tr_str = 
            "<tr  data-id='mainTr'>" +
            "<td  width='80%' class='lessonInsideRows' data-id='closed'><p style='padding-left:5px;padding-right:10px; padding-top:5px; padding-bottom:5px;'>" +Lesson + "</p></td>" ;     //<<<=====0
            //ADD
            tr_str=tr_str+"<td  width='20%' id='aa' class='tmp' ><button class='addToList' id='addButton' data-id="+id+">&#10010;</button></td>";        //<<===1
            tr_str=tr_str+ 
                "<td  width='0%' class='hidden'>" +ECTS + "</td>"+      //<<<=====2
                "<td  width='0%' class='hidden'>" +changeZero(Examino) + "</td>"+ //<<<=====3
                "<td  width='0%' class='hidden'>" +Infos + "</td>" +         //<<<=====4
                "<td  width='0%' class='hidden'>" +Direction + "</td>" +         //<<<=====5
                "<td  width='0%' class='hidden'>" +changeOperators(Required) + "</td>" +              //<<<=====6
            "</tr>"
                
            $("#userTable tbody").append(tr_str);

            if(i==len-1){
                if(darkTheme == true){
                    $('#userTable tr').each(function() {
                        $(this).find("td").css({"background":"#525252","color":"#e1e1e1"});
                    });
                }else{
                    $('#userTable tr').each(function() {
                        $(this).find("td").css({"background":"#E7F0F0","color":"black"});
                    });
                }
                formLessonsTable();
                $("#userTable").removeAttr( 'style' );
                $("#userTable").attr( 'style' ,'width:100%');
            }
          
        });    
       
}//===End fillLessonsTable




function changeZero(Examino){
    var tmpExamino;
    if(Examino.includes("0")){
        tmpExamino = Examino.replaceAll("0","10");
    }else{                                                   
        tmpExamino= Examino 
    }

    if(tmpExamino.includes("/")){
        tmpExamino = tmpExamino.replace(/\//g,"ο ");
    }
    return tmpExamino;
}


function changeOperators(Required){
    var tmpRequired = Required;
    if(Required.includes("||")){
        tmpRequired = Required.replaceAll("||","`H"); //<====Aggliko H
        if(Required.includes("&&")){
            tmpRequired = tmpRequired.replaceAll("&&","ΚΑΙ");
        }
    }
    if(Required.includes("&&")){
        tmpRequired = Required.replaceAll("&&","ΚΑΙ");
        if(Required.includes("||")){
            tmpRequired = tmpRequired.replaceAll("||","`H");
        }
    }
    return tmpRequired;
}

         
    
function format ( d ) {
    if(localStorage.getItem("darkTheme") !== null){
        if(localStorage.getItem("darkTheme") == "on"){
              // `d` is the original data object for the row
                return '<div style="display:none" data-id="1" class="infosTableDiv" ><table id="infosTable" data-id="infosTable" cellpadding="5" cellspacing="0" border="0"  >'+
                '<tbody>'+
                '<tr data-id="infos" >'+
                    '<td style=" background:#525252; color:#46AFA9; font-size:20px;">Εξάμηνο</td>'+
                    '<td style="background:#525252; color:#e1e1e1; font-size:20px;">'+d.Examino+'</td>'+
                '</tr>'+
                '<tr data-id="infos"style="background:#F0F0F0;" >'+
                    '<td style="background:#525252; color:#46AFA9; font-size:20px;">ECTS</td>'+
                    '<td style="background:#525252; color:#e1e1e1; font-size:20px;">'+d.ECTS+'</td>'+
                '</tr>'+
                '<tr data-id="infos">'+
                        '<table id="slidedTable" >'+
                            '<tbody>'+
                            '<tr><td style="background:#525252; color: #DF5050; font-size:18px; text-align:center;">Προαπαιτούμενα Μαθήματα</td></tr>'+
                            '<tr><td  style="background:#525252; color:#e1e1e1; text-align:center;">'+d.Required+'</td></tr>'+
                            '</tbody>'+
                        '</table>'+
                '</tr>'+
                '<tr data-id="infos">'+
                        '<table id="slidedTable2">'+
                            '<tbody>'+
                            '<tr><td style="background:#525252; color:#46AFA9; font-size:18px; text-align:center;">Πληροφορίες</td></tr>'+
                            '<tr><td  style="background:#525252; color:#e1e1e1; text-align:center;">'+d.Infos+'</td></tr>'+
                            '</tbody>'+
                        '</table>'+
                '</tr> '+
                '</tbody> '+
                
                '</table> </div>';
        }else{
              // `d` is the original data object for the row
            return '<div style="display:none" data-id="1" class="infosTableDiv" ><table id="infosTable" data-id="infosTable" cellpadding="5" cellspacing="0" border="0" >'+
            '<tbody>'+
            '<tr data-id="infos" >'+
                '<td style=" background:#E7F0F0; color:#06817F; font-size:20px;">Εξάμηνο</td>'+
                '<td style="background:#E7F0F0;  color:black; font-size:20px;">'+d.Examino+'</td>'+
            '</tr>'+
            '<tr data-id="infos"style="background:#E7F0F0;" >'+
                '<td style="background:#E7F0F0; color:#06817F; font-size:20px;">ECTS</td>'+
                '<td style="background:#E7F0F0; color:black; font-size:20px;">'+d.ECTS+'</td>'+
            '</tr>'+
            '<tr data-id="infos">'+
                    '<table id="slidedTable" >'+
                        '<tbody>'+
                        '<tr><td style="background:#E7F0F0; color: #e03535; font-size:18px; text-align:center;">Προαπαιτούμενα Μαθήματα</td></tr>'+
                        '<tr><td  style="background:#E7F0F0; color:black; text-align:center;">'+d.Required+'</td></tr>'+
                        '</tbody>'+
                    '</table>'+
            '</tr>'+
            '<tr data-id="infos">'+
                    '<table id="slidedTable2">'+
                        '<tbody>'+
                        '<tr><td style="background:#E7F0F0; color:#06817F; font-size:18px; text-align:center;">Πληροφορίες</td></tr>'+
                        '<tr><td  style="background:#E7F0F0; color:black; text-align:center;">'+d.Infos+'</td></tr>'+
                        '</tbody>'+
                    '</table>'+
            '</tr> '+
            '</tbody> '+
            
            '</table> </div>';
        }
    }else{
        // `d` is the original data object for the row
        return '<div style="display:none" data-id="1" class="infosTableDiv" ><table id="infosTable" data-id="infosTable" cellpadding="5" cellspacing="0" border="0"  >'+
        '<tbody>'+
        '<tr data-id="infos" >'+
            '<td class="infosRow" style=" background:#E7F0F0; color:#06817F;" >Εξάμηνο</td>'+
            '<td class="infosRow" style="background:#E7F0F0; color:black; font-size:20px;">'+d.Examino+'</td>'+
        '</tr>'+
        '<tr data-id="infos"style="background:#E7F0F0;" >'+
            '<td  class="infosRow" style="background:#E7F0F0; color:#06817F;">ECTS</td>'+
            '<td  class="infosRow" style="background:#E7F0F0; color:black;">'+d.ECTS+'</td>'+
        '</tr>'+
        '<tr data-id="infos">'+
                '<table id="slidedTable" >'+
                    '<tbody>'+
                    '<tr><td class="infosRow" style="background:#E7F0F0; color: #e03535;text-align:center;">Προαπαιτούμενα Μαθήματα</td></tr>'+
                    '<tr><td  class="infosRow" style="background:#E7F0F0; color:black; text-align:center;">'+d.Required+'</td></tr>'+
                    '</tbody>'+
                '</table>'+
        '</tr>'+
        '<tr data-id="infos">'+
                '<table id="slidedTable2">'+
                    '<tbody>'+
                    '<tr><td class="infosRow" style="background:#E7F0F0; color:#06817F; text-align:center;">Πληροφορίες</td></tr>'+
                    '<tr><td  class="infosRow" style="background:#E7F0F0; color:black; text-align:center;">'+d.Infos+'</td></tr>'+
                    '</tbody>'+
                '</table>'+
        '</tr> '+
        '</tbody> '+
        
        '</table> </div>';
    }

}



function formLessonsTable() {
    
    var table =$('#userTable').DataTable({
        destroy : true,
        "deferRender": true,
        "destroy": true,
        "retrieve": false,
        "paging":   false,              //Ta epipleon features pou exei to DataTable
        "ordering": true,
        "info":     false,
        "searching":   false,
        "columns": [
            {'data': 'Lesson'},
            { 'data': 'id' },
            { 'data': 'ECTS' },
            { 'data': 'Examino' },
            { 'data': 'Infos' },
            { 'data': 'Direction' },
            { 'data': 'Required' }
        ],
        'order': [[5, 'asc']],
         "responsive": true,
         "initComplete": function(settings, json) {
            $('th.sorting').off();
            $("th.sorting").css('cursor', 'default');
            $("th.sorting_asc").css('cursor', 'default');
            $("th.sorting_desc").css('cursor', 'default');
        },
        drawCallback: function (settings) {
                    var api = this.api();
                    var rows = api.rows({ page: 'current' }).nodes();
                 
                    var last = null;
    
                    api.column(5, { page: 'current' }).data().each(function (group, i) {
    
                        if (last !== group) {
    						if(i==0){
                                $(rows).eq(i).before(
                                    '<tr class="group" style="box-shadow: none;">'+
                                        '<td colspan="8" style="background-color:transparent; padding-left: 10px; " class="orderingClass"><i class="fas fa-caret-right"></i> '+ group  + '</td>'
                                    +'</tr>'
                                );
                            }else{
                                $(rows).eq(i).before(
                                '<tr style="box-shadow: none;"><td colspan="8" style="padding: 20px 20px;background:#transparent;"></td></tr>'+
                                '<tr class="group" style="box-shadow: none;">'+
                                    '<td colspan="8" style="background-color:transparent;  padding-left: 10px;" class="orderingClass"><i class="fas fa-caret-right"></i> ' + group  + '</td>'
                                +'</tr>'
                                );
                            }
                            
                            last = group;
                        }
                    });
                }
    } );
         
}//===po




//Add event listener for opening and closing details
$('#userTable tbody').on('click', 'td', function(e){
    var table =$('#userTable').DataTable();
    var tr = $(this).closest('tr');
    var row = table.row( tr );

   if(tr.attr("data-id")=="mainTr"){
        if($(this).closest("td").index()==0){

            if ( $(this).attr("data-id") == "closed" ) {
                row.child(format(row.data())).show();
                tr.next().find("div").slideToggle();
                $(this).attr('data-id','open');
                $(this).parent().next().css("box-shadow","none");
            }else{
                tr.next().find("div").slideUp();
                $(this).attr('data-id','closed');
                setTimeout(function() {
                    row.child.hide(); 
                }, 500);
            
            }
           
        }
    }else{     
  
    //$(this).parent().parent().parent().parent().parent().parent().parent().find("tr").slideToggle("slow");

        $(this).find("div").slideUp();
        $(this).find("div").parent().parent().prev().children().attr('data-id','closed');
        var tr =  $(this).find("div").parent().parent().prev();
        var row = table.row( tr );
        setTimeout(function() {
            row.child.hide(); 
        }, 500);

    }

});








//========================https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list=================================
function searchFunc() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}






     




