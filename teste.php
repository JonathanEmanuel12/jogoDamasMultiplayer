<?php

// require_once("dao/FabricaBanco.php");
// require_once("dao/UsuarioDao.php");
// require_once("models/Usuario.php");

// $conexao = FabricaBanco::criarLigacao();

// $usuarioDao = new UsuarioDao();

// $arrayUsu = $usuarioDao->buscarTodosUsuarios();

require_once("./controle/Login.php");

$controleLogin = new Login();
echo $controleLogin->fazerLogin("igddccj", "3454a");
