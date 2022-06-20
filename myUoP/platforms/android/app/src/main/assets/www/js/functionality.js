
//Close portfolio screen (4rd screen)
function closePortfolio() {
  
  aJaxCall2(); 
  $('.popup2').animate({
    left: "-100%"
  });

  $('.content2').animate({
    left: "-100%"
  });

  $( ".single-skill" ).animate({
    top: "7%",
  }, 500 );
  $( "#DepartmentInfos" ).animate({
      top: "55%",
  }, 500 );
 

  setTimeout(function() {
  
    var table = $('#portfolioTable').DataTable();
        table.clear().destroy();
  }, 500);
  

}



(function() {
  // VARS
  const lessonsTable = document.querySelector("#userTable");              //---------Table with lessons
 
  const portfolioTableContent = document.querySelector("#portfolioTable");        //---table  in cart

  const clearPortfolioBtn = document.querySelector("#clearPortfolio");         //----Button for "Clear all"

  const openDiv = document.querySelector("#Array");         //----Button for Open popup

  //Open portfolio screen (4rd screen)
  openDiv.addEventListener("click", function(e) {
    if (e.target.classList.contains("PortfolioButton")) {

      $('.popup2').animate({
        left: "0%"
      });

      $('.content2').animate({
        left: "0%"
      });

    displayPortfolioTable();             

    displayTotal("OpenScreen");     

    setTimeout(function() {
      $('#svg__No_Connection2').remove();
    }, 500);
  
    }
  });




  //Go to second screen (3rd screen -> 2nd screen)
  $('.backButtonNavBar').on('click', function(e){
    document.querySelector('.containerS').classList.toggle('view-change2');
  
    setTimeout(function() {
    //your code to be executed after 1 second
    var table = $('#userTable').DataTable();
        table.clear().destroy();
    }, 500);
    setTimeout(function() {
      $('#svg__No_Connection2').remove();
    }, 500);
  });

 

  // tmimata.addEventListener("click", function(e) {
  //   alert("1111")
  //   if (e.target.classList.contains("button1")) {
      
  //     e.preventDefault();

  //     const tmp=e.target;
      
  //   }

  // });


//Open infos window on portfolio screen
  $('.single-skill').on('click', '.circle-chart', function(e){
    $( ".single-skill" ).animate({
        top: "55%",
    }, 500 );
    $( "#DepartmentInfos" ).animate({
        top: "11.5%",
    }, 500 );
   
});


//Close infos window on portfolio screen
$('#DepartmentInfos').on('click', function(e){
    $( ".single-skill" ).animate({
        top: "10%",
    }, 500 );
    $( "#DepartmentInfos" ).animate({
        top: "55%",
    }, 500 );
  
});

  


//Display saved lessons ECTS on progress 1circle 
  function displayTotal(str) {
    // display the total cost in the cart

     //+++++++++++++++++++++++++++++++++++++++++Create+++++++++++++++++++++++++++++++++++++
    var db = null;

    document.addEventListener('deviceready', function() {
      db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
      });
    });
         
   
    var total = 0;
    db.executeSql("SELECT ECTS FROM savedLessonsTable WHERE Department='"+document.getElementById("HiddenDepartment").innerHTML+"'", [], function(results) {
          var len = results.rows.length;
          
          for (var i=0; i<len; i++){
            total=total+parseFloat(results.rows.item(i).ECTS);
          } 

          var TotalMinECTS=document.getElementById("HiddenECTS").innerHTML;
          //-------Den borei n vgei ektos den vlepei to total--------
          if(str == "OpenScreen"){
              //totalPriceContainer.innerHTML = `<span class="total">ECTS: ${total}</span>`;
              var number1 =total;                                 
              var percentage =  Math.floor((number1 / TotalMinECTS) * 100);
              makeCircleAnimation(percentage,number1,TotalMinECTS,"0");
              animateCounter(total);

              if(total>0){
                $("#clearPortfolio").css("display", "block");
                $("#noSavedLesson").css("display", "none");
              }else{
                $("#clearPortfolio").css("display", "none");
                $("#noSavedLesson").css("display", "block");
              }
          }else{
              //totalPriceContainer.innerHTML = `<span class="total">ECTS: ${total}</span>`;
              var number1 =total;                          
              var percentage =  Math.floor((number1 / TotalMinECTS) * 100);
              makeCircleAnimation(percentage,number1,TotalMinECTS,"1")
              animateCounter(total);
              if(total>0){
                $("#clearPortfolio").css("display", "block");
                $("#noSavedLesson").css("display", "none");
              }else{
                $("#clearPortfolio").css("display", "none");
                $("#noSavedLesson").css("display", "block");
              } 
          }
    }, function(error) {
      var TotalMinECTS=document.getElementById("HiddenECTS").innerHTML;
      var percentage = 0;
      makeCircleAnimation(percentage,0,TotalMinECTS,"0");
      animateCounter(0);  
      $("#clearPortfolio").css("display", "none");
      $("#noSavedLesson").css("display", "block");
    });
    return total;
  }



//Animation for total saved ECTS 1->2->3...
function animateCounter(value1){

    const counter = document.getElementById('ECTSunits');
    const speed = 200;
    
    const animate = () => {
      const value = +value1 ;
      const data = +counter.innerHTML;

      const time = value / speed;
      if(data < value) {
            counter.innerHTML = Math.ceil(data + time);
            setTimeout(animate, 1);
      }else{
            counter.innerHTML = value;
      }
    }
        
    animate();
}
  

//Making cicle progress
function makeCircleAnimation(percentage,total,totalECTS,Status){

  var abs_percentage = Math.abs(percentage).toString();
  var classes = ""

  //change color on parts of circle 
  if(percentage <= 0){
    classes = "circle-chart__circle--negative";
  }else if(percentage > 0 && percentage <= 25){
    classes = "Percentage25";
  }else if(percentage > 25 && percentage <= 50){
    classes = "Percentage50";
  }else if(percentage > 50 && percentage <= 75){
    classes = "Percentage75";
  }else{
    classes = "Percentage100";
  }

  //make animation on start on 4rd screen
  if(Status == "0"){
    var svg = '<svg class="circle-chart" data-id="closed" viewbox="0 0 33.83098862 33.83098862">'
    + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
    + '<circle class="circle-chart__circle '+classes+'"'
    + 'stroke-dasharray="'+ abs_percentage+',100"  cx="16.9" cy="16.9" r="15.9" /> '
    + '<g class="circle-chart__info">'
    + '<text id="ECTSunits" class="circle-chart__percent" x="17.9" y="15.5">0</text>'
    + '<text class="circle-chart__subline" x="16.91549431" y="22">'+total+"/"+totalECTS+' ECTS</text> </g>';

  /* if(inner_text){
    svg += '<text class="circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
  } */
  
  svg += ' </svg>';
  $('.single-skill').html(svg);
  //make animation while deleting lesson in 4rd screen
  }else{
    $('.circle-chart__circle').attr("class",'circle-chart__circle '+classes); 
    $('.circle-chart__circle').attr("stroke-dasharray",abs_percentage+",100");
    $('.circle-chart__subline').text(total+"/"+totalECTS);
  }

  //change the color of circle progress in ig dark theme is on
  if(localStorage.getItem("darkTheme") !== null){
    if(localStorage.getItem("darkTheme") == "on"){
        $('.circle-chart').css("background","none");
        $('.circle-chart__background').css("stroke","#5F928F");
        $('.circle-chart__percent').css("fill","#e1e1e1");
        $('.circle-chart__subline').css("fill","#e1e1e1");
        $('.circle-chart').css("box-shadow","rgba(159, 159, 159, 0.25) 0px 15px 25px, rgba(159, 159, 159, 0.25) 0px 5px 10px");
    }else{
      $('.circle-chart').css("background","none");
      $('.circle-chart__background').css("stroke","#c7ece0");
      $('.circle-chart').css("box-shadow","rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px");
    }
  }


}



// Display all saved lessons on 4rd screen
function displayPortfolioTable() {

    var Dep=document.getElementById("HiddenDepartment").innerHTML

     //+++++++++++++++++++++++++++++++++++++++++Create+++++++++++++++++++++++++++++++++++++
     var db = null;

     document.addEventListener('deviceready', function() {
       db = window.sqlitePlugin.openDatabase({
         name: 'my.db',
         location: 'default',
       });
     });

    let productMarkup = "";
  
    var table = $('#portfolioTable').DataTable();
    table.clear().destroy();

    $('#tableBodyPortfolio').empty();

    db.transaction(function(tx) {
      //====if the Department has SOME data
      tx.executeSql("SELECT count(*) AS mycount FROM savedLessonsTable WHERE Department='"+Dep+"'", [], function(tx, rs) {
        
        if(rs.rows.item(0).mycount!=0){
          db.executeSql("SELECT *  FROM savedLessonsTable  WHERE Department='"+Dep+"'", [], function(results) {
            var len = results.rows.length;
            // $("#clearPortfolio").css("display", "block");
            // $("#noSavedLesson").css("display", "none");
            for (var i=0; i<len; i++){
              productMarkup +=` <tr data-id='mainTr'>
                                  <td data-id="closed" ><p class="listLesson" width="80%">${results.rows.item(i).Lesson}</p></td>
                                  <td class="hidden" width="0%" >${results.rows.item(i).Direction}</td>
                                  <td class="hidden" width="0%" >${results.rows.item(i).Examino}</td>
                                  <td width="20%" style="background-color: #19afa8;"><button data-id="${results.rows.item(i).id}" class="removeFromList"><i class="far fa-trash-alt"></i></button></td>
                                </tr>`;

              portfolioTableContent.querySelector("tbody").innerHTML = productMarkup;

              if(i==len-1){
                OrderingSavedLessons();
              }

            }    
          }, function(error) {
           
          });
        }else {
          $("#tableBodyPortfolio").empty();
        }
      }, function(tx, error) {
        $("#tableBodyPortfolio").empty();
      });
    });
  
   
  }


//Making slided row with exam in saved lesson on 4rd screen
function format2 ( d ) {
    // `d` is the original data object for the row
    if(localStorage.getItem("darkTheme") !== null){
      if(localStorage.getItem("darkTheme") == "on"){
        return '<div style="display:none"  ><table id="innerLessonTable"  >'+
        '<tbody>'+
        '<tr  >'+
            '<td style=" background:#707070; color:#46AFA9; ">Εξάμηνο</td>'+
            '<td style="background:#707070;  color:#e1e1e1;">'+changeZero(d.Examino)+'</td>'+
        '</tr>'+
        '</tbody> '+
        
      '</table> </div>';
      }else{
        return '<div style="display:none" ><table id="innerLessonTable"  >'+
        '<tbody>'+
        '<tr  >'+
            '<td style=" background:#E7F0F0; color:#14A098; ">Εξάμηνο</td>'+
            '<td style="background:#E7F0F0;  color:black;">'+changeZero(d.Examino)+'</td>'+
        '</tr>'+
        '</tbody> '+
        
      '</table> </div>';
      }
    }else{
      return '<div style="display:none"  ><table id="innerLessonTable"  >'+
      '<tbody>'+
      '<tr  >'+
          '<td style=" background:#E7F0F0; color:#14A098;">Εξάμηνο</td>'+
          '<td style="background:#E7F0F0;  color:black;">'+changeZero(d.Examino)+'</td>'+
      '</tr>'+
      '</tbody> '+
      
    '</table> </div>';
    }
  
  }
  

//Ordering saved lesson with Direction
  function OrderingSavedLessons() {
    
    var table =$('#portfolioTable').DataTable({
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
          { 'data': 'Direction' },
          { 'data': 'Examino' },
          { 'data': 'id' }
      ],
        'order': [[1, 'asc']],
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
    
                    api.column(1, { page: 'current' }).data().each(function (group, i) {
    
                        if (last !== group) {
    						            if(i==0){
                                $(rows).eq(i).before(
                                    '<tr class="group" style="box-shadow: none;">'+
                                        '<td colspan="8" class="orderingClass2" style="background-color: Transparent;"><i class="fas fa-caret-right"></i> '+ group  + '</td>'
                                    +'</tr>'
                                );
                            }else{
                                $(rows).eq(i).before(
                                '<tr class="group" style="box-shadow: none;">'+
                                    '<td colspan="8" class="orderingClass3" style="background-color: Transparent ;"><i class="fas fa-caret-right"></i> ' + group  + '</td>'
                                +'</tr>'
                                );
                            }
                            
    
                            last = group;
                        }
                    });

                    $('#portfolioTable tbody').find('.group').each(function (i,v) {
                      var rowCount = $(this).nextUntil('.group').length;
                      $(this).find('td:first').append($('<span />', { 'class': 'rowCount-grid' }).append($('<b />', { 'text': ' ('+rowCount+')' })));
                    });
        }
                
    } );
         
}


//save Lesson drom lessons table
  function saveProduct(clickedBtn) {
     
    var db = null;

    document.addEventListener('deviceready', function() {
      db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
      });
    });

    db.transaction(function(tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS savedLessonsTable (id, Lesson,ECTS,Department,Examino,Direction)');
    }, function(error) {

    }, function() {

    });

    // vars
    const productId = clickedBtn.getAttribute("data-id");
    //const card = clickedBtn.parentElement.parentElement;
    const tr = clickedBtn.parentElement.parentElement;        //<<====<tr>      portfolioTableContent.querySelectorAll("tr td:nth-child(3)");
    //const td = tr.querySelector("td");
    const Lesson =tr.cells[0].querySelector("p").innerHTML;
    const ECTS = tr.cells[2].innerHTML;
    const Examino = tr.cells[3].innerHTML;
    const Direction=tr.cells[5].innerHTML;
    const Required = tr.cells[6].innerHTML;
    const Department1 = document.getElementById("HiddenDepartment").innerHTML;                 //tr.cells[3].innerHTML;

    let isProductInCart = false;

  //check if lessons isnt inside saved lessons
    db.transaction(function(tx) {
      tx.executeSql('SELECT count(*) AS mycount FROM savedLessonsTable WHERE id='+productId, [], function(tx, rs) {
        if(rs.rows.item(0).mycount!=0){
          isProductInCart = true;
        }
      }, function(tx, error) {
    
      });
    });



    if (!isProductInCart) {

      if(Required !="-" ){

        checkRequired(Required,clickedBtn,productId,Lesson,ECTS,Examino,Direction)
    
      }else{
        //===================All Good save lesson============================
      
        clickedBtn.className ="removeFromArray";
        clickedBtn.innerHTML="<i class='far fa-trash-alt'></i>";

        db.transaction(function(tx) {
          tx.executeSql('INSERT INTO savedLessonsTable (id, Lesson,ECTS,Department,Examino,Direction) VALUES (?,?,?,?,?,?)', [productId, Lesson,ECTS,Department1,Examino,Direction]);
        }, function(error) {
           
        });
      }

    }
  }



//Check if saved lessons  contains required lessons
  function checkRequired(Required,clickedBtn,productId,Lesson,ECTS,Examino,Direction){

    document.addEventListener('deviceready', function() {
      db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
      });
    });

    const Department1 = document.getElementById("HiddenDepartment").innerHTML;                 //tr.cells[3].innerHTML;

    var tmpRequired=Required;
  
    if(Required.includes("`H")){
      tmpRequired = Required.replace(/`H/g,"@");
    }

    if(tmpRequired.includes("KAI")){
      tmpRequired = tmpRequired.replaceAll('KAI',"#");
    }

    // ========================Spliting========================

    var t=tmpRequired.replaceAll("(","").replaceAll(")","").split(/(?: @ | # )+/) 


  //=====================Union1=============================
      var LessonArray=[];
      db.executeSql("SELECT * FROM savedLessonsTable  WHERE Department='"+Department1+"'", [], function(result) {
  
          var len = result.rows.length;
          for (var i=0; i<len; i++){
            LessonArray.push(result.rows.item(i).Lesson);
          }  
                        
          for(var a = 0;a<t.length;a++){
              if(LessonArray.includes(t[a])){
                tmpRequired=tmpRequired.replace(t[a],"true");
              }else{
                tmpRequired=tmpRequired.replace(t[a],"false");
              }
          }

          //===========================Union2================================

          if(tmpRequired.includes("#")){
            tmpRequired = tmpRequired.replace(/#/g,"&&");
          }
          if(tmpRequired.includes("@")){
            tmpRequired = tmpRequired.replace(/@/g,"||");
          }

          // if(p.includes("&&")){
          //   var t1;
          //   t1=p.split(/(?: && )+/) ;
         
          //   p=t1.toString()
          //   p="("+p+")"
          //   p=p.replaceAll(",",")&&(");
        
          // }

          var safe = tmpRequired.replace(/true/g, "1").replace(/false/g, "0");
    
          var result = !!eval(safe);

          if(result){
                //===================All-Good============================
                
                clickedBtn.className ="removeFromArray";
                clickedBtn.innerHTML="<i class='far fa-trash-alt'></i>";

                db.transaction(function(tx) {
                  tx.executeSql('INSERT INTO savedLessonsTable (id, Lesson,ECTS,Department,Examino,Direction) VALUES (?,?,?,?,?,?)', [productId, Lesson,ECTS,Department1,Examino,Direction]);
                }, function(error) {
             
                });
          }
          else{ //if required isnt in saved lessons
            $('#alertText').html("Δεν είναι αποθηκευμένο κάποιο από τα Προαπαιτούμενα Μαθήματα")
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
            
        
          
      });
  }





//Remove lesson from local db
  function removeLessonFromSQL(productId) {

    // remove product from cart (and from local storage)

    //+++++++++++++++++++++++++++++++++++++++++Open+++++++++++++++++++++++++++++++++++++
    var db = null;

    document.addEventListener('deviceready', function() {
      db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
      });
    });

    db.transaction(function(tx) {
          tx.executeSql("DELETE FROM savedLessonsTable WHERE id='"+productId+"'");
        
    }, function(error) {
    
    });

  }



//Delete ALL lessons in this Department
  function clearPortfolioTable() {
    // clear all products from cart (and local storage)
    //+++++++++++++++++++++++++++++++++++++++++Open+++++++++++++++++++++++++++++++++++++
    var db = null;

    document.addEventListener('deviceready', function() {
      db = window.sqlitePlugin.openDatabase({
        name: 'my.db',
        location: 'default',
      });
    });

    
    //++++++++++++++++++++++++++++++++++++++Delete++++++++++++++++++++++++++
    db.executeSql("DELETE FROM savedLessonsTable WHERE Department='"+document.getElementById("HiddenDepartment").innerHTML+"'", [], function() {

      displayPortfolioTable();
          
    }, function(error) {
     
    });
    
    
  }


//Which one of button (green/red) (add/remove) lesson drom Lessons table
lessonsTable.addEventListener("click", function(e) {

    var clickedBtn;
    //---If the icon <i> is pressed-------
    if(e.target.tagName=="I"){
      clickedBtn = e.target.parentElement;
     
    }else{
      clickedBtn = e.target;
    }

    
     //---if Add is pressed-------
    if (clickedBtn.classList.contains("addToList")) {

      saveProduct(clickedBtn);
    
    }//---if Delete is pressed-------
    else if(clickedBtn.classList.contains("removeFromArray")){
      const productId = clickedBtn.getAttribute("data-id");
      removeLessonFromSQL(productId);
      displayPortfolioTable();
      
      clickedBtn.className ="addToList";
      clickedBtn.innerHTML="<i class='fas fa-plus'></i>";
    }

  });

  

  //Add event listener for opening and closing extra infos in saved Lessons in Exam 1o 2o...
  $('#portfolioTable tbody').on('click', 'td', function(e){

    var table =$('#portfolioTable').DataTable();
    var tr = $(this).closest('tr');
    var row = table.row( tr );
  
    if(tr.attr("data-id")=="mainTr"){
        if($(this).closest("td").index()==0){
  
          if ( $(this).attr("data-id") == "closed" ) {
              row.child(format2(row.data())).show();
              tr.next().find("div").slideToggle();
              $(this).attr('data-id','open');

          }else{
              tr.next().find("div").slideUp();
              $(this).attr('data-id','closed');
              setTimeout(function() {
                  //your code to be executed after 1 second
                  row.child.hide(); 
                  // tr.remove();
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
                //your code to be executed after 1 second
                row.child.hide(); 
            }, 500);
    
        }    
  });

  
//When user Deleting Lesson from saved Lessons
  $('#portfolioTable tbody').on('click', '.removeFromList', function(e){

    e.preventDefault();
   
      var rowCount = document.getElementById('portfolioTable').rows.length;
      rowCount--;   //beacuse count the 'tr' of thead
     
      if(rowCount == 2){
        var tr=$(this).parent().parent();

        $(tr).animate({
          left: '-1000%'
        },600);
        
        setTimeout(function() {
          clearPortfolioTable();
          displayTotal("screen");
        }, 400);
        
      }else{
        if(rowCount == 3 && $(this).parent().prev().prev().prev().attr("data-id") != "closed"){
          var tr=$(this).parent().parent();
          $(tr).animate({
            left: '-1000%'
          },600);

          tr.next().animate({
            left: '-1000%'
          },600);

          setTimeout(function() {
            clearPortfolioTable();
            displayTotal("screen");
          }, 400);

        }else{
          if($(this).parent().prev().prev().prev().attr("data-id") == "closed"){
            var table =  $('#portfolioTable').DataTable();
            const productId =$(this).attr("data-id");
            removeLessonFromSQL(productId);
            displayTotal("screen");
            var tr=$(this).parent().parent();
            $(tr).animate({
              left: '-1000%'
            },600);
  
            setTimeout(function() {
              tr.next().remove();
              table.row(tr).remove().draw( false );
            }, 400);

          }else{
            var table =  $('#portfolioTable').DataTable();
            const productId =$(this).attr("data-id");
            removeLessonFromSQL(productId);
            displayTotal("screen");
            var tr=$(this).parent().parent();

            $(tr).animate({
              left: '-1000%'
            },600);

            $(tr).next().animate({
              left: '-1000%'
            },600);
            // tr.next().find("div").slideUp();
            // $(this).attr('data-id','closed');
            // setTimeout(function() {
            //     //your code to be executed after 1 second
            //     row.child.hide(); 
            // }, 500);
            
            setTimeout(function() {
              table.row(tr).remove().draw( false );
            }, 400);
          }
        }
       
      }
  });



//Delete all saved Lessons button on PopUp
  $('#Alert-2').on('click', '.deleteList', function(e){
    clearPortfolioTable();
    displayTotal("screen");
    document.getElementById("Alert-2").classList.toggle("activeAlert");
    $('.warningSection2').empty();
  });

//Close PopUp no required/no Time Sch 
  $('#Alert-2').on('click', '.closeAlert', function(e){
    document.getElementById("Alert-2").classList.toggle("activeAlert");
    $('.warningSection2').empty();
  });

//Close delete all lessons PopUp 
   $('#Alert-1').on('click', '.closeAlert', function(e){
    document.getElementById("Alert-1").classList.toggle("activeAlert");
    $('.warningSection1').empty();
  });

//Open Delete all saved lessons PopUp
clearPortfolioBtn.addEventListener("click", function(e) {

    document.getElementById("Alert-2").classList.toggle("activeAlert");

    $('.warningSection2').append('<div id="svg__Warning" class="lottie" ></div>');
    const animationInline2 = bodymovin.loadAnimation({
        container: document.getElementById('svg__Warning'),
        autoplay: true,
        renderer: 'svg',
        loop: false,
        animationData: {"v":"5.6.5","fr":30,"ip":0,"op":30,"w":400,"h":400,"nm":"Error","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"POINT","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,269.5,0],"ix":2},"a":{"a":0,"k":[0,70,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.585,0.585,0.585],"y":[0.754,0.754,-28.504]},"o":{"x":[0.178,0.178,0.178],"y":[0,0,0]},"t":16,"s":[0,0,100]},{"i":{"x":[0.701,0.701,0.701],"y":[1,1,1]},"o":{"x":[0.348,0.348,0.348],"y":[-1.651,-1.651,33.01]},"t":19,"s":[120,120,100]},{"t":23.0000009368092,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[400,400],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,70.168],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[8.39,8.39],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":1.00000004073083,"op":901.000036698482,"st":1.00000004073083,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Ex","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200.27500000000003,202.99999999999997,0],"ix":2},"a":{"a":0,"k":[6,-16,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-31.833]],"o":[[0,0],[0,0]],"v":[[6,-96],[6,-0.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":32,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[90.821,90.821],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[0]},{"t":16.0000006516934,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":1.00000004073083,"op":901.000036698482,"st":1.00000004073083,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"MAIN 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":6,"s":[114.99999999999999,114.99999999999999,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":12,"s":[85,85,100]},{"t":16.0000006516934,"s":[90,90,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[400,400],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[72.319,72.319],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"RAY 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[-20,2,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-158.5,2.25],[-191.75,2.25]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8980392156862745,0.1803921568627451,0.1803921568627451,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[0]},{"t":18.000000733155,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":4,"s":[0]},{"t":9.00000036657752,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"rp","c":{"a":0,"k":8,"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":3,"tr":{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[-20,3],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-45,"ix":4},"so":{"a":0,"k":100,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transform"},"nm":"Repeater 1","mn":"ADBE Vector Filter - Repeater","hd":false}],"ip":-3.00000012219251,"op":897.000036535559,"st":-3.00000012219251,"bm":0}],"markers":[]}
    })

  });

})();//============================end 0f function==========================================




//fill Lessons table when closing portfolio screen (4rd screen)
function aJaxCall2(){

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

  var table = $('#userTable').DataTable();
  table.clear().destroy();
  
  var HiddenDepartment=document.getElementById("HiddenDepartment").innerHTML;
  var HiddenExam=document.getElementById("HiddenExam").innerHTML;


  for(var i = document.getElementById("tableBodyId").rows.length; i > 0;i--)
  {
      document.getElementById("tableBodyId").deleteRow(i -1);
  }
  

  $.ajax({
    type: 'GET',
    url: URL+"/FindLessons.php",
    data:{  
        "tmima":HiddenDepartment,  
        "examino":HiddenExam,  
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
            

            fillLessonsTable2(id,Lesson,ECTS,Infos,Required,Direction,i,len,Examino);

        }//=====end for


    }//====End success
  });//===End AJAX
  
}//====End function()


//Fill its row of lessons table with items
function fillLessonsTable2(id,Lesson,ECTS,Infos,Required,Direction,i,len,Examino) {
                
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
          tr_str=tr_str+"<td  width='20%' id='aa' class='tmp' ><button class='removeFromArray' id='addButton' data-id="+id+"><i class='far fa-trash-alt'></i></button></td>" 
          updateLesson(id,Lesson,ECTS,Direction,Examino)

        } else {
          //ADD
          tr_str=tr_str+"<td  width='20%' id='aa' class='tmp' ><button class='addToList' id='addButton' data-id="+id+"><i class='fas fa-plus'></i></button></td>";
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
          formLessonsTable2();
      }
  }, function(error) {
    var tr_str = 
    "<tr data-id='mainTr'>" +
        "<td  width='80%' class='lessonInsideRows' data-id='closed'><p style='padding-left:5px;padding-right:10px; padding-top:5px; padding-bottom:5px;'>" +Lesson + "</p></td>" ;     //<<<=====0
        //ADD
        tr_str=tr_str+"<td  width='20%' id='aa' class='tmp' ><button class='addToList' id='addButton' data-id="+id+"><i class='fas fa-plus'></i></button></td>";
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
        formLessonsTable2();
    }
  });
 
}//===End fillArray





//Make slided table for more infos in lessons table  
function formLessonsTable2() {
  
  var table =$('#userTable').DataTable({
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
                                  '<td colspan="8"  style="background-color:transparent;  padding-left: 10px;" class="orderingClass"><i class="fas fa-caret-right"></i> '+ group  + '</td>'
                              +'</tr>'
                        );
                    }else{
                      $(rows).eq(i).before(
                        '<tr style="box-shadow: none;"><td colspan="8" style="padding: 20px 20px;background:#transparent; style="box-shadow: none;""></td></tr>'+
                        '<tr class="group" style="box-shadow: none;">'+
                            '<td colspan="8"  style="background-color:transparent;  padding-left: 10px;" class="orderingClass" ><i class="fas fa-caret-right"></i> ' + group  + '</td>'
                        +'</tr>'
                        );
                    }
                          last = group;
                      }
                  });
              }
  } );

       
}



