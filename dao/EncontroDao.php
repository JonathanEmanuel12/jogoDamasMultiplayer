<?php 

require_once("FabricaBanco.php");

class EncontroDao {

    public function calcularVitorias($usuario) {
        $conexao = FabricaBanco::criarLigacao();
        try {
            $resultado = $conexao->query("select count(*) 'vitorias' from encontros where (enc_usu_2_id = {$usuario->getId()} or enc_usu_id = {$usuario->getId()}) and enc_vencedor_id = {$usuario->getId()};");
            foreach($resultado->fetchAll(PDO::FETCH_ASSOC) as $dado) {
                return $dado["vitorias"];
            }
        }
        catch(PDOException $e)
        {
            echo "Erro" . $e->getMessage();
        }

        return Usuario::ERRO;
    }

    public function calcularDerrotas($usuario) {
        $conexao = FabricaBanco::criarLigacao();
        try {
            $resultado = $conexao->query("select count(*) as 'derrotas' from encontros where (enc_usu_2_id = {$usuario->getId()} or enc_usu_id = {$usuario->getId()}) and (enc_vencedor_id != {$usuario->getId()} and enc_vencedor_id != 0);");
            foreach($resultado->fetchAll(PDO::FETCH_ASSOC) as $dado) {
                return $dado["derrotas"];
            }
        }
        catch(PDOException $e)
        {
            echo "Erro" . $e->getMessage();
        }

        return Usuario::ERRO;
    }
// mudar constante   
    public function calcularEmpates($usuario) {
        $conexao = FabricaBanco::criarLigacao();
        try {
            $resultado = $conexao->query("select count(*) as 'empates' from encontros where (enc_usu_2_id = {$usuario->getId()} or enc_usu_id = {$usuario->getId()}) and enc_vencedor_id = 0;");
            foreach($resultado->fetchAll(PDO::FETCH_ASSOC) as $dado) {
                return $dado['empates'];
            }
        }
        catch(PDOException $e)
        {
            echo "Erro" . $e->getMessage();
        }

        return Usuario::ERRO;
    }
}