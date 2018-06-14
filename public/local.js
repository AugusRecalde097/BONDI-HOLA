    function cargarDatosUser(){
    //carga lo ingresado por el usuario en una variable
    nombre = document.getElementById("nombre").value;
    linea = document.getElementById("linea").value;
    //verifica si el navegador soporta el uso de ls
      if (typeof(Storage) !== "undefined") {
          // Carga la variable ingresada en el LocalStorage
          localStorage.setItem("name", nombre);
          localStorage.setItem("linea", linea);
          
          window.location.assign("index.html");

          //Se muestra en pantalla el contenido del LocalStorage
        //   document.getElementById("result").innerHTML = "Tu usuario es: "+localStorage.getItem("name");
        //   document.getElementById("result2").innerHTML = "Tu linea es: "+localStorage.getItem("linea");
      } else {
      //en el caso que no sea copatible con el navegador
      //se carga este mensaje
          document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
    }
    
    function borrar(){ 
    //Se muestra un mensaje que se eliminó ese registro
    //document.getElementById("result").innerHTML = "Elemento Borrado: "+ localStorage.getItem("name");
    //se remueve el elemento del LocalStorage
    localStorage.removeItem("name");
    localStorage.removeItem("linea");
    window.location.assign("login.html");
    }