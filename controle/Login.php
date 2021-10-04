<?php

require_once(dirname(__DIR__) . "\dao\UsuarioDao.php");
require_once(dirname(__DIR__) . "\models\Usuario.php");

class Login {
    public function fazerLogin($login, $senha) {
        $usuarioDao = new UsuarioDao();
        $resposta = $usuarioDao->buscarUsuario($login, $senha);

        if($resposta === Usuario::ERRO){
            return "Falha na comunicação, favor tentar mais tarde";
        }
        if($resposta === null) {
            return "Login ou senha incorretos";
        }
        return $resposta;
    }

    public function cadastrarUsuario($login, $senha) {
        $usuarioDao = new UsuarioDao();
        if($usuarioDao->buscarUsuarioLogin($login) == Usuario::SUCESSO)
        {
            $usuario = new Usuario();
            $usuario->setLogin($login);
            $usuario->setSenha($senha);
            $usuario->setDataInscricao(date('Y/m/d'));
            $usuario->setEstado(Usuario::OFFLINE);

    
            $resposta = $usuarioDao->cadastrarUsuario($usuario);
            if($resposta == Usuario::ERRO) {
                return "Falha na comunicação, favor tentar mais tarde";
            }

            return $resposta;
        }
        else {
            return "Login já existe, por favor use outro";
        }
    }

    public function mudarEstado($usuario) {
        $usuarioDao = new UsuarioDao();
        
        if($usuarioDao->alterarEstado($usuario->getId(), Usuario::ONLINE) == Usuario::SUCESSO)
        {
            return true;
        }
        return false;

    }
}