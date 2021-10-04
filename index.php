<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crosssorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/10d610690b.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/index.css">
    <title>Damas Online</title>
</head>
<body>
    <div id="containerComLogin">
        <div id="containerUsuario" class="cont_geral">
            <h1 id="tituloUsuario"><?php echo $resposta->getLogin() ?></h1>
            <input id="estadoUsuario" type="hidden" value="<?php echo $resposta->getEstado() ?>">
            <li id="vitorias">Vitórias:0</li>
            <li id="derrotas">Derrotas:0</li>
            <li id="empates">Empates:0</li>
        </div>
        <form class="sair" action="condutor.php" method="POST">
            <input type="hidden" name="rota" value="logoffUsuario">
            <input id="idUsuario" name="idUsuario" type="hidden" value="<?php echo $resposta->getId() ?>">
            <input id="sair" type="submit" value="Sair">
        </form>
    </div>
    <div id="gridPrincipal">

    </div> 
    <div id="containerJogadores" class="cont_geral">
    </div>
    
    <script type="text/javascript" src="js/index.js"></script>  
</body>
</html>