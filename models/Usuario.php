<?php

class Usuario implements JsonSerializable {

    //constantes de banco
    const ERRO = 0;
    const EXISTENTE = 1;
    const SUCESSO = 2;  
    
    //constantes de estado
    const OFFLINE = 0;
    const ONLINE = 1;
    const JOGANDO = 2;

    private $id;
    private $login;
    private $senha;
    private $dataInscricao;
    private $estado;


    public function __construct($id = 0, $login = "" , $senha = "", $dataInscricao = "", $estado = "") {
        if($estado != "") {
            $this->id = $id;
            $this->login = $login;
            $this->senha = $senha;
            $this->dataInscricao = $dataInscricao;
            $this->estado = $estado;
        }
    }

    public function setId($id) {
        $this->id = $id;
    }
    public function getId() {
        return $this->id;
    }

    public function setLogin($login) {
        $this->login = $login;
    }
    public function getLogin() {
        return $this->login;
    }

    public function setSenha ($senha) {
        $this->senha = $senha;
    }
    public function getSenha() {
        return $this->senha;
    }

    public function setDataInscricao ($dataInscricao) {
        $this->dataInscricao = $dataInscricao;
    }
    public function getDataInscricao () {
        return $this->dataInscricao;
    }

    public function setEstado($estado) {
        $this->estado = $estado;
    }   
    public function getEstado() {
        return $this->estado;
    }

    public function jsonSerialize() {
        $estadoString = "";
        switch($this->estado) {
            case Usuario::OFFLINE:
                $estadoString = "Offline";
                break;
            case Usuario::ONLINE:
                $estadoString = "Online";
                break;
            case Usuario::JOGANDO:
                $estadoString = "Jogando";
                break;
        }
        return [
            "id" => $this->id,
            "login" => $this->login,
            "dataInscricao" => $this->dataInscricao,
            "estado" => $estadoString
        ];
    }

}