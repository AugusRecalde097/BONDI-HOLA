$(document).ready(main);

var opciones = 1;
var lineas = 1;
var lastScrollTop = 0;
function main(){
  $('.bt-menu').click(function(){
   //$('nav').toggle();        
    if(opciones==1){       
      $('.side-menu').animate({left:'0'});
      opciones=0;
    } else {
      $('.side-menu').animate({left:'-100%'});
      opciones=1;
    }         
  });

$('.select-menu').click(function(){
    if(lineas==1){
      $('.lines-list').animate({top: '8%'});
      lineas=0;
    } else {
      lineas=1;
      $('.lines-list').animate({top: '-100%'});
    }  
});


window.addEventListener("scroll", function(){
  var st = window.pageYOffset || document.documentElement.scrollTop; 
  if (st > lastScrollTop){ //al mover es Scroll hacia abajo se esconden los menus
    if(lineas==0){
      $('.lines-list').animate({top: '-100%'});
      lineas=1;
    }
    if(opciones==0){
      $('.side-menu').animate({left: '-100%'});
      opciones=1;
    }
    
  }else{
   
  } 
  lastScrollTop = st;

}, false);
};