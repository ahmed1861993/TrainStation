$(document).ready(function(){

  



$(window).scroll(function(){
    if($(this).scrollTop() >=200){
          $("#scll-btn").show();
    }else{$("#scll-btn").hide();} 
});

$("#scll-btn").click(function(){
    $("html,body").animate({scrollTop:0});
});


$('.owl-carousel').owlCarousel();

$("body").niceScroll();
$("this").niceScroll({cursorcolor:"#bd5d1e"});

  
$(window).scroll(function(){
  
    if($(this).scrollTop() >=100){
       
            $("#navBar").css("top","0");
            $("#navBar").css("background","rgba(57, 28, 75)");
            
        }else{ $("#navBar").css("top","40px");
        $("#navBar").css("background","rgba(57, 28, 75, 0.6)");}
        
         
});



  });
  