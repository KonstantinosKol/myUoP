

function closePortfolio() {
  
  //document.getElementById("popup-2").classList.toggle("active2");
  aJaxCall2(); 

  $('.popup2').animate({
    left: "-100%"
  });

  $('.content2').animate({
    left: "-100%"
  });

  $( ".single-skill" ).animate({
    top: "10.5%",
  }, 500 );
  $( "#DepartmentInfos" ).animate({
      top: "55%",
  }, 500 );
  $( ".CurvedSection" ).animate({
    top: "45%",
}, 500 );


  setTimeout(function() {
    //your code to be executed after 1 second
    var table = $('#portfolioTable').DataTable();
        table.clear().destroy();
    }, 500);
  

}



(function() {
  // VARS
  const lessonsTable = document.querySelector("#userTable");              //---------Table with lessons
  //const cartContainer = document.querySelector("#shopping-cart");
  const portfolioTableContent = document.querySelector("#portfolioTable");        //---table  in cart
 // alert("portfolioTableContent===>"+portfolioTableContent);
  //const toggleCartBtn = document.querySelector("#toggle-cart-btn");   //------Button for "open cart"
  const clearPortfolioBtn = document.querySelector("#clearPortfolio");         //----Button for "Clear"

  const tmimata = document.querySelector("#GroupOfButtons");         //----Button for tmimata

  const openDiv = document.querySelector("#Array");         //----Button for Open popup


  openDiv.addEventListener("click", function(e) {
    if (e.target.classList.contains("PortfolioButton")) {

      $('.popup2').animate({
        left: "0%"
      });

      $('.content2').animate({
        left: "0%"
      });

    displayPortfolioTable();                   //<====================

    displayTotal("OpenScreen");      //<<===================

    }
  });




  
  $('.backButtonNavBar').on('click', function(e){
    document.querySelector('.containerS').classList.toggle('view-change2');
  
    setTimeout(function() {
    //your code to be executed after 1 second
    var table = $('#userTable').DataTable();
        table.clear().destroy();
    }, 500);
  });

 

  tmimata.addEventListener("click", function(e) {

    if (e.target.classList.contains("button1")) {
      
      e.preventDefault();

      const tmp=e.target;
      
    }
  });



  $('.single-skill').on('click', '.circle-chart', function(e){
    $( ".single-skill" ).animate({
        top: "55%",
    }, 500 );
    $( "#DepartmentInfos" ).animate({
        top: "11.5%",
    }, 500 );
    $( ".CurvedSection" ).animate({
      top: "50%",
  }, 500 );
});



$('#DepartmentInfos').on('click', function(e){
    $( ".single-skill" ).animate({
        top: "10.5%",
    }, 500 );
    $( "#DepartmentInfos" ).animate({
        top: "55%",
    }, 500 );
    $( ".CurvedSection" ).animate({
      top: "45%",
  }, 500 );
});

  



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
  


function makeCircleAnimation(percentage,total,totalECTS,Status){

  var abs_percentage = Math.abs(percentage).toString();
  var classes = ""

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

  if(Status == "0"){
    var svg = '<svg class="circle-chart" data-id="closed" viewbox="0 0 33.83098862 33.83098862">'
    + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
    + '<circle class="circle-chart__circle '+classes+'"'
    + 'stroke-dasharray="'+ abs_percentage+',100"  cx="16.9" cy="16.9" r="15.9" />'
    + '<g class="circle-chart__info">'
    + '<text id="ECTSunits" class="circle-chart__percent" x="17.9" y="15.5">0</text>'
    + '<text class="circle-chart__subline" x="16.91549431" y="22">'+total+"/"+totalECTS+' ECTS</text>';

  /* if(inner_text){
    svg += '<text class="circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
  } */
  
  svg += ' </g></svg>';
  $('.single-skill').html(svg);

  }else{
    $('.circle-chart__circle').attr("class",'circle-chart__circle '+classes); 
    $('.circle-chart__circle').attr("stroke-dasharray",abs_percentage+",100");
    $('.circle-chart__subline').text(total+"/"+totalECTS);
  }

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






function displayPortfolioTable() {
    // display all products in the cart

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

              // $("td[colspan=3]").find("div").hide();

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
  


  function OrderingSavedLessons() {
    
    var table =$('#portfolioTable').DataTable({
        destroy : true,
        "deferRender": true,
        "destroy": true,
        "retrieve": false,
        "paging":   false,              //Ta epipleon features pou exei to DataTable
        "ordering": false,
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
                                    '<td colspan="8" class="orderingClass2" style="background-color: Transparent ;"><i class="fas fa-caret-right"></i> ' + group  + '</td>'
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
     // alert('Transaction ERROR: ' + error.message);
    }, function() {
      //alert('Populated database OK');
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


    db.transaction(function(tx) {
      tx.executeSql('SELECT count(*) AS mycount FROM savedLessonsTable WHERE id='+productId, [], function(tx, rs) {
        if(rs.rows.item(0).mycount!=0){
          isProductInCart = true;
        }
      }, function(tx, error) {
       // alert('SELECT error3: ' + error.message);
      });
    });



    if (!isProductInCart) {

      if(Required !="-" ){

        checkRequired(Required,clickedBtn,productId,Lesson,ECTS,Examino,Direction)
    
      }else{
        //===================All-Good============================
      
        clickedBtn.className ="removeFromArray";
        clickedBtn.innerHTML="<i class='far fa-trash-alt'></i>";

        db.transaction(function(tx) {
          tx.executeSql('INSERT INTO savedLessonsTable (id, Lesson,ECTS,Department,Examino,Direction) VALUES (?,?,?,?,?,?)', [productId, Lesson,ECTS,Department1,Examino,Direction]);
        }, function(error) {
            //alert('Transaction ERROR: ' + error.message);
        });
      }

    }
  }




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
      tmpRequired = Required.replaceAll("`H","@");
    }
    if(tmpRequired.includes("ΚΑΙ")){
      tmpRequired = tmpRequired.replaceAll("ΚΑΙ","#");
    }

    // ========================Spliting========================
  var t=tmpRequired.split(/(?: @ | # )+/) 

  //=====================Union1=============================

      var LessonArray=[];
      db.executeSql("SELECT * FROM savedLessonsTable  WHERE Department='"+Department1+"'", [], function(result) {
  
          var len = result.rows.length;
          for (var i=0; i<len; i++){
            LessonArray.push(result.rows.item(i).Lesson);
          }  
                        
          var a = 0;
          var p=tmpRequired;
          for(a = 0;a<t.length;a++){
              if(LessonArray.includes(t[a])){
                  p=p.replace(t[a],"true")
              }else{
                p=p.replace(t[a],"false")
              }
          }

          //===========================Union2================================

          if(p.includes("#")){
              p = p.replaceAll("#","&&");
          }
          if(p.includes("@")){
              p = p.replaceAll("@","||");
          }

          var safe = p.replaceAll("true", "1").replaceAll("false", "0");
          
          var match = safe.match(/[0-9&| ]*/ig);
          
          if(match) {
            var result = !!eval(match[0]);
            if(result){
                  //===================All-Good============================
                  
                  clickedBtn.className ="removeFromArray";
                  clickedBtn.innerHTML="<i class='far fa-trash-alt'></i>";

                  db.transaction(function(tx) {
                    tx.executeSql('INSERT INTO savedLessonsTable (id, Lesson,ECTS,Department,Examino,Direction) VALUES (?,?,?,?,?,?)', [productId, Lesson,ECTS,Department1,Examino,Direction]);
                  }, function(error) {
                      //alert('Transaction ERROR: ' + error.message);
                  });
            }
            else{
              document.getElementById("Alert-1").classList.toggle("activeAlert");
            }
            
          }else{
            document.getElementById("Alert-1").classList.toggle("activeAlert");
          }
          
      });
  }






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
              //alert("Deleted id:"+productId);
      }, function(error) {
          //alert('Transaction ERROR: ' + error.message);
      });

  }




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
     // alert("delete cart ok")
          
      }, function(error) {
     // alert('SELECT SQL statement ERROR test1: ' + error.message);
    });
    

    
  }





  // Save product in cart and Local Storage
  // when add to cart button is clicked
  lessonsTable.addEventListener("click", function(e) {

    if (e.target.classList.contains("addToList")) {
     // alert("lessonsTable2");
      e.preventDefault();
      const clickedBtn = e.target;
      saveProduct(clickedBtn);
    
    }
    else if(e.target.classList.contains("removeFromArray")){
      e.preventDefault();
      const clickedBtn = e.target;
      const productId = clickedBtn.getAttribute("data-id");
      removeLessonFromSQL(productId);
      displayPortfolioTable();

      clickedBtn.className ="addToList";
      clickedBtn.innerHTML="&#10010;";
    }
    

  });

  



  // bind removeLessonFromSQL to click event of the portfolioTableContent table
  // portfolioTableContent.querySelector("tbody").addEventListener("click", function(e) {
   
  //   // if it's a remove button
  //   if (e.target.classList.contains("removeFromList")) {

  //       // alert("portfolioTableContent");
  //   e.preventDefault();
  //   // identify the button that was clicked
  //   const clickedBtn = e.target;
  //     // get the value of the data-id property, which contains the
  //     // id of the selected product
  //     const productId = clickedBtn.getAttribute("data-id");
  //     // use the id to remove the selected product
  //     removeLessonFromSQL(productId);

  //     displayPortfolioTable();

  //    //---------If u want delete from list Without Ordering API--------
  //     // var d = clickedBtn.parentNode.parentNode.rowIndex;
  //     // document.getElementById('portfolioTable').deleteRow(d);
  //     // document.getElementById('portfolioTable').deleteRow(d);

  //     displayTotal("screen");
  //   }
  // });



  //Add event listener for opening and closing details
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
              // alert("1111")
          }else{
              tr.next().find("div").slideUp();
              $(this).attr('data-id','closed');
              setTimeout(function() {
                  //your code to be executed after 1 second
                  row.child.hide(); 
                  // tr.remove();
              }, 500);
              // alert("2222")
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

  

  $('#portfolioTable tbody').on('click', '.removeFromList', function(e){

    e.preventDefault();
    // identify the button that was clicked
      // const clickedBtn = e.target;
      // get the value of the data-id property, which contains the
      // id of the selected product
      // const productId = clickedBtn.getAttribute("data-id");
      // use the id to remove the selected product
      // removeLessonFromSQL(productId);
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




  $('#Alert-2').on('click', '.deleteList', function(e){
    clearPortfolioTable();
    displayTotal("screen");
    document.getElementById("Alert-2").classList.toggle("activeAlert");
  });


  $('#Alert-2').on('click', '.closeAlert', function(e){
    document.getElementById("Alert-2").classList.toggle("activeAlert");
  });

   $('#Alert-1').on('click', '.closeAlert', function(e){
    document.getElementById("Alert-1").classList.toggle("activeAlert");
  });

  // bind the button to clear the cart both to the function that
  // clears the cart and to the function that adjusts the total price
  clearPortfolioBtn.addEventListener("click", function(e) {

    document.getElementById("Alert-2").classList.toggle("activeAlert");


  });

})();//============================end 0f function==========================================





function aJaxCall2(){
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
      url: myUrl+"/FindLessons.php",
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
      } else {
          //ADD
          tr_str=tr_str+"<td  width='20%' id='aa' class='tmp' ><button class='addToList' id='addButton' data-id="+id+">&#10010;</button></td>";
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
        tr_str=tr_str+"<td  width='20%' id='aa' class='tmp' ><button class='addToList' id='addButton' data-id="+id+">&#10010;</button></td>";
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
  });
 
}//===End fillArray






function formLessonsTable2() {
  
  var table =$('#userTable').DataTable({
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
                                  '<td colspan="8"  style="background-color:transparent;  padding-left: 10px;" class="orderingClass"><i class="fas fa-caret-right"></i> '+ group  + '</td>'
                              +'</tr>'
                        );
                    }else{
                      $(rows).eq(i).before(
                        '<tr style="box-shadow: none;"><td colspan="8" style="padding: 20px 20px;background:#transparent""></td></tr>'+
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



