<?php
require_once("FabricaBanco.php");

class UsuarioDao {

    public function cadastrarUsuario($usuario) {
        $conexao = FabricaBanco::criarLigacao();
        try {
            $stmt = $conexao->prepare("insert into usuarios (usu_login, usu_senha, usu_data_inscricao, usu_estado) values(:login, :senha, :dataInscricao, :estado);");
            $stmt->execute(array(
                ':login' => $usuario->getLogin(),
                ':senha' => $usuario->getSenha(),
                ':dataInscricao' => $usuario->getDataInscricao(),
                ':estado' => $usuario->getEstado()
            ));

            return Usuario::SUCESSO; 
        }
        catch(PDOException $e) {
            echo "Error" . $e->getMessage();
        }

        return Usuario::ERRO;
    }

    //método para login
    public function buscarUsuario($login, $senha) {
        $conexao = FabricaBanco::criarLigacao();
        try {
            $stmt = $conexao->prepare("select * from usuarios where usu_login = :login and usu_senha = :senha;");
            $stmt->execute(array(
                ':login' => $login,
                ':senha' => $senha
            ));
            if($resultado = $stmt->fetch(PDO::FETCH_ASSOC))
            {
                return new Usuario($resultado['usu_id'], $resultado['usu_login'], $resultado['usu_senha'], $resultado['usu_data_inscricao'], $resultado['usu_estado']);
            }
            return null;
        }
        catch(PDOException $e) {
            echo "Error" . $e->getMessage();
        }

        return Usuario::ERRO;
    }

    //método para verificar se usuario já existe
    public function buscarUsuarioLogin($login) {
        $conexao = FabricaBanco::criarLigacao();
        try {
            $stmt = $conexao->prepare("select * from usuarios where usu_login = :login");
            $stmt->execute(array(
                ':login' => $login
            ));
            if($stmt->rowCount() > 0)
            {
                return Usuario::EXISTENTE;
            }
            else
            {
                return Usuario::SUCESSO;
            }
        }
        catch(PDOException $e) {
            echo "Error" . $e->getMessage();
        }

        return Usuario::ERRO;
    }

    public function buscarTodosUsuarios() {
        $conexao = FabricaBanco::criarLigacao();
        $arrayUsuarios = array();
        try {
            $resultado = $conexao->query("select * from usuarios;");
            foreach($resultado->fetchAll(PDO::FETCH_ASSOC) as $linha)
            {
                $arrayUsuarios[] = new Usuario($linha["usu_id"], $linha["usu_login"], $linha["usu_senha"], $linha["usu_data_inscricao"], $linha["usu_estado"]);
            }
            return $arrayUsuarios;
        }
        catch(PDOException $e) {
            echo "Error" . $e->getMessage();
        }
        return Usuario::ERRO;
    }
}