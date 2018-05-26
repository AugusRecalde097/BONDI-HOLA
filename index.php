<?php if(isset($_GET['linea'])){
  $linea = "Linea ".$_GET['linea'];
}else{
  $linea = "Seleccione una linea";
}  
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="initial-scale=1, width=device-width,maximum-scale=1, user-scalable=no">
  <title>BondiHola - Pantalla de Inicio</title>
  <link rel="stylesheet" type="text/css" href="css/estilos.css">
  <link rel="stylesheet" type="text/css" href="fonts/style.css">
</head>
<body>

  <header>
  	<div class = "menu_bar" >
  		<a href="#" class="bt-menu"><span class="icon-list2"></span></a>
  		<a href="#" class="select-menu"><?php echo ($linea);?></a>
  	</div>
  		<nav class="lines-list">
  				<ul>
  					<li><a href="index.php?linea=25">Linea 25</a></li>
  					<li><a href="index.php?linea=30">Linea 30</a></li>
  					<li><a href="index.php?linea=40">Linea 40</a></li>
  					<li><a href="index.php?linea=60">Linea 60</a></li>
  					<li><a href="index.php?linea=65">Linea 65</a></li>
  					<li><a href="index.php?linea=70">Linea 70</a></li>
  					<li><a href="index.php?linea=80">Linea 80</a></li>
  					<li><a href="index.php?linea=90">Linea 90</a></li>
                    <li><a href="index.php?linea=100">Linea 100</a></li>
          </ul>
  		</nav>
  		<nav class="side-menu">
  				<ul>
  					<li><a href="noticias.html"><span class="icon-bus"></span> Noticias de Lineas</a></li>
  					<li><a href="irA.html"><span class = "icon-compass"></span> Ir a...</a></li>
  					<li><a href=""><span class = "icon-question"></span> Dónde cargo</a></li>
  					<li><a href=""><span class = "icon-parada"></span> Encontrar parada</a></li>
  				</ul>
  		</nav>
  </header>

<div id="map"></div>

  <script>
    function initMap(){
      // Map options
      var options = {
        zoom:17,
        center:{lat:-26.1819849,lng:-58.188476}
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);


      // Array of markers
      var markers = [
        {
          coords:{lat:-26.182498,lng:-58.194629},
          iconImage:'https://image.ibb.co/f0Rrtn/parada.png',
          content:'<h1>Parada de la Linea ...</h1>'
        },
        {
          coords:{lat:-26.183889,lng: -58.198939},
           iconImage:'https://image.ibb.co/f0Rrtn/parada.png',
          content:'<h1>Parada de la Linea ...</h1>'
        },
                {
          coords:{lat:-26.185159,lng: -58.202773},
           iconImage:'https://image.ibb.co/f0Rrtn/parada.png',
          content:'<h1>Parada de la Linea ...</h1>'
        },
                {
          coords:{lat:-26.186172,lng: -58.206082},
           iconImage:'https://image.ibb.co/f0Rrtn/parada.png',
          content:'<h1>Parada de la Linea ...</h1>'
        }
        ,        {
          coords:{lat:-26.178986,lng: -58.192695},
           iconImage:'https://image.ibb.co/j0P0m7/Sin_t_tulo_1.png',
          content:'<h3>Punto de carga de tu tarjeta Sube</h3>'
        }
        ,        {
          coords:{lat:-26.183357,lng: -58.190013},
          iconImage:'https://image.ibb.co/j0P0m7/Sin_t_tulo_1.png',
          content:'<h3>Punto de carga de tu tarjeta Sube</h3>'
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
          //icon:props.iconImage
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
    }
  </script>
  <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDig9uKtXX7jL3albRynYhZzvPB92y1Cs4&callback=initMap&sensor=false">
    </script>
    <script src = "js/jquery-latest.js"></script>
    <script src="menu.js"></script>
</body>
</html>
