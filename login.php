<?php 
    if(!isset($_GET["rota"]) and !isset($_POST["rota"])) {
        include_once("condutor.php");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <title>Login Jogo</title>
</head>
<body>
    <div id="container">
        <div id="divDamas"><h1 id="titulo">Damas</h1></div>
        <form id="login" action="condutor.php" method="POST"> 
            <input id="inputLogin" class="input" type="text" name="login" placeholder="Login">
            <input id="inputPassword" class="input" type="password" name="password" placeholder="Senha">
            <span id="span"></span>
            <span id="textValidacao">
                <?php echo $resposta; ?>
            </span>
            <input id="rota" type="hidden" name="rota" value="login">
            <input id="btnEntrar" class="btn" type="button" value="Entrar">
            <p id="textCadastro">Cadastre-se</p>
        </form>
    </div>


    <script type="text/javascript" src="js/login.js"></script>
</body>
</html> 