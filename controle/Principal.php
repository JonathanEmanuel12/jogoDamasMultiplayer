<?php

require_once(dirname(__DIR__) . "\dao\UsuarioDao.php");
require_once(dirname(__DIR__) . "\dao\EncontroDao.php");

class Principal {

    public function buscarUsuariosLogados($usuario) {
        $usuarioDao = new UsuarioDao();
        $arrayUsuarios = $usuarioDao->buscarTodosUsuariosLogados($usuario);
        $arrayAlterado = array();
        for($i=0; $i<count($arrayUsuarios); $i++) {
            $arrayAlterado["Usuario" . $i] = $arrayUsuarios[$i];
        }
        
        return $arrayAlterado;
    }

    public function calcularVitorias($usuario) {
        $encontroDao = new EncontroDao();
        $resultado = $encontroDao->calcularVitorias($usuario);
        //mudar constante
        return ($resultado != Usuario::ERRO) ? $resultado : "Falha";
    }

    public function calcularDerrotas($usuario) {
        $encontroDao = new EncontroDao();
        $resultado = $encontroDao->calcularDerrotas($usuario);
        //mudar constante
        return ($resultado != Usuario::ERRO) ? $resultado : "Falha";
    }

    public function calcularEmpates($usuario) {
        $encontroDao = new EncontroDao();
        $resultado = $encontroDao->calcularEmpates($usuario);
        //mudar constante
        return ($resultado != Usuario::ERRO) ? $resultado : "Falha";
    }

    public function mudarEstado($usuario, $estado) {
        $usuarioDao = new UsuarioDao();
        
        if($usuarioDao->alterarEstado($usuario->getId(), $estado) == Usuario::SUCESSO)
        {
            return true;
        }
        return false;

    }

}