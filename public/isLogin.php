<?php 
 session_start();
//if (empty($_SESSION('linea'))){ 

    if(isset($_SESSION['nombre'])){
        $_SESSION['nombre'] = $_GET['nombre'];
        $_SESSION['linea '] = "Linea ".$_GET['linea'];
        $estado = true;
    }else{
        $estado = false;
    }
?>