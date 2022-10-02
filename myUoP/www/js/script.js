
var URL="";

//Open or close Help PopUp in menu 
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
    $('.welcomeSection2').animate({scrollTop:0}, '300');
 
}



// Open Notifications Screen
$('.NotificationsIcon').on('click', function(e){
    $('#NotificationsScreen .content').animate({
        left: "0%"
    });
    document.getElementById("NotificationsScreen").classList.toggle("active");
});


// Close Notifications Screen
$('.closeNotification').on('click', function(e){
    
    calculateNotifications();

    $('#NotificationsScreen .content').animate({
        left: "-100%"
    });
    document.getElementById("NotificationsScreen").classList.toggle("active");
});


// Clear Notifications
$('.clearNotification').on('click', function(e){

    var  ul, li,  i;
    ul = document.getElementById("NotificationsList");
    li = ul.getElementsByTagName("li");
    for (i = li.length-1; i >= 0 ; i--) {
        $(li[i]).delay(150).animate({
            opacity: "0"
        });
        setTimeout(function() {
            li[i].remove();
        }, 300);
    }



    db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
    });

    db.executeSql("DROP TABLE NotificationsTable ", [], function(resultsNotifications) {});

    $('.NotificationsIcon').find("span").css("color","#DF5858")
    $('.NotificationsIcon').find("span").html("0")


});


//Count Notifications
function calculateNotifications(){


    db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
    });


    $("#NotificationsList").empty();

    db.executeSql("SELECT *  FROM NotificationsTable ", [], function(resultsNotifications) {
        //fill notifications list
        for(var i=0; i<resultsNotifications.rows.length; i++){
            $("#NotificationsList").append("<li>"+resultsNotifications.rows.item(i).Notification +"</li>");
        }
        //check dark theme
        if(localStorage.getItem("darkTheme") !== null){
            if(localStorage.getItem("darkTheme") == "on"){
                $('#NotificationsList li').css({"background":"#525252","color":"#EFEFEF"});
            }else{
                $('#NotificationsList li').css({"background":"rgb(231, 240, 240)","color":"#14A098"});
            }
        }
        //make notifications icon
        if(resultsNotifications.rows.length == 0){
            $('.NotificationsIcon').find("span").css("color","#DF5858")
            $('.NotificationsIcon').find("span").html("0")
        }else{
            $('.NotificationsIcon').find("span").css("color","#14A098")
            if(resultsNotifications.rows.length > 20){
                $('.NotificationsIcon').find("span").html("20+")
            }else{
                $('.NotificationsIcon').find("span").html(resultsNotifications.rows.length)
            }
        }
    },function(error){
        $('.NotificationsIcon').find("span").css("color","#DF5858")
        $('.NotificationsIcon').find("span").html("0")
    });

       


    // var  ul, li,  i;
    // ul = document.getElementById("NotificationsList");
    // li = ul.getElementsByTagName("li");
    // if(li.length > 0){
    //     if( li.length == 0 ){
    //         $('.NotificationsIcon').find("span").css("color","#DF5858")
    //         $('.NotificationsIcon').find("span").html("0")
    //     }else{
    //         $('.NotificationsIcon').find("span").css("color","#14A098")
    //         if(li.length > 20){
    //             $('.NotificationsIcon').find("span").html("20+")
    //         }else{
    //             $('.NotificationsIcon').find("span").html(li.length)
    //         }
    //     }
    // }

}

//toggle sqitch open/close dark theme 
function swapStyleSheet(sheet) {

    if($(sheet).prop("checked") == true){
        localStorage.setItem("darkTheme", "on");
        setDarkTheme();
      
    }else{
        localStorage.setItem("darkTheme", "off");
        setLightTheme();
    }

}

//set Dark theme in app
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

    $('.button1').css({"background":"#525252","color":"#EFEFEF"});

    $('.clearNotification').css({"background":"#525252","color":"#EFEFEF"});

    $('.NotificationsScreen .content').css({"background":"#333333"});

    $('#NotificationsList li').css({"background":"#525252","color":"#EFEFEF"});

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

//set Light theme in app
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

    $('.lessonText').css("background","#E7F0F0");
    $('.buttonDiv').css("background","#E7F0F0");

    $('.button1').css({"background":"rgb(231, 240, 240)","color":"#14A098"});
    $('.clearNotification').css({"background":"rgb(231, 240, 240)","color":"#14A098"});

    $('.NotificationsScreen .content').css({"background":"rgb(231, 240, 240)"});

    $('#NotificationsList li').css({"background":"rgb(231, 240, 240)","color":"#14A098"});

    $('#DepartmentInfos').css({"background":"#E7F0F0","color":"#106b67"});

    $('#Array').css({"background":"#82b3b0"});

    $('.popup .content').css({"background":"rgb(231, 240, 240)"});
    $('.welcomeSection2').css("color","#14A098");

    
    $('.button3 img').attr("src","./img/Untitled-1.png");
    $('.button4 img').attr("src","./img/Untitled-2Black.png");
}


//Back button on Deopartment list (2nd screen -> 1st screen menu)
function back(){
    document.querySelector('.containerS').classList.toggle('view-change');

    setTimeout(function() {
        let ul = document.querySelectorAll('#DepartmentsList li');
        for (let i = 0; i <= ul.length - 1; i++) {
            ul[i].className="button1";
        }

        ul = document.querySelectorAll('#savedDepartmentsList li');
        for (let i = 0; i <= ul.length - 1; i++) {
            ul[i].className="button1";
        }
    
        document.getElementById("myInput").value="";
      }, 400);
     
}

const NoConnection1 = bodymovin.loadAnimation({
    wrapper: document.getElementById("svg__No_Connection"),
    animType:'svg',
    autoplay: false,
    loop: false,
    animationData:{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":""},"fr":29.9700012207031,"ip":0,"op":61.0000024845809,"w":260,"h":260,"nm":"Not Done","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[131,130,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[-0.137,-0.137,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":4,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[28.416,28.416,0]},"t":24,"s":[100,100,100]},{"t":29.0000011811942,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[153.888,72.281]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.00784313725490196,0.06274509803921569,0.18823529411764706,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2901960784313726,0.5647058823529412,0.8862745098039215,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-35.743,34.684],[34.684,-35.743]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.00784313725490196,0.06274509803921569,0.18823529411764706,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2901960784313726,0.2901960784313726,0.2901960784313726,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24,"s":[100]},{"t":29.0000011811942,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"wifi_black_24dp1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,130,0],"ix":2},"a":{"a":0,"k":[12,12,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[0.763,0.763,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":4,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[-0.816,-0.816,0]},"t":24,"s":[478.824,478.824,100]},{"t":29.0000011811942,"s":[444,444,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.87,-3.86],[0,0],[-2.76,-2.76],[0,0]],"o":[[0,0],[2.76,-2.76],[0,0],[-3.86,-3.86]],"v":[[-7,1.535],[-5,3.535],[5,3.535],[7,1.535]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[1.66,-1.66],[0,0],[0,0]],"o":[[0,0],[0,0],[-1.65,-1.66]],"v":[[-3,5.535],[0,8.535],[3,5.535]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[6.08,-6.07],[0,0],[-4.97,-4.97],[0,0]],"o":[[0,0],[4.97,-4.97],[0,0],[-6.07,-6.07]],"v":[[-11,-2.465],[-9,-0.465],[9,-0.465],[11,-2.465]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.3215686274509804,0.9176470588235294,0.7607843137254902,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12,11.465],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Settings Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,130,0],"ix":2},"a":{"a":0,"k":[95.067,95.067,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.116,0.116,0.667],"y":[1,1,1]},"o":{"x":[1,1,0.333],"y":[-0.004,-0.004,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":24,"s":[100,100,100]},{"t":29.0000011811942,"s":[90,90,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-52.366,0],[0,-52.366],[52.366,0],[0,52.366]],"o":[[52.366,0],[0,52.366],[-52.366,0],[0,-52.366]],"v":[[0,-94.817],[94.817,0],[0,94.817],[-94.817,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[95.067,95.067],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0}],"markers":[]}
})


const NoConnection2 = bodymovin.loadAnimation({
    container: document.getElementById('svg__No_Connection2'),
    animType:'svg',
    autoplay: false,
    loop: false,
    animationData:{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":""},"fr":29.9700012207031,"ip":0,"op":61.0000024845809,"w":260,"h":260,"nm":"Not Done","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[131,130,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[-0.137,-0.137,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":4,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[28.416,28.416,0]},"t":24,"s":[100,100,100]},{"t":29.0000011811942,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[153.888,72.281]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.00784313725490196,0.06274509803921569,0.18823529411764706,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2901960784313726,0.5647058823529412,0.8862745098039215,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-35.743,34.684],[34.684,-35.743]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.00784313725490196,0.06274509803921569,0.18823529411764706,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2901960784313726,0.2901960784313726,0.2901960784313726,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24,"s":[100]},{"t":29.0000011811942,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"wifi_black_24dp1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,130,0],"ix":2},"a":{"a":0,"k":[12,12,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[0.763,0.763,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":4,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[-0.816,-0.816,0]},"t":24,"s":[478.824,478.824,100]},{"t":29.0000011811942,"s":[444,444,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.87,-3.86],[0,0],[-2.76,-2.76],[0,0]],"o":[[0,0],[2.76,-2.76],[0,0],[-3.86,-3.86]],"v":[[-7,1.535],[-5,3.535],[5,3.535],[7,1.535]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[1.66,-1.66],[0,0],[0,0]],"o":[[0,0],[0,0],[-1.65,-1.66]],"v":[[-3,5.535],[0,8.535],[3,5.535]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[6.08,-6.07],[0,0],[-4.97,-4.97],[0,0]],"o":[[0,0],[4.97,-4.97],[0,0],[-6.07,-6.07]],"v":[[-11,-2.465],[-9,-0.465],[9,-0.465],[11,-2.465]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.3215686274509804,0.9176470588235294,0.7607843137254902,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12,11.465],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Settings Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,130,0],"ix":2},"a":{"a":0,"k":[95.067,95.067,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.116,0.116,0.667],"y":[1,1,1]},"o":{"x":[1,1,0.333],"y":[-0.004,-0.004,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":24,"s":[100,100,100]},{"t":29.0000011811942,"s":[90,90,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-52.366,0],[0,-52.366],[52.366,0],[0,52.366]],"o":[[52.366,0],[0,52.366],[-52.366,0],[0,-52.366]],"v":[[0,-94.817],[94.817,0],[0,94.817],[-94.817,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[95.067,95.067],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0}],"markers":[]}
})

const NoSavedDepartments = bodymovin.loadAnimation({
    container: document.getElementById('NoSavedDepartments'),
    animType:'svg',
    autoplay: false,
    loop: false,
    animationData:{"v":"5.5.9","fr":60,"ip":0,"op":295,"w":426,"h":290,"nm":"search_empty","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"mouth","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":44,"s":[211,145,0],"to":[0,0.667,0],"ti":[0,-0.667,0]},{"t":69,"s":[211,149,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":44,"s":[100,100,100]},{"t":68,"s":[105,105,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.5,0.25],[-1.715,0.372]],"o":[[-13.025,-6.512],[7.5,-1.625]],"v":[[-10,12.25],[-31.75,12.625]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.454901960784,0.513725490196,0.580392156863,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"汗","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":51,"s":[0]},{"t":95,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":51,"s":[248,95.252,0],"to":[0,1.5,0],"ti":[0,-1.5,0]},{"t":94,"s":[248,104.252,0]}],"ix":2},"a":{"a":0,"k":[0,-19.333,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":51,"s":[40,40,100]},{"t":95,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-9.94,0],[0,7.27],[0,0],[0,-7.27]],"o":[[9.94,0],[0,-7.27],[0,0],[0,7.27]],"v":[[0,19],[18,5.84],[0,-19],[-18,5.84]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.69,0.976,1,0.5,0.714,0.954,0.997,1,0.738,0.932,0.994],"ix":9}},"s":{"a":0,"k":[0.019,-9.236],"ix":5},"e":{"a":0,"k":[10.208,19],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"汗","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":569,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"eye","parent":1,"sr":1,"ks":{"o":{"a":0,"k":92,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-7.064,-11.347,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":3,"s":[100,20,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":6,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":9,"s":[100,20,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":12,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":50,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":53,"s":[100,20,100]},{"t":56,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[8.466,16.135],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.3411764705882353,0.3411764705882353,0.3411764705882353,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"eye","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":569,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"eye","parent":1,"sr":1,"ks":{"o":{"a":0,"k":92,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-33.767,-11.347,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":3,"s":[100,20,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":6,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":9,"s":[100,20,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":12,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":50,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":53,"s":[100,20,100]},{"t":56,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[8.466,16.135],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.3411764705882353,0.3411764705882353,0.3411764705882353,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"eye","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":569,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"magnifier","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[213,145,0],"ix":2},"a":{"a":0,"k":[213,145,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":426,"h":290,"ip":0,"op":569,"st":0,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[213,145,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"st","c":{"a":0,"k":[0.435294117647,0.498039215686,0.564705882353,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"橢圓形","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-5,"ix":10},"p":{"a":0,"k":[190.106,142.222,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[99.994,100.091],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-40,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"橢圓形","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"橢圓形","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-5,"ix":10},"p":{"a":0,"k":[192.013,142.223,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-26.81,22.62],[22.49,26.96],[26.8,-22.62],[-22.5,-26.95]],"o":[[26.81,-22.62],[-22.49,-26.96],[-26.81,22.62],[22.49,26.96]],"v":[[40.727,48.812],[48.537,-40.958],[-40.723,-48.808],[-48.533,40.952]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8588235294117647,0.8588235294117647,0.8588235294117647,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"橢圓形","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"矩形","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-5,"ix":10},"p":{"a":0,"k":[268.024,226.941,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[42.094,74.507],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":10,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5882352941176471,0.5882352941176471,0.5882352941176471,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-40,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"矩形","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"矩形","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-5,"ix":10},"p":{"a":0,"k":[238.933,197.25,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[24.446,44.702],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.847000002861,0.847000002861,0.847000002861,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-40,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"矩形","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0}]},{"id":"comp_2","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"合併形狀","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":60,"s":[0]},{"t":265,"s":[360]}],"ix":10},"p":{"a":0,"k":[208,27,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[16,2],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"rc","d":1,"s":{"a":0,"k":[2,18],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 2","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"mm","mm":2,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.796078026295,0.835294008255,0.843137025833,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"合併形狀","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"合併形狀","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[0]},{"t":358,"s":[360]}],"ix":10},"p":{"a":0,"k":[418,107,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[16,2],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"rc","d":1,"s":{"a":0,"k":[2,18],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 2","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"mm","mm":2,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.796078026295,0.835294008255,0.843137025833,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"合併形狀","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"合併形狀","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[0]},{"t":281,"s":[360]}],"ix":10},"p":{"a":0,"k":[31,196,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[16,2],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"rc","d":1,"s":{"a":0,"k":[2,18],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 2","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"mm","mm":2,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.796078026295,0.835294008255,0.843137025833,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"合併形狀","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"橢圓形","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":281,"s":[360]}],"ix":10},"p":{"a":0,"k":[70,33,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[24,24],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.701960980892,0.756862998009,0.776471018791,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"橢圓形","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0}]},{"id":"comp_3","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"橢圓形","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[306,9,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[16,16],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.701960980892,0.756862998009,0.776471018791,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"橢圓形","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"橢圓形","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[376,179,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[16,16],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.701960980892,0.768626987934,0.776471018791,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"橢圓形","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"橢圓形","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[8,115,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[16,16],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.701960980892,0.768626987934,0.776471018791,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"橢圓形","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3600,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"shadow","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[191,145,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[70,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[50,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":60,"s":[70,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":90,"s":[50,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":120,"s":[70,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":150,"s":[50,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":180,"s":[70,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":210,"s":[50,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":240,"s":[70,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":270,"s":[50,100,100]},{"t":295,"s":[70,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[56.697,6.631],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.848757874732,0.861812935623,0.876608455882,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-9.651,124.815],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"main","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[213,145,0],"to":[0,0.833,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[213,150,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":60,"s":[213,145,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[213,150,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":120,"s":[213,145,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":150,"s":[213,150,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":180,"s":[213,145,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":210,"s":[213,150,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":240,"s":[213,145,0],"to":[0,0,0],"ti":[0,-0.833,0]},{"t":270,"s":[213,150,0]}],"ix":2},"a":{"a":0,"k":[213,145,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":426,"h":290,"ip":0,"op":3600,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"decoration1","refId":"comp_2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.981],"y":[1.128]},"o":{"x":[0.39],"y":[0.019]},"t":8,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":40,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":72,"s":[80]},{"t":73,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[213,289,0],"ix":2},"a":{"a":0,"k":[213,289,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.667],"y":[0.866,0.866,1]},"o":{"x":[0.37,0.37,0.333],"y":[-0.029,-0.029,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":40,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":72,"s":[80,80,100]},{"t":133,"s":[90,90,100]}],"ix":6}},"ao":0,"w":426,"h":290,"ip":0,"op":569,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"decoratio2","refId":"comp_3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":41,"s":[100]},{"t":72,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[211,291,0],"ix":2},"a":{"a":0,"k":[211,291,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":43,"s":[99.442,99.442,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":72,"s":[84.442,84.442,100]},{"t":133,"s":[90,90,100]}],"ix":6}},"ao":0,"w":426,"h":290,"ip":0,"op":569,"st":0,"bm":0}],"markers":[{"tm":180,"cm":"1","dr":0},{"tm":3600,"cm":"2","dr":0}]}
})


var mode;
//Go to Department list (1st screen menu -> 2nd screen) if user want to see Lessons
function GoToDepartments1(){

    document.querySelector('.containerS').classList.toggle('view-change');
    mode=0;
    //If List isnt filled desappear search 
    if($('#DepartmentsList li').length == 0){
        $('#myInput').hide();
        $('#listsSection').hide();
        NoConnection1.goToAndPlay(0,true);
    }else{
        $('#myInput').show();
        // $('#myInput2').show();
        $('#listsSection').show();
    }
  
  
}



//Go to saved Department list (1st screen menu -> 2nd screen) if users want to see time sche.
function GoToDepartments2(){
    document.querySelector('.containerS').classList.toggle('view-change');
    mode=1;

    if($('#DepartmentsList li').length == 0){
        $('#myInput').hide();
        $('#listsSection').hide();
        NoConnection1.goToAndPlay(0,true);
    }else{
        $('#myInput').show();
        $('#listsSection').show();
    }
}



//Close season bottomsheet
document.querySelector(".overlaySeason").addEventListener("click",e=>{
    $('#popupSeason2').animate({
        top: 1000
    });
    document.getElementById("popupSeason").classList.toggle("activeSeason");

})


var DepartmentsInfoTable;

function fillDepartments(id,Department){

    
    var db = null;
    db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
    });

    var tr_str = `<li class="button1" data-id="unsaved">
                                <div style="display:none">${id}</div>
                                <div class="DepartmentListTitle">${Department}</div>`
    db.executeSql("SELECT count(*) AS mycount FROM savedDepartmentsTable WHERE id=?", [id], function(rs) {
        if (rs.rows.item(0).mycount!=0) {
            //Remove
            tr_str=tr_str+`<div class="StarDiv" style="font-size:25px" ><i style='color:#E5AA5E' class='fas fa-star'></i></div>
            </li>`;
    
        } else {
            //ADD
            tr_str=tr_str+`<div class="StarDiv" style="font-size:25px" ><i class='far fa-star'></i></div>
            </li>`;                                    
        }
        $("#DepartmentsList").append(tr_str);

        //check if dark theme is ON
        if(localStorage.getItem("darkTheme") !== null){
            if(localStorage.getItem("darkTheme") == "on"){
                $('.button1').css({"background":"#525252","color":"#EFEFEF"});
            }else{
                $('.button1').css({"background":"rgb(231, 240, 240)","color":"#14A098"});
            }
        }
    }, function(error) {
        alert(error)
    });

}



function getDepartments(){

    var db = null;
    db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
    });

  // ================Ajax for Departments=======================
  let DB_DepartmentsArray = Array();
  $("#DepartmentsList").empty();
  $.ajax({
    type: 'GET',
    url: URL+"/FillDepartments.php",
    dataType: 'jsonp',
    jsonp:"callback",
    success: function (data) {
    
        for(var i=0; i<data.length; i++){
            fillDepartments(data[i].id,data[i].Department)
            DB_DepartmentsArray.push({
                id: data[i].id, 
                Department:  data[i].Department
            });
        }

        let SavedDepartmentsArray = Array();
        db.executeSql("SELECT *  FROM savedDepartmentsTable ", [], function(resultsSavedDepartment) {
            for(var i=0; i<resultsSavedDepartment.rows.length; i++){
                SavedDepartmentsArray.push({
                    id: resultsSavedDepartment.rows.item(i).id, 
                    Department: resultsSavedDepartment.rows.item(i).Department
                });
            }

            for(var i=0; i<SavedDepartmentsArray.length; i++){

                // ----- Delete saved Departments with saved Lessons
                if(DB_DepartmentsArray.findIndex(DB_DepartmentsArray => DB_DepartmentsArray.id == SavedDepartmentsArray[i].id) == -1){
                    let NotificationText ="<i class='fas fa-exclamation-circle' style='font-weight:bold;font-size: x-large; '></i> Δεν υπάρχει ποια το Τμήμα <span class='oldItem' >"+SavedDepartmentsArray[i].Department+" <i class=fa fa-close></i></span>"
                    db.executeSql("CREATE TABLE IF NOT EXISTS  NotificationsTable (Notification)", [], function() {
                        db.executeSql("INSERT INTO NotificationsTable (Notification) VALUES (?)" ,[NotificationText], function() {
                                calculateNotifications();
                         }); 
                    });
                    db.executeSql("DELETE FROM savedDepartmentsTable WHERE id=?" ,[SavedDepartmentsArray[i].id], function() {}); 
                    db.executeSql("DELETE FROM savedLessonsTable WHERE Department=?" ,[SavedDepartmentsArray[i].Department], function() { });         
                }else{
                     // ----- Update saved Departments with saved Lessons
                    let index = DB_DepartmentsArray.findIndex(DB_DepartmentsArray => DB_DepartmentsArray.id == SavedDepartmentsArray[i].id)
                    if(SavedDepartmentsArray[i].Department != DB_DepartmentsArray[index].Department){
                        let NotificationText="<i class='fas fa-exclamation-circle' style='font-weight:bold;font-size: x-large; '></i> Το τμήμα <span class='oldItem'>"+SavedDepartmentsArray[i].Department + "</span> μετονομάστηκε σε <span class='newItem'>"+DB_DepartmentsArray[index].Department+" <i class='fa fa-check'></i></span>"
                        db.executeSql("CREATE TABLE IF NOT EXISTS  NotificationsTable (Notification)", [], function() {
                            db.executeSql("INSERT INTO NotificationsTable (Notification) VALUES (?)" ,[NotificationText], function() {
                                calculateNotifications();
                             }); 
                        });
                        db.executeSql("UPDATE savedDepartmentsTable SET Department=? WHERE id=?" ,[DB_DepartmentsArray[index].Department,SavedDepartmentsArray[i].id], function() {}); 
                        db.executeSql("UPDATE savedLessonsTable SET Department=? WHERE Department=?" ,[DB_DepartmentsArray[index].Department,SavedDepartmentsArray[i].Department], function() { }); 
                    }
                }
                
            }
            DB_DepartmentsArray = new Array();
            SavedDepartmentsArray = Array();
            
        });//end select 


    }//====End Success    
    });//===End AJAX
}



//When app is starting
document.addEventListener("deviceready", function() {


    // ==================== Fill Deaprtments Screen ======================
    getDepartments()

    //Calculate Notifications
    calculateNotifications();
    //================Ajax for ECTS/TotalExam//.. infos=======================
    $.ajax({
        type: 'GET',
        url: URL+"/DepartmentsAllInfos.php",
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

    db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
    });

     db.executeSql("SELECT *  FROM savedDepartmentsTable ", [], function(resultsDepartment) { 
        let Saved_Departments_Array=new Array();
        if(resultsDepartment.rows.length>0){

            for (var i=0; i<resultsDepartment.rows.length; i++){
                Saved_Departments_Array.push(resultsDepartment.rows.item(i).Department);
            }
            
            var jsonString = JSON.stringify(Saved_Departments_Array);

            var  DB_Lessons_id = new Array()
            
            $.ajax({
                type: 'GET',
                url: URL+"/FindAllLessonsIDs.php",
                data:{"SavedDepartments":jsonString},    
                dataType: 'jsonp',
                jsonp:"callback",
                success: function (data) {  
                    //fill array with online db lessons ID's
                    for(var i=0; i<data.length ;i++){

                        var DB_ids_JSON = new Array();
                        DB_ids_JSON= data[i];

                        for(var j=0; j<DB_ids_JSON.length ;j++){
                            let tmp_array=[DB_ids_JSON[j].id,DB_ids_JSON[j].Lesson]
                            DB_Lessons_id.push(tmp_array)

                        }

                    }
    
                    Check_Deleted_Updated_Lessons(Saved_Departments_Array,DB_Lessons_id);
                    
                },
                error: function (jqXHR, exception) {
                    var msg = '';
                    if (jqXHR.status === 0) {
                        msg = 'Not connect.\n Verify Network.';
                    } else if (jqXHR.status == 404) {
                        msg = 'Requested page not found. [404]';
                    } else if (jqXHR.status == 500) {
                        msg = 'Internal Server Error [500].';
                    } else if (exception === 'parsererror') {
                        msg = 'Requested JSON parse failed.';
                    } else if (exception === 'timeout') {
                        msg = 'Time out error.';
                    } else if (exception === 'abort') {
                        msg = 'Ajax request aborted.';
                    } else {
                        msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    }
                  alert(msg);
                },
            });//===End AJAX for delete/update lessons

        }// end if len>0

    });//end select 


}, false);


function Check_Deleted_Updated_Lessons(Saved_Departments_Array,DB_Lessons_id){

    db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
    });

  for (var k=0; k<Saved_Departments_Array.length; k++){

    let Saved_Departments_Array_Lesson=Saved_Departments_Array[k]

    db.executeSql("SELECT *  FROM savedLessonsTable WHERE Department='"+Saved_Departments_Array_Lesson+"' ", [], function(resultsLessons) {
        let localDB_Lessons_Array=new Array();

        for (var v=0; v<resultsLessons.rows.length; v++){
            let tmp_array=[resultsLessons.rows.item(v).id,resultsLessons.rows.item(v).Lesson]
            localDB_Lessons_Array.push(tmp_array)
        }


        //------------- check Deleted lesson from DB --------------
        const dif1 = arrayColumn(localDB_Lessons_Array, 0).diff(arrayColumn(DB_Lessons_id, 0));  

        for(var m=0; m<dif1.length ;m++){

            db.executeSql("SELECT id,Lesson,Department FROM savedLessonsTable WHERE id=?" ,[dif1[m]], function(result) { 
                let len = result.rows.length;
                for (var d=0; d<len; d++){
                    // alert("Create->"+len)
                    // alert("Δεν υπάρχει ποία το μάθημα <span class='oldItem' >"+result.rows.item(d).Lesson+"<i class=fa fa-close></i></span> του Τμήματος "+result.rows.item(d).Department)
                    // $("#NotificationsList").append("<li>Δεν υπάρχει ποία το μάθημα <span class='oldItem' >"+result.rows.item(d).Lesson+"<i class=fa fa-close></i></span> του Τμήματος "+result.rows.item(d).Department+"</li>");
                    let savedLesson = result.rows.item(d).Lesson
                    let savedLessonID =  result.rows.item(d).id
                    let savedLessonDepartment = result.rows.item(d).Department
                    db.executeSql("CREATE TABLE IF NOT EXISTS  NotificationsTable (Notification)", [], function() {
                        let NotificationText = "<i class='fas fa-exclamation-circle' style='font-weight:bold;font-size: x-large; '> Δεν υπάρχει ποία το μάθημα <span class='oldItem' >"+savedLesson+"<i class=fa fa-close></i></span> του Τμήματος: <b>"+savedLessonDepartment+"<b>";
                        db.executeSql("INSERT INTO NotificationsTable (Notification) VALUES (?)" ,[NotificationText], function() {
                             //Calculate Notifications
                            calculateNotifications();
                        });
                    });
                    db.executeSql("DELETE FROM savedLessonsTable WHERE id=?" ,[savedLessonID], function() { });                   
                }     
            });   
        }
        
   

        //------------- check Updated lesson from DB ----------------
        for(var p=0; p<localDB_Lessons_Array.length ;p++){            // id
            let index = arrayColumn(DB_Lessons_id, 0).findIndex(x => x == localDB_Lessons_Array[p][0])
          
            if(DB_Lessons_id[index][1] != localDB_Lessons_Array[p][1]){
                alert("upadte1")
                let oldLessonName = localDB_Lessons_Array[p][1];
                let newLessonName = DB_Lessons_id[index][1];
                let department = Saved_Departments_Array[k];
                db.executeSql("CREATE TABLE IF NOT EXISTS  NotificationsTable (Notification)", [], function() {
                    let NotificationText = "<i class='fas fa-exclamation-circle' style='font-weight:bold;font-size: x-large; '> Tο μάθημα  <span class='oldItem' >"+oldLessonName+"<i class=fa fa-close></i></span> μετονομάστηκε σε <span class='newItem'>"+newLessonName+"<i class='fa fa-check'></i></span> του Τμήματος: <b>"+department+"</b>";
                    db.executeSql("INSERT INTO NotificationsTable (Notification) VALUES (?)" ,[NotificationText], function() { 
                         //Calculate Notifications
                        calculateNotifications();
                    }); 
                });

                db.executeSql("UPDATE savedLessonsTable SET Lesson =? WHERE id=?" ,[DB_Lessons_id[index][1],localDB_Lessons_Array[p][0]], function() {  alert("upadte5") });   
            }
        }
        
  

    }, function(error) {
        alert(JSON.stringify(error))
    });


    return

}


}


//Get column of Array
const arrayColumn = (arr, n) => arr.map(x => x[n]);



 //function for finding the deference between two arrays
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};



//When app is starting check if dark theme is ON
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



//Press list to open Exam/Season bottomsheet
$('#DepartmentsList').on('click', 'li', function(event){
    var target = getEventTarget(event);

    const ul = document.querySelectorAll('#DepartmentsList li');
    for (let i = 0; i <= ul.length - 1; i++) {
        ul[i].className="button1";
    }

    db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
    });


    //if user press the name of a Department in List 
    if(target.className == "DepartmentListTitle"){
        target.parentElement.className="pressedButton";
        Department=target.innerHTML;
    
        //Saved pressed Department from list
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
            },"slow");
            document.getElementById("popupExamina").classList.toggle("activeExamina");
    
        }else{
            $('#popupSeason2').animate({
                top: "65%"
            }, "fast");
            document.getElementById("popupSeason").classList.toggle("activeSeason");
        }
    //if user press the container of star icon on List 
    }else if(target.className == "StarDiv"){
        

        if(target.parentElement.getAttribute("data-id") == "unsaved"){

            //save
            target.innerHTML="<i style='color:#E5AA5E' class='fas fa-star'></i>"
            target.parentElement.setAttribute("data-id", "saved");

            db.transaction(function(tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS savedDepartmentsTable (id, Department)');
            }, function(error) {
                alert("Create-1"+error)
            });

            let id =target.parentElement.children[0].innerHTML;
            let Department=target.parentElement.children[1].innerHTML

            db.transaction(function(tx) {
                tx.executeSql('INSERT INTO savedDepartmentsTable (id, Department) VALUES (?,?)', [id,Department]);
            }, function(error) {
                alert("Insert-1"+error)
            });
        }else{
            //delete
            target.innerHTML="<i class='far fa-star'></i>"
            target.parentElement.setAttribute("data-id", "unsaved");

            let id =target.parentElement.children[0].innerHTML;

            db.transaction(function(tx) {
                tx.executeSql("DELETE FROM savedDepartmentsTable  WHERE id='"+id+"'");
            }, function(error) {
                alert("Delete-1"+error)
            });
        }
    }else if(target.tagName=="I"){ //if user press the of Star icon on List  

        if(target.parentElement.parentElement.getAttribute("data-id") == "unsaved"){

            db.transaction(function(tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS savedDepartmentsTable (id, Department)');
            }, function(error) {
                alert("Create-2"+error)
            });

            let id =target.parentElement.parentElement.children[0].innerHTML;
            let Department=target.parentElement.parentElement.children[1].innerHTML

            db.transaction(function(tx) {
                tx.executeSql('INSERT INTO savedDepartmentsTable (id, Department) VALUES (?,?)', [id,Department]);
            }, function(error) {
                alert("Insert-2"+error)
            });

            //save
            target.parentElement.parentElement.setAttribute("data-id", "saved");
            target.parentElement.innerHTML="<i style='color:#E5AA5E' class='fas fa-star'></i>"
        }else{
           // delete

           let id = target.parentElement.parentElement.children[0].innerHTML;

           target.parentElement.parentElement.setAttribute("data-id", "unsaved");
           target.parentElement.innerHTML="<i class='far fa-star'></i>"  

           db.transaction(function(tx) {
               tx.executeSql("DELETE FROM savedDepartmentsTable  WHERE id='"+id+"'");
           }, function(error) {
            alert("Delete-2"+error)
           });
         
        }
    }

});



//Press list to open Exam/Season bottomsheet from saved Departments
$('#savedDepartmentsList').on('click', 'li', function(event){
    var target = getEventTarget(event);

    const ul = document.querySelectorAll('#DepartmentsList li');
    for (let i = 0; i <= ul.length - 1; i++) {
        ul[i].className="button1";
    }

    db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
    });


    //if user press the name of a Department in List 
    if(target.className == "DepartmentListTitle"){
        target.parentElement.className="pressedButton";
        Department=target.innerHTML;
    
        //Saved pressed Department from list
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
            },"slow");
            document.getElementById("popupExamina").classList.toggle("activeExamina");
    
        }else{
            $('#popupSeason2').animate({
                top: "65%"
            }, "fast");
            document.getElementById("popupSeason").classList.toggle("activeSeason");
        }
    //if user press the container of star icon on List 
    }else if(target.className == "StarDiv"){
        //delete

        //deleting <li> animation
        let id =target.parentElement.children[0].innerHTML;
        $( target.parentElement).animate({
            opacity: '0'
        },600);

        setTimeout(function() {
            target.parentElement.remove();
             //animation if list size = 0
            if($('#savedDepartmentsList li').length == 0){
                $("#NoSavedDepartmentDiv").show()
                NoSavedDepartments.goToAndPlay(0,true);
                //disable search bar
                $("#myInput").prop('disabled', true);
            }
        }, 400);

       
        db.transaction(function(tx) {
            tx.executeSql("DELETE FROM savedDepartmentsTable  WHERE id='"+id+"'");
          
        }, function(error) {
            alert("-2"+error)
        });
    }else if(target.tagName=="I"){ //if user press the of Star icon on List  
        // delete
        //deleting <li> animation
        let id = target.parentElement.parentElement.children[0].innerHTML;
        $( target.parentElement.parentElement).animate({
            opacity: '0'
        },600);

        setTimeout(function() {
            target.parentElement.parentElement.remove();
             //animation if list size = 0
             if($('#savedDepartmentsList li').length == 0){
                $("#NoSavedDepartmentDiv").show()
                NoSavedDepartments.goToAndPlay(0,true);
                //disable search bar
                $("#myInput").prop('disabled', true);
            }
        }, 400);

        db.transaction(function(tx) {
            tx.executeSql("DELETE FROM savedDepartmentsTable  WHERE id='"+id+"'");
           
        }, function(error) {
        alert("-delete1"+error)
        });
    }

});


let searchBar1Container = ""
let searchBar2Container = ""
let listOfDepartments = "allDepartments"

//Go to Saved Departments List (List2)
$('#savedListButton').on('click', function(e){
    if($("#allListButton").attr("data-id") == "closed"){
        $("#savedDepartmentsList").empty();
        document.querySelector('.containerForLists').classList.toggle('view-change3');
        $('#allListButton').css("color","#969696");
        $('#savedListButton').css("color","#14A098");
        $("#allListButton").attr("data-id","open");

        
        searchBar1Container = $("#myInput").val()
        $("#myInput").val(searchBar2Container)

        //mode for search bar
        listOfDepartments = "allDepartments"

        db = window.sqlitePlugin.openDatabase({
            name: 'my.db',
            location: 'default',
          });

        db.executeSql("SELECT *  FROM savedDepartmentsTable", [], function(results) {
            var len = results.rows.length;
            //check if user has any saved Department
            if(len == 0){
                //animation
                $("#NoSavedDepartmentDiv").show()
                NoSavedDepartments.goToAndPlay(0,true);
                 //disable search bar
                 $("#myInput").prop('disabled', true);
            }else{
                $("#NoSavedDepartmentDiv").hide()
            }

            for (var i=0; i<len; i++){
                var tr_str = `<li class="button1" data-id="unsaved">
                                <div style="display:none">${results.rows.item(i).id}</div>
                                <div class="DepartmentListTitle">${results.rows.item(i).Department}</div>
                                <div class="StarDiv" style="font-size:25px" ><i style='color:#E5AA5E' class='fas fa-star'></i></div>
                            </li>`;
                $("#savedDepartmentsList").append(tr_str);
            }
            //check if dark theme is ON
            if(localStorage.getItem("darkTheme") !== null){
                if(localStorage.getItem("darkTheme") == "on"){
                    $('.button1').css({"background":"#525252","color":"#EFEFEF"});
                }else{
                    $('.button1').css({"background":"rgb(231, 240, 240)","color":"#14A098"});
                }
            }

          }, function(error) {
            //animation
            $("#NoSavedDepartmentDiv").show()
            NoSavedDepartments.goToAndPlay(0,true);
          });
    }

  });

//Go to Departments List (List1)
$('#allListButton').on('click', function(e){
    if($("#allListButton").attr("data-id") == "open"){
        document.querySelector('.containerForLists').classList.toggle('view-change3');
        $('#savedListButton').css("color","#969696");
        $('#allListButton').css("color","#14A098");
        $("#allListButton").attr("data-id","closed")

        //mode for search bar
        listOfDepartments = "savedDepartments"

        searchBar2Container = $("#myInput").val()
        $("#myInput").val(searchBar1Container)
        $("#myInput").prop('disabled', false);
        getDepartments();
    }
});



//Close-bottomsheet-Examina
document.querySelector(".overlayExamina").addEventListener("click",e=>{

    $('#popupExamina2').animate({
        top: 10000
    });
    document.getElementById("popupExamina").classList.toggle("activeExamina");

    let ul = document.querySelectorAll('#DepartmentsList li');
    for (let i = 0; i <= ul.length - 1; i++) {
        ul[i].className="button1";
    }

    ul = document.querySelectorAll('#savedDepartmentsList li');
    for (let i = 0; i <= ul.length - 1; i++) {
        ul[i].className="button1";
    }
    
})




//Function for redirect user to URL
function redirectToPDF(Season1){
    $('#popupSeason2').animate({
        top: 1000
    });
    document.getElementById("popupSeason").classList.toggle("activeSeason");


    var Department=document.getElementById("HiddenDepartment").innerHTML;
    var link
    var today = new Date();
    var month = String(today.getMonth() + 1).padStart(2, '0');
    if(month=="03" ||  month=="04" || month=="05" || month=="06" || month=="07"){
        if(Season1=="Summer"){

            for(var i=0;i<DepartmentsInfoTable.length;i++){
                if(DepartmentsInfoTable[i][0] == Department){
                    if(DepartmentsInfoTable[i][2] != "-"){
                        link = DepartmentsInfoTable[i][2]
                        window.location = link;
                    }else{
                        $('#alertText').html("Δεν είναι διαθέσιμο το συγκεκριμένο Ωρολόγιο. Πρόγραμμα")
                        document.getElementById("Alert-1").classList.toggle("activeAlert");
                        warningAnimation1.goToAndPlay(0,true);
                    }
                   
                }  
            }
        }else{

            for(var i=0;i<DepartmentsInfoTable.length;i++){
                if(DepartmentsInfoTable[i][0] == Department){
                    if(DepartmentsInfoTable[i][5] != "-"){
                        link = URL+"/ThesisWebSite"+DepartmentsInfoTable[i][5].slice(2)
                        window.location = link;
                    }else{
                        $('#alertText').html("Δεν είναι διαθέσιμο το συγκεκριμένο Ωρολόγιο Πρόγραμμα")
                        document.getElementById("Alert-1").classList.toggle("activeAlert");
                        warningAnimation1.goToAndPlay(0,true);
                    }
                }  
            }
        }
    }else{
        if(Season1=="Winter"){

            for(var i=0;i<DepartmentsInfoTable.length;i++){
                if(DepartmentsInfoTable[i][0] == Department){
                    if(DepartmentsInfoTable[i][2] !="-"){
                        link =DepartmentsInfoTable[i][2]
                        window.location = link;
                    }else{
                        $('#alertText').html("Δεν είναι διαθέσιμο το συγκεκριμένο Ωρολόγιο. Πρόγραμμα")
                        document.getElementById("Alert-1").classList.toggle("activeAlert");
                        warningAnimation1.goToAndPlay(0,true);
                    }
                }  
            }
        }else{

            for(var i=0;i<DepartmentsInfoTable.length;i++){
                if(DepartmentsInfoTable[i][0] == Department){
                    if(DepartmentsInfoTable[i][4] !="-"){
                        // window.location = DepartmentsInfoTable[i][4];
                        link = URL+"/ThesisWebSite"+DepartmentsInfoTable[i][4].slice(2)
                        window.location = link;
                    }else{
                        $('#alertText').html("Δεν είναι διαθέσιμο το συγκεκριμένο Ωρολόγιο. Πρόγραμμα")
                        document.getElementById("Alert-1").classList.toggle("activeAlert");
                        warningAnimation1.goToAndPlay(0,true);
                    }
                }  
            }
        }
    }
}



//Download Lessons in lessons screen(3rd)
function aJaxCall(examino){

    
    // device went offline
    var networkState = navigator.connection.type; 
    //=========================== Animation for No Network ====================
    if(networkState == "none"){
        NoConnection2.goToAndPlay(0,true);
    }
    //====================================================

    //Get pressed Department
    var Department = document.getElementById("HiddenDepartment").innerHTML;
    
    document.getElementById("HiddenExam").innerHTML=examino;                            //<<<<<<===================Examino

    $("#tableBodyId").empty();  //<<=====clear table from 'Nothing'
    
    //----------Close Exam bottomsheet----------
    $('#popupExamina2').animate({
        top: 10000
    });
    document.getElementById("popupExamina").classList.toggle("activeExamina");
    //--------------------------------

    //Go to Lessons screen (2nd screen -> 3rd screen)
    document.querySelector('.containerS').classList.toggle('view-change2');

    $.ajax({
        type: 'GET',
        url: URL+"/FindLessons.php",
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

        }, error: function (jqXHR, exception) {
            NoConnection2.goToAndPlay(0,true);
        },
    });//===End AJAX

    //Save 'ECTS' for Departmnet its time
     for(var i=0;i<DepartmentsInfoTable.length;i++){
        if(DepartmentsInfoTable[i][0] == Department){
            document.getElementById("HiddenECTS").innerHTML = DepartmentsInfoTable[i][1]
        }  
    }

    //Put 'Infos' in infos div on saved lessonns 4rd screen
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


//Fill its row of lessons table with items
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
        // var flag = false;
        db.executeSql("SELECT count(*) AS mycount FROM savedLessonsTable WHERE id=?", [id], function(rs) {
          
            var tr_str = 
            "<tr data-id='mainTr' class='spaceUnder'>" +
                "<td  width='80%'  data-id='closed'><p class='lessonText' >" +Lesson + "</p></td>" ;     //<<<=====0
            if (rs.rows.item(0).mycount!=0) {
                //Remove
                tr_str=tr_str+"<td  width='20%'  ><div class='buttonDiv'><button class='removeFromArray' data-id="+id+"><i class='far fa-trash-alt'></i></button></div></td>" 
                updateLesson(id,Lesson,ECTS,Direction,Examino)
            } else {
                //ADD
                tr_str=tr_str+`<td  width='20%'  ><div class='buttonDiv' ><button class='addToList' data-id=`+id+`> <i class='fas fa-plus'></i> </button></div></td>`;
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
                //dark theme
                if(darkTheme == true){
                    $('#userTable tr').each(function() {
                        $(this).find("td").find("p").css({"background":"#525252","color":"#EFEFEF"});
                        $(this).find("td").next().find("div").css({"background":"#525252","color":"#EFEFEF"});
                    });
                }else{
                    $('#userTable tr').each(function() {
                        $(this).find("td").find("p").css({"background":"#E7F0F0","color":"#black"});
                        $(this).find("td").next().find("div").css({"background":"#E7F0F0"});
                    });
                }
                //make ordering with by Direction
                formLessonsTable();
                // $("#userTable").removeAttr( 'style' );
                // $("#userTable").attr( 'style' ,'width:100%');
            }

        }, function(error) { //Otan tha apothikeusei kati o xristis PRWTI fora
           
            var tr_str = 
            "<tr data-id='mainTr' class='spaceUnder'>" +
                "<td  width='80%'  data-id='closed'><p class='lessonText' >" +Lesson + "</p></td>" ;     //<<<=====0
            //ADD
            tr_str=tr_str+`<td  width='20%'  ><div class='buttonDiv' ><button class='addToList' data-id=`+id+`> <i class='fas fa-plus'></i> </button></div></td>`;
            tr_str=tr_str+ 
                "<td  width='0%' class='hidden'>" +ECTS + "</td>" +     //<<<=====2
                "<td  width='0%' class='hidden'>" +changeZero(Examino) + "</td>"+ //<<<=====3
                "<td  width='0%' class='hidden'>" +Infos + "</td>" +         //<<<=====4
                "<td  width='0%' class='hidden'>" +Direction + "</td>" +         //<<<=====5
                "<td  width='0%' class='hidden'>" +changeOperators(Required) + "</td>" +              //<<<=====6
            "</tr>"
            $("#userTable tbody").append(tr_str);
                

            if(i==len-1){
                 //dark theme
                 if(darkTheme == true){
                    $('#userTable tr').each(function() {
                        $(this).find("td").find("p").css({"background":"#525252","color":"#EFEFEF"});
                        $(this).find("td").next().find("div").css({"background":"#525252","color":"#EFEFEF"});
                    });
                }else{
                    $('#userTable tr').each(function() {
                        // $(this).find("td").css({"background":"#E7F0F0","color":"black"});
                        $(this).find("td").find("p").css({"background":"#E7F0F0","color":"#black"});
                        $(this).find("td").next().find("div").css({"background":"#E7F0F0"});
                    });
                }
                //make ordering with by Direction
                formLessonsTable();
                // $("#userTable").removeAttr( 'style' );
                // $("#userTable").attr( 'style' ,'width:100%');
            }
          
        });    
       
}//===End fillLessonsTable


//Update saved Lesson that sees user
function updateLesson(id,Lesson,ECTS,Direction,Examino){
    var db = null;
    db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
    });
    var Department = document.getElementById("HiddenDepartment").innerHTML; 

    db.executeSql("SELECT * FROM savedLessonsTable WHERE id=?", [id], function(result) {

        for (var i=0; i<result.rows.length; i++){
            if(result.rows.item(i).Lesson != Lesson){
                db.executeSql("UPDATE savedLessonsTable SET Lesson = ? , Examino =?, ECTS = ?,Department = ?, Direction = ? WHERE id=?", [Lesson,Examino,ECTS,Department,Direction,id], function(rs) {}); 
            }
        } 

    }); 
}

//Exam:   1/9/0 -> 1 9 10
function changeZero(Examino){
    var tmpExamino;
    if(Examino.includes("0")){
        tmpExamino = Examino.replace("0","10");
    }else{                                                   
        tmpExamino= Examino 
    }

    if(tmpExamino.includes("/")){
        tmpExamino = tmpExamino.replace(/\//g,"ο ");
    }
    return tmpExamino;
}

//Required A && B -> A KAI B
function changeOperators(Required){
    var tmpRequired = Required;
    if(Required.includes("||")){
        tmpRequired = Required.replace(/\|\|/g,"`H"); //<====Aggliko H
        if(tmpRequired.includes("&&")){
            tmpRequired = tmpRequired.replaceAll("&&","KAI");       //<====Aggliko KAI
        }
    }
    if(tmpRequired.includes("&&")){
        tmpRequired = tmpRequired.replaceAll("&&","KAI");
        if(tmpRequired.includes("||")){
            tmpRequired = tmpRequired.replaceAll("||","`H");
        }
    }
    return tmpRequired;
}

         
//Make slided table for more infos in lessons table    
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


//Make ordering of table lessons
function formLessonsTable() {
    
    var table =$('#userTable').DataTable({
        destroy : true,
        "deferRender": true,
        "destroy": true,
        "retrieve": false,
        "paging":   false,              
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




//Open/close more infos in lessons table
$('#userTable tbody').on('click', 'td', function(e){
    var table =$('#userTable').DataTable();
    var tr = $(this).closest('tr');
    var row = table.row( tr );

   if(tr.attr("data-id")=="mainTr"){
  
        if($(this).closest("td").index()==0){
         
            if ( $(this).attr("data-id") == "closed" ) {
               
                // $(this).find("span").html("<i class='fas fa-chevron-up' style='transform: scale(2.5,0.5)'></i>");
                $(this).css("border-bottom-left-radius","0px");
                $(this).next().css("border-bottom-right-radius","0px");
                // alert($(this).prop("tagName"))
                row.child(format(row.data())).show();
                tr.next().find("div").slideToggle();
                $(this).attr('data-id','open');
                $(this).parent().next().css("box-shadow","none");
            }else{
             
                $(this).delay(450)
                .queue(function (next) { 
                    $(this).css("border-bottom-left-radius","10px");
                    next(); 
                });

                $(this).next().delay(450)
                .queue(function (next) { 
                    $(this).css("border-bottom-right-radius","10px");
                    next(); 
                });

                tr.next().find("div").slideUp();
                $(this).attr('data-id','closed');
                $(this).css("overflow","hidden");
                // $(this).find("span").html("<i class='fas fa-chevron-down' style='transform: scale(2.5,0.5)'></i>");
                setTimeout(function() {
                    row.child.hide(); 
                }, 500);
            }
           
        }
    }else{     

    //$(this).parent().parent().parent().parent().parent().parent().parent().find("tr").slideToggle("slow");

        $(this).find("div").slideUp();
        $(this).find("div").parent().parent().prev().children().attr('data-id','closed');

        $(this).find("div").parent().parent().prev().children().eq(0).delay(450)
        .queue(function (next) { 
            $(this).css("border-bottom-left-radius","10px");
          
        });
        $(this).find("div").parent().parent().prev().children().eq(1).delay(450)
        .queue(function (next) { 
            $(this).css("border-bottom-right-radius","10px");
            next(); 
        });

        var tr =  $(this).find("div").parent().parent().prev();
        var row = table.row( tr );
        setTimeout(function() {
            row.child.hide(); 
        }, 500);

    }

});


//========================https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list=================================
//Search Department in 2nd screen
function searchFunc() {
    if(listOfDepartments == "allDepartments"){
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("DepartmentsList");
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
    }else{
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("savedDepartmentsList");
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
  
}






     




