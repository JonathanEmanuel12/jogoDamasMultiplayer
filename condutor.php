<?php

include_once("./controle/Login.php");
include_once("./controle/Principal.php");

$rota = "";

//protótipo de rotas

if(isset($_POST["rota"])) {


    $resposta;
    $controleLogin = new Login();

    //rotas POST
    switch($_POST["rota"]) {

        //rota para login 
        case "login":
            $resposta = $controleLogin->fazerLogin($_POST["login"], $_POST["password"]);
            
            if(is_string($resposta)) {
                echo $resposta;
                include_once("./login.php");
            }
            else {
                if($controleLogin->mudarEstado($resposta) || $resposta->getEstado() != Usuario::OFFLINE)
                {
                    include_once("./index.php");
                }
            }
            break;

        //rota para cadastro
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

        case "logoffUsuario": 
            $controlePrincipal = new Principal();
            $usuario = new Usuario();
            if(isset($_POST["idUsuario"])) {
                $usuario->setId($_POST["idUsuario"]);
                $controlePrincipal->mudarEstado($usuario, Usuario::OFFLINE);
            }
            $resposta = "";
            include_once("login.php");
    }
}
//rotas GET
else if(isset($_GET["rota"])) {

    switch($_GET["rota"]) {
        case "calcularEstatisticas" :
            $controlePrincipal = new Principal();
            $usuario = new Usuario();
            $usuario->setId($_GET["idUsuario"]);
            $resultados = array(
                "vitorias" => 0,
                "derrotas" => 0,
                "empates" => 0,
            );
            $resultados["vitorias"] = $controlePrincipal->calcularVitorias($usuario);
            $resultados["derrotas"] = $controlePrincipal->calcularDerrotas($usuario);
            $resultados["empates"] = $controlePrincipal->calcularEmpates($usuario);
            
            echo json_encode($resultados);
            break;

        case "buscarUsuarios" :
            $controlePrincipal = new Principal();
            if(isset($_GET["idUsuario"])) {
             //   echo $_GET["idUsuario"];
                echo json_encode($controlePrincipal->buscarUsuariosLogados($_GET["idUsuario"]));
            }
            
            break;
    }
    

}

//rota inicial
else {
    $resposta = "";
}
