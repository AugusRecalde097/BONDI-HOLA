//import { Socket } from "net";

/* io(); */
/* let socket = io.connect();
console.log('POR AHORA FUNCIONA');
$(function(){
    
    let $messageForm = $('#messageForm');
    let $message = $('#message');
    let $chat = $('#chat');
    let $lat;
    let $lng;
    //let $idsocket = socket.id;
    let idsocket = socket.id;
    let coordenadas;
    let usuariosConectados = [];
    ///vamos a ver si le podemos añadir la posicion aca

navigator.geolocation.getCurrentPosition(position =>{
    $lat = position.coords.latitude;
    $lng = position.coords.longitude;
    
});
    console.log(socket.id);
    coordenadas = $lat + $lng;
    //usuariosConectados
    $messageForm.submit(function(e){
        e.preventDefault();
        //socket.emit('send message', $message.val());
        socket.emit('send message', coordenadas);
        $message.val('');
    });

    socket.on('new message', function(data){
       $chat.append('<p>nuevo user><div class="well">'+data.msg+'</div'); */
       
       /* let miniListaUser = {};
       miniListaUser["lat"] = data.msg[0];
       miniListaUser["long"] = data.msg[1];
       miniListaUser["nombre"] = data.msg[2]; */
       //
       /* map.addMarker({
        lat: data.msg[0],
        lng: data.msg[1]
      }); */
      //
      //let mapa = document.getElementById('#map');
      /* let $mapa = ('#map'); 
        mapa.addMarker({
        lat: miniListaUser["lat"],
        lng: miniListaUser["long"]
      }); */
      /* var marker = new google.maps.Marker({
          position:{lat:data.msg[0],lng:data[1]},
          map:map
      }); */ 

       //usuariosConectados.push(miniListaUser);
       //$chat.append('<div class="well">'+data.msg+'</div');
       //console.log(usuariosConectados);
       
       
      
 /*       
    });

}); */