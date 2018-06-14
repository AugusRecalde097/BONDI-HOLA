//import { Socket } from "dgram";
let socket = io.connect();
var $findMeButton = $('.find-me');
var $usuario = localStorage.getItem("name"); //$('#nombre');
let $chat = $('#chat');
let userscoords
/* let $btnButton = $('find-all'); */
// Check if the browser has support for the Geolocation API
if (!navigator.geolocation) {

  $findMeButton.addClass("disabled");
  $('.no-browser-support').addClass("visible");
  $btnButton.addClass("disabled");
 
} else {
//EVENTO DEL BOTON CONECTARSE--SIRVE PARE LOGUEARSE A LA LISTA DE USERS DEL SERVER
function initMap(){ 

    navigator.geolocation.getCurrentPosition(function(position){

      // Get the coordinates of the current possition.
      var latUsr = position.coords.latitude;
      var lngUsr = position.coords.longitude;
      nombreuser = $usuario;
      
      idsocket = socket.id;
      //console.log(idsocket);
      let posicion = [latUsr, lngUsr, nombreuser, idsocket];
      
      console.log(posicion);

      $('.latitude').text(latUsr.toFixed(3));
      $('.longitude').text(lngUsr.toFixed(3));
      $('.coordinates').addClass('visible');
      socket.emit('send message', posicion);

      socket.on('new message', data =>{
        //$chat.append('<p>nuevo user><div class="well">'+data.msg+'</div');
        $chat.append('<div class="well">se conecto: ' +data.msg[2]+'</div');

      });
      var options = {
        zoom:17,
        center:{lat:latUsr,lng:lngUsr}
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);


      // Array of markers
      var markers = [
        {
          coords:{lat:latUsr,lng:lngUsr},
          iconImage:'https://image.ibb.co/jN0HYn/3.png',
          content:'<h1>Parada de la Linea ...</h1>'
        }
      ];

      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });
          
          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
    });
    

}
  //aca comienza el codigo del otro boton de buscar gente
}
