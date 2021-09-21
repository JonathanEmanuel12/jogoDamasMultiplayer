<?php

class FabricaBanco {

    private function __construct() {

    }

    public static function criarLigacao() {
        $conexao = null;
        try{
            $conexao = new PDO('mysql:host=localhost;dbname=dama', "root", "@Tomate14");
            $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
        return $conexao;
    }
}