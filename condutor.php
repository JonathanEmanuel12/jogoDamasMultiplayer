<?php

include_once("./controle/Login.php");

$rota = "";

if(isset($_POST["rota"])) {


    $resposta;
    $controleLogin = new Login();


    switch($_POST["rota"]) { 
        case "login":
            $resposta = $controleLogin->fazerLogin($_POST["login"], $_POST["password"]);

            if(is_string($resposta)) {
                include_once("./login.php");
            }
            else {
                include_once("./index.php");
            }
            break;
        case "cadastro":
            $resposta = $controleLogin->cadastrarUsuario($_POST["login"], $_POST["password"]);
            
            if(is_string($resposta)) {
                include_once("./login.php");
            }
            else {
                $resposta = ""; 
                include_once("./login.php");
            }
            break;
    }
}
else if(isset($_GET["rota"])) {
    $rota = $_GET["rota"];

    switch($_GET["rota"]) {
        
    }
}
else {
    $resposta = "";
}

function login() {
    
}