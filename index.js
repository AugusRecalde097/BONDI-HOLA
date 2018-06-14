/* const http = require('http');
const express = require('express');
const socketio = require('socket.io'); */

/* const app = express();
const server = http.createServer(app);
const io = socketio.listen(server); */
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
//
users = [];
conexiones = [];
//
server.listen(process.env.PORT || 3000);
console.log('el servidor esta corriendo...');

app.use(express.static('public'));

io.sockets.on('connection', socket => {
    //console.log('nuevo usuario conectado');
    conexiones.push(socket);
    console.log('conectado: %s sockets conectados', conexiones.length);
    //console.log(socket.id);
    //console.log(conexiones);
    //DESCONECTADOS
    socket.on('disconnect', function(data){
        conexiones.splice(conexiones.indexOf(socket), 1);
        console.log('desconectado: %s sockets conectados', conexiones.length);
        //console.log(conexiones);

    });
    //enviar mensajes
    socket.on('send message', function(data){
        //console.log(data);
        let miniListaUser = {};
        miniListaUser["lat"] = data[0];
        miniListaUser["long"] = data[1];
        miniListaUser["nombre"] = data[2];
        miniListaUser["id"] = data[3];
        users.push(miniListaUser); 
        io.sockets.emit('new message', {msg: data})
       //console.log(users); 
       console.log(users);
    });
});

//archivos estaticos
/* app.use(express.static('public')); */

//el servidor escucha
/* app.listen(3000,()=>{
    console.log('servidor activo en 3000');
}); */