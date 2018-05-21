$(document).ready(main);

var opciones = 1;
var lineas = 1;

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
  if (this.scrollY >= 1){
    if(lineas==0){
      $('.lines-list').animate({top: '-100%'});
      lineas=1;
    }
    if(opciones==0){
      $('.side-menu').animate({left: '-100%'});
      opciones=1;
    }
  }
}, false);




};