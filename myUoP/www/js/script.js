
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
      setTimeout(function() {
        $('#svg__No_Connection').remove()
      }, 500);
     
}




var mode;
//Go to Department list (1st screen menu -> 2nd screen) Lessons path
function GoToDepartments1(){

    document.querySelector('.containerS').classList.toggle('view-change');
    mode=0;
    //If List isnt filled desappear search 
    if($('#myUL li').length == 0){
        // $('#svg__No_Connection').hide();
        $('#GroupOfButtons').append("<div id='svg__No_Connection' class='lottie' style='display: none'></div>");
        $('#svg__No_Connection').show();
        $('#myInput').hide();
        const animationInline = bodymovin.loadAnimation({
            container: document.getElementById('svg__No_Connection'),
            autoplay: true,
            renderer: 'svg',
            loop: false,
            animationData:{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":""},"fr":29.9700012207031,"ip":0,"op":61.0000024845809,"w":260,"h":260,"nm":"Not Done","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[131,130,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[-0.137,-0.137,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":4,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[28.416,28.416,0]},"t":24,"s":[100,100,100]},{"t":29.0000011811942,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[153.888,72.281]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.00784313725490196,0.06274509803921569,0.18823529411764706,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2901960784313726,0.5647058823529412,0.8862745098039215,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-35.743,34.684],[34.684,-35.743]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.00784313725490196,0.06274509803921569,0.18823529411764706,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2901960784313726,0.2901960784313726,0.2901960784313726,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24,"s":[100]},{"t":29.0000011811942,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"wifi_black_24dp1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,130,0],"ix":2},"a":{"a":0,"k":[12,12,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[0.763,0.763,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":4,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[-0.816,-0.816,0]},"t":24,"s":[478.824,478.824,100]},{"t":29.0000011811942,"s":[444,444,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.87,-3.86],[0,0],[-2.76,-2.76],[0,0]],"o":[[0,0],[2.76,-2.76],[0,0],[-3.86,-3.86]],"v":[[-7,1.535],[-5,3.535],[5,3.535],[7,1.535]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[1.66,-1.66],[0,0],[0,0]],"o":[[0,0],[0,0],[-1.65,-1.66]],"v":[[-3,5.535],[0,8.535],[3,5.535]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[6.08,-6.07],[0,0],[-4.97,-4.97],[0,0]],"o":[[0,0],[4.97,-4.97],[0,0],[-6.07,-6.07]],"v":[[-11,-2.465],[-9,-0.465],[9,-0.465],[11,-2.465]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.3215686274509804,0.9176470588235294,0.7607843137254902,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12,11.465],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Settings Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,130,0],"ix":2},"a":{"a":0,"k":[95.067,95.067,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.116,0.116,0.667],"y":[1,1,1]},"o":{"x":[1,1,0.333],"y":[-0.004,-0.004,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":24,"s":[100,100,100]},{"t":29.0000011811942,"s":[90,90,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-52.366,0],[0,-52.366],[52.366,0],[0,52.366]],"o":[[52.366,0],[0,52.366],[-52.366,0],[0,-52.366]],"v":[[0,-94.817],[94.817,0],[0,94.817],[-94.817,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[95.067,95.067],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0}],"markers":[]}
        })
    }else{
        $('#myInput').show();
        $('#svg__No_Connection').hide();
    }
  
  
}



//Go to Department list (1st screen menu -> 2nd screen) Tome Sh. path
function GoToDepartments2(){
    document.querySelector('.containerS').classList.toggle('view-change');
    mode=1;

    if($('#myUL li').length == 0){
        // $('#svg__No_Connection').hide();
        $('#GroupOfButtons').append("<div id='svg__No_Connection' class='lottie' style='display: none'></div>");
        $('#svg__No_Connection').show();
        $('#myInput').hide();
        const animationInline = bodymovin.loadAnimation({
            container: document.getElementById('svg__No_Connection'),
            autoplay: true,
            renderer: 'svg',
            loop: false,
            animationData:{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":""},"fr":29.9700012207031,"ip":0,"op":61.0000024845809,"w":260,"h":260,"nm":"Not Done","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[131,130,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[-0.137,-0.137,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":4,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[28.416,28.416,0]},"t":24,"s":[100,100,100]},{"t":29.0000011811942,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[153.888,72.281]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.00784313725490196,0.06274509803921569,0.18823529411764706,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2901960784313726,0.5647058823529412,0.8862745098039215,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-35.743,34.684],[34.684,-35.743]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.00784313725490196,0.06274509803921569,0.18823529411764706,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2901960784313726,0.2901960784313726,0.2901960784313726,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24,"s":[100]},{"t":29.0000011811942,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"wifi_black_24dp1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,130,0],"ix":2},"a":{"a":0,"k":[12,12,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[0.763,0.763,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":4,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[-0.816,-0.816,0]},"t":24,"s":[478.824,478.824,100]},{"t":29.0000011811942,"s":[444,444,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.87,-3.86],[0,0],[-2.76,-2.76],[0,0]],"o":[[0,0],[2.76,-2.76],[0,0],[-3.86,-3.86]],"v":[[-7,1.535],[-5,3.535],[5,3.535],[7,1.535]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[1.66,-1.66],[0,0],[0,0]],"o":[[0,0],[0,0],[-1.65,-1.66]],"v":[[-3,5.535],[0,8.535],[3,5.535]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[6.08,-6.07],[0,0],[-4.97,-4.97],[0,0]],"o":[[0,0],[4.97,-4.97],[0,0],[-6.07,-6.07]],"v":[[-11,-2.465],[-9,-0.465],[9,-0.465],[11,-2.465]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.3215686274509804,0.9176470588235294,0.7607843137254902,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12,11.465],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Settings Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,130,0],"ix":2},"a":{"a":0,"k":[95.067,95.067,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.116,0.116,0.667],"y":[1,1,1]},"o":{"x":[1,1,0.333],"y":[-0.004,-0.004,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":24,"s":[100,100,100]},{"t":29.0000011811942,"s":[90,90,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-52.366,0],[0,-52.366],[52.366,0],[0,52.366]],"o":[[52.366,0],[0,52.366],[-52.366,0],[0,-52.366]],"v":[[0,-94.817],[94.817,0],[0,94.817],[-94.817,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[95.067,95.067],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0}],"markers":[]}
        })
    }else{
        $('#myInput').show();
        $('#svg__No_Connection').hide();
    }
}



//Close season bottomsheet
document.querySelector(".overlaySeason").addEventListener("click",e=>{
    $('#popupSeason2').animate({
        top: 1000
    });
    document.getElementById("popupSeason").classList.toggle("activeSeason");

})







// setInterval(function() {
//     if($('#myUL li').length != 0){
//         // document.getElementById("loading1").className="loader1 hidden"
//         $('#svg__No_Connection').hide();
//     }
//     else{
//         // document.getElementById("loading1").className="loader1 show"
//         $('#svg__No_Connection').show();
//     }

//     if( document.getElementById("tableBodyId").innerHTML != ""){
//         document.getElementById("loading2").className="loader2 hidden"
//     }
//     else{
//         document.getElementById("loading2").className="loader2 show"
       
//     }

   
// }, 1000); 



var DepartmentsInfoTable;


//When app is starting
document.addEventListener("deviceready", function() {

   // ================Ajax for Departments=======================
    $.ajax({
        type: 'GET',
        url: URL+"/FindDepartment.php",
        dataType: 'jsonp',
        jsonp:"callback",
        success: function (data) {
        
            var len = data.length;

            for(var i=0; i<len; i++){
                Department=data[i].Department;
                var tr_str = `<li class="button1" >${Department}</li>`;
                $("#myUL").append(tr_str);

            }
        }//====End Success    
    });//===End AJAX


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

    var DBidsArray = new Array()
     //================Ajax for all lessons IDs in online db=======================
     $.ajax({
        type: 'GET',
        url: URL+"/FindAllIDs.php",
        dataType: 'jsonp',
        jsonp:"callback",
        success: function (data) { 

            //fill array with online db lessons ID's
            for(var i=0; i<data.length ;i++){
                DBidsArray.push(data[i].id)
            }

            var localDBidsArray = new Array();
            db.executeSql("SELECT *  FROM savedLessonsTable ", [], function(results) { 

                 //fill array with local db lessons ID's
                for (var i=0; i<results.rows.length; i++){
                    localDBidsArray.push(results.rows.item(i).id)
                }
              
                //find the defernce between those two arrays
                const dif1 = localDBidsArray.diff(DBidsArray );  
              
                 //delete the defernces of those two arrays
                for(var i=0; i<dif1.length ;i++){
                    db.executeSql("DELETE FROM savedLessonsTable WHERE id=?", [dif1[i]], function(results) { 
                       
                    });
                }
            });

        }//====End success
    });//===End AJAX


}, false);


 //function for finding the defernce between two arrays
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
$('#myUL').on('click', 'li', function(event){
    var target = getEventTarget(event);

    const ul = document.querySelectorAll('#myUL li');
    for (let i = 0; i <= ul.length - 1; i++) {
        ul[i].className="button1";
    }

    target.className="pressedButton";
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
});








//Close-bottomsheet-Examina
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
                        $('.warningSection1').append('<div id="svg__Warning" class="lottie" ></div>');
                        const animationInline2 = bodymovin.loadAnimation({
                            container: document.getElementById('svg__Warning'),
                            autoplay: true,
                            renderer: 'svg',
                            loop: false,
                            animationData: {"v":"5.6.5","fr":30,"ip":0,"op":30,"w":400,"h":400,"nm":"Error","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"POINT","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,269.5,0],"ix":2},"a":{"a":0,"k":[0,70,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.585,0.585,0.585],"y":[0.754,0.754,-28.504]},"o":{"x":[0.178,0.178,0.178],"y":[0,0,0]},"t":16,"s":[0,0,100]},{"i":{"x":[0.701,0.701,0.701],"y":[1,1,1]},"o":{"x":[0.348,0.348,0.348],"y":[-1.651,-1.651,33.01]},"t":19,"s":[120,120,100]},{"t":23.0000009368092,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[400,400],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,70.168],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[8.39,8.39],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":1.00000004073083,"op":901.000036698482,"st":1.00000004073083,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Ex","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200.27500000000003,202.99999999999997,0],"ix":2},"a":{"a":0,"k":[6,-16,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-31.833]],"o":[[0,0],[0,0]],"v":[[6,-96],[6,-0.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":32,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[90.821,90.821],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[0]},{"t":16.0000006516934,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":1.00000004073083,"op":901.000036698482,"st":1.00000004073083,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"MAIN 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":6,"s":[114.99999999999999,114.99999999999999,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":12,"s":[85,85,100]},{"t":16.0000006516934,"s":[90,90,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[400,400],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[72.319,72.319],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"RAY 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[-20,2,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-158.5,2.25],[-191.75,2.25]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[0]},{"t":18.000000733155,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":4,"s":[0]},{"t":9.00000036657752,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"rp","c":{"a":0,"k":8,"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":3,"tr":{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[-20,3],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-45,"ix":4},"so":{"a":0,"k":100,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transform"},"nm":"Repeater 1","mn":"ADBE Vector Filter - Repeater","hd":false}],"ip":-3.00000012219251,"op":897.000036535559,"st":-3.00000012219251,"bm":0}],"markers":[]}
                        })
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
                        $('.warningSection1').append('<div id="svg__Warning" class="lottie" ></div>');
                        const animationInline2 = bodymovin.loadAnimation({
                            container: document.getElementById('svg__Warning'),
                            autoplay: true,
                            renderer: 'svg',
                            loop: false,
                            animationData: {"v":"5.6.5","fr":30,"ip":0,"op":30,"w":400,"h":400,"nm":"Error","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"POINT","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,269.5,0],"ix":2},"a":{"a":0,"k":[0,70,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.585,0.585,0.585],"y":[0.754,0.754,-28.504]},"o":{"x":[0.178,0.178,0.178],"y":[0,0,0]},"t":16,"s":[0,0,100]},{"i":{"x":[0.701,0.701,0.701],"y":[1,1,1]},"o":{"x":[0.348,0.348,0.348],"y":[-1.651,-1.651,33.01]},"t":19,"s":[120,120,100]},{"t":23.0000009368092,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[400,400],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,70.168],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[8.39,8.39],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":1.00000004073083,"op":901.000036698482,"st":1.00000004073083,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Ex","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200.27500000000003,202.99999999999997,0],"ix":2},"a":{"a":0,"k":[6,-16,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-31.833]],"o":[[0,0],[0,0]],"v":[[6,-96],[6,-0.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":32,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[90.821,90.821],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[0]},{"t":16.0000006516934,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":1.00000004073083,"op":901.000036698482,"st":1.00000004073083,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"MAIN 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":6,"s":[114.99999999999999,114.99999999999999,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":12,"s":[85,85,100]},{"t":16.0000006516934,"s":[90,90,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[400,400],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[72.319,72.319],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"RAY 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[-20,2,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-158.5,2.25],[-191.75,2.25]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[0]},{"t":18.000000733155,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":4,"s":[0]},{"t":9.00000036657752,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"rp","c":{"a":0,"k":8,"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":3,"tr":{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[-20,3],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-45,"ix":4},"so":{"a":0,"k":100,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transform"},"nm":"Repeater 1","mn":"ADBE Vector Filter - Repeater","hd":false}],"ip":-3.00000012219251,"op":897.000036535559,"st":-3.00000012219251,"bm":0}],"markers":[]}
                        })
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
                        $('.warningSection1').append('<div id="svg__Warning" class="lottie" ></div>');
                        const animationInline2 = bodymovin.loadAnimation({
                            container: document.getElementById('svg__Warning'),
                            autoplay: true,
                            renderer: 'svg',
                            loop: false,
                            animationData: {"v":"5.6.5","fr":30,"ip":0,"op":30,"w":400,"h":400,"nm":"Error","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"POINT","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,269.5,0],"ix":2},"a":{"a":0,"k":[0,70,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.585,0.585,0.585],"y":[0.754,0.754,-28.504]},"o":{"x":[0.178,0.178,0.178],"y":[0,0,0]},"t":16,"s":[0,0,100]},{"i":{"x":[0.701,0.701,0.701],"y":[1,1,1]},"o":{"x":[0.348,0.348,0.348],"y":[-1.651,-1.651,33.01]},"t":19,"s":[120,120,100]},{"t":23.0000009368092,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[400,400],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,70.168],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[8.39,8.39],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":1.00000004073083,"op":901.000036698482,"st":1.00000004073083,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Ex","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200.27500000000003,202.99999999999997,0],"ix":2},"a":{"a":0,"k":[6,-16,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-31.833]],"o":[[0,0],[0,0]],"v":[[6,-96],[6,-0.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":32,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[90.821,90.821],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[0]},{"t":16.0000006516934,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":1.00000004073083,"op":901.000036698482,"st":1.00000004073083,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"MAIN 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":6,"s":[114.99999999999999,114.99999999999999,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":12,"s":[85,85,100]},{"t":16.0000006516934,"s":[90,90,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[400,400],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[72.319,72.319],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"RAY 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[-20,2,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-158.5,2.25],[-191.75,2.25]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[0]},{"t":18.000000733155,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":4,"s":[0]},{"t":9.00000036657752,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"rp","c":{"a":0,"k":8,"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":3,"tr":{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[-20,3],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-45,"ix":4},"so":{"a":0,"k":100,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transform"},"nm":"Repeater 1","mn":"ADBE Vector Filter - Repeater","hd":false}],"ip":-3.00000012219251,"op":897.000036535559,"st":-3.00000012219251,"bm":0}],"markers":[]}
                        })
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
                        $('.warningSection1').append('<div id="svg__Warning" class="lottie" ></div>');
                        const animationInline2 = bodymovin.loadAnimation({
                            container: document.getElementById('svg__Warning'),
                            autoplay: true,
                            renderer: 'svg',
                            loop: false,
                            animationData: {"v":"5.6.5","fr":30,"ip":0,"op":30,"w":400,"h":400,"nm":"Error","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"POINT","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,269.5,0],"ix":2},"a":{"a":0,"k":[0,70,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.585,0.585,0.585],"y":[0.754,0.754,-28.504]},"o":{"x":[0.178,0.178,0.178],"y":[0,0,0]},"t":16,"s":[0,0,100]},{"i":{"x":[0.701,0.701,0.701],"y":[1,1,1]},"o":{"x":[0.348,0.348,0.348],"y":[-1.651,-1.651,33.01]},"t":19,"s":[120,120,100]},{"t":23.0000009368092,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[400,400],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,70.168],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[8.39,8.39],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":1.00000004073083,"op":901.000036698482,"st":1.00000004073083,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Ex","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200.27500000000003,202.99999999999997,0],"ix":2},"a":{"a":0,"k":[6,-16,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-31.833]],"o":[[0,0],[0,0]],"v":[[6,-96],[6,-0.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":32,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[90.821,90.821],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[0]},{"t":16.0000006516934,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":1.00000004073083,"op":901.000036698482,"st":1.00000004073083,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"MAIN 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":6,"s":[114.99999999999999,114.99999999999999,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":12,"s":[85,85,100]},{"t":16.0000006516934,"s":[90,90,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[400,400],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[72.319,72.319],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"RAY 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[-20,2,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-158.5,2.25],[-191.75,2.25]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[0]},{"t":18.000000733155,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":4,"s":[0]},{"t":9.00000036657752,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"rp","c":{"a":0,"k":8,"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":3,"tr":{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[-20,3],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-45,"ix":4},"so":{"a":0,"k":100,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transform"},"nm":"Repeater 1","mn":"ADBE Vector Filter - Repeater","hd":false}],"ip":-3.00000012219251,"op":897.000036535559,"st":-3.00000012219251,"bm":0}],"markers":[]}
                        })
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
        $('#noConnAnim').append('<div id="svg__No_Connection2" class="lottie" ></div>');
        const animationInline2 = bodymovin.loadAnimation({
            container: document.getElementById('svg__No_Connection2'),
            autoplay: true,
            renderer: 'svg',
            loop: false,
            animationData:{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":""},"fr":29.9700012207031,"ip":0,"op":61.0000024845809,"w":260,"h":260,"nm":"Not Done","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[131,130,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[-0.137,-0.137,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":4,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[28.416,28.416,0]},"t":24,"s":[100,100,100]},{"t":29.0000011811942,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[153.888,72.281]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.00784313725490196,0.06274509803921569,0.18823529411764706,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2901960784313726,0.5647058823529412,0.8862745098039215,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-35.743,34.684],[34.684,-35.743]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.00784313725490196,0.06274509803921569,0.18823529411764706,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2901960784313726,0.2901960784313726,0.2901960784313726,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24,"s":[100]},{"t":29.0000011811942,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"wifi_black_24dp1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,130,0],"ix":2},"a":{"a":0,"k":[12,12,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[0.763,0.763,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":4,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[-0.816,-0.816,0]},"t":24,"s":[478.824,478.824,100]},{"t":29.0000011811942,"s":[444,444,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.87,-3.86],[0,0],[-2.76,-2.76],[0,0]],"o":[[0,0],[2.76,-2.76],[0,0],[-3.86,-3.86]],"v":[[-7,1.535],[-5,3.535],[5,3.535],[7,1.535]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[1.66,-1.66],[0,0],[0,0]],"o":[[0,0],[0,0],[-1.65,-1.66]],"v":[[-3,5.535],[0,8.535],[3,5.535]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[6.08,-6.07],[0,0],[-4.97,-4.97],[0,0]],"o":[[0,0],[4.97,-4.97],[0,0],[-6.07,-6.07]],"v":[[-11,-2.465],[-9,-0.465],[9,-0.465],[11,-2.465]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.3215686274509804,0.9176470588235294,0.7607843137254902,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12,11.465],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Settings Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,130,0],"ix":2},"a":{"a":0,"k":[95.067,95.067,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.116,0.116,0.667],"y":[1,1,1]},"o":{"x":[1,1,0.333],"y":[-0.004,-0.004,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":24,"s":[100,100,100]},{"t":29.0000011811942,"s":[90,90,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-52.366,0],[0,-52.366],[52.366,0],[0,52.366]],"o":[[52.366,0],[0,52.366],[-52.366,0],[0,-52.366]],"v":[[0,-94.817],[94.817,0],[0,94.817],[-94.817,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[95.067,95.067],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0}],"markers":[]}
        })
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
            $('#noConnAnim').append('<div id="svg__No_Connection2" class="lottie" ></div>');
            const animationInline2 = bodymovin.loadAnimation({
                container: document.getElementById('svg__No_Connection2'),
                autoplay: true,
                renderer: 'svg',
                loop: false,
                animationData:{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":""},"fr":29.9700012207031,"ip":0,"op":61.0000024845809,"w":260,"h":260,"nm":"Not Done","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[131,130,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[-0.137,-0.137,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":4,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[28.416,28.416,0]},"t":24,"s":[100,100,100]},{"t":29.0000011811942,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[153.888,72.281]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.00784313725490196,0.06274509803921569,0.18823529411764706,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2901960784313726,0.5647058823529412,0.8862745098039215,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-35.743,34.684],[34.684,-35.743]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.00784313725490196,0.06274509803921569,0.18823529411764706,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.2901960784313726,0.2901960784313726,0.2901960784313726,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24,"s":[100]},{"t":29.0000011811942,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"wifi_black_24dp1 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,130,0],"ix":2},"a":{"a":0,"k":[12,12,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[0.763,0.763,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":4,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[-0.816,-0.816,0]},"t":24,"s":[478.824,478.824,100]},{"t":29.0000011811942,"s":[444,444,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.87,-3.86],[0,0],[-2.76,-2.76],[0,0]],"o":[[0,0],[2.76,-2.76],[0,0],[-3.86,-3.86]],"v":[[-7,1.535],[-5,3.535],[5,3.535],[7,1.535]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[1.66,-1.66],[0,0],[0,0]],"o":[[0,0],[0,0],[-1.65,-1.66]],"v":[[-3,5.535],[0,8.535],[3,5.535]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[6.08,-6.07],[0,0],[-4.97,-4.97],[0,0]],"o":[[0,0],[4.97,-4.97],[0,0],[-6.07,-6.07]],"v":[[-11,-2.465],[-9,-0.465],[9,-0.465],[11,-2.465]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.3215686274509804,0.9176470588235294,0.7607843137254902,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12,11.465],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Settings Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[130,130,0],"ix":2},"a":{"a":0,"k":[95.067,95.067,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.116,0.116,0.667],"y":[1,1,1]},"o":{"x":[1,1,0.333],"y":[-0.004,-0.004,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":24,"s":[100,100,100]},{"t":29.0000011811942,"s":[90,90,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-52.366,0],[0,-52.366],[52.366,0],[0,52.366]],"o":[[52.366,0],[0,52.366],[-52.366,0],[0,-52.366]],"v":[[0,-94.817],[94.817,0],[0,94.817],[-94.817,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[95.067,95.067],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":899.000036617021,"st":0,"bm":0}],"markers":[]}
            })
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
            "<tr data-id='mainTr'>" +
                "<td  width='80%' class='lessonInsideRows' data-id='closed'><p style='padding-left:5px;padding-right:10px; padding-top:5px; padding-bottom:5px;'>" +Lesson + "</p></td>" ;     //<<<=====0
            if (rs.rows.item(0).mycount!=0) {
                //Remove
                tr_str=tr_str+"<td  width='20%'  ><button class='removeFromArray' id='addButton' data-id="+id+"><i class='far fa-trash-alt'></i></button></td>" 
                updateLesson(id,Lesson,ECTS,Direction,Examino)
            } else {
                //ADD
                tr_str=tr_str+"<td  width='20%'  ><button class='addToList' id='addButton' data-id="+id+"><i class='fas fa-plus'></i></button></td>";
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
                        $(this).find("td").css({"background":"#525252","color":"#EFEFEF"});
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
            tr_str=tr_str+"<td  width='20%' id='aa' class='tmp' ><button class='addToList' id='addButton' data-id="+id+"><i class='fas fa-plus'></i></button></td>";        //<<===1
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


//Update saved Lesson that sees user
function updateLesson(id,Lesson,ECTS,Direction,Examino){
    var db = null;
    db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
    });
    var Department = document.getElementById("HiddenDepartment").innerHTML; 
    db.executeSql("UPDATE savedLessonsTable SET Lesson = ? , Examino =?, ECTS = ?,Department = ?, Direction = ? WHERE id=?", [Lesson,Examino,ECTS,Department,Direction,id], function(rs) {

    }, function(error) { 

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
//Search Department in 2nd screen
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






     




