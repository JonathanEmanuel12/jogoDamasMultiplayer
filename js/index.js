//variável caso as pecas precisem de id
//var nIdBtn = 0;
//variável que ajuda a determinar a cor de cada espaço
var controle = false;
var gridPrincipal = document.getElementById("gridPrincipal");   
var pecaEscolhida = {
    linha: 0,
    coluna: 0
};
var destino = {
    linha: 0,
    coluna: 0
};
var jogadaIniciada = false;

//principal

criarTabuleiro();
tingirTabuleiro();
criarPecas();
pegarEstatisticas();
pegarUsuarios();


function criarTabuleiro()
{
    for (var i=0; i<10; i++)
    {
        for(var j=0; j<10; j++)
        {
            var divTabuleiro = document.createElement("div");
            divTabuleiro.classList.add("grid_parte");
            divTabuleiro.id = i.toString() + j.toString();
         //   divTabuleiro.innerHTML = i.toString() + j.toString();
            gridPrincipal.appendChild(divTabuleiro);
        }
    }
}

function tingirTabuleiro() 
{
    for(var i=0; i<10; i++)
    {  
        for(var j=0; j<10; j++)
        {
            var div = document.getElementById(i.toString() + j.toString());
            if(controle == false)
            {
                div.style.backgroundColor = "#000";
            } else {
                div.style.backgroundColor = "#fff";
                div.style.cursor = "pointer";
                div.addEventListener("click", function(event) {
                    if(!(event.target.id == ""))
                    {
                        movPeca(event.target); 
                    }
                });
            }
            controle = !controle;
        }
        controle = !controle;
    }
}



function criarPecas()
{
    for(var i=0; i<10; i++)
    {
        var pecaBtn = document.createElement("button");
        var pecaBtn2 = document.createElement("button");
        var pecaBtn3 = document.createElement("button");
        var pecaBtn4 = document.createElement("button");

        pecaBtn.classList.add("peca_branca");
        pecaBtn2.classList.add("peca_branca");    
        pecaBtn3.classList.add("peca_preta");
        pecaBtn4.classList.add("peca_preta");

        pecaBtn.classList.add("btn_tabuleiro");
        pecaBtn2.classList.add("btn_tabuleiro");
        pecaBtn3.classList.add("btn_tabuleiro");
        pecaBtn4.classList.add("btn_tabuleiro");

        pecaBtn.addEventListener("click", function(event) {
            guardarPosicao(event.target);
        });
        pecaBtn2.addEventListener("click", function(event) {
            guardarPosicao(event.target);
        });
        pecaBtn3.addEventListener("click", function(event) {
            guardarPosicao(event.target);
        });
        pecaBtn4.addEventListener("click", function(event) {
            guardarPosicao(event.target);
        });

        if(i % 2 == 1)
        {
            document.getElementById("0" + i.toString()).appendChild(pecaBtn);
            document.getElementById("2" + i.toString()).appendChild(pecaBtn2);
            document.getElementById("6" + i.toString()).appendChild(pecaBtn3);
            document.getElementById("8" + i.toString()).appendChild(pecaBtn4);
        }
        else
        {
            document.getElementById("1" + i.toString()).appendChild(pecaBtn);
            document.getElementById("3" + i.toString()).appendChild(pecaBtn2);
            document.getElementById("7" + i.toString()).appendChild(pecaBtn3);
            document.getElementById("9" + i.toString()).appendChild(pecaBtn4);
        }
    }
}

function guardarPosicao(button)
{
    console.log("GuardarPosicao");    
    var div = button.parentNode;
    pecaEscolhida.linha = parseInt(div.id[0]);
    pecaEscolhida.coluna = parseInt(div.id[1]);
    jogadaIniciada = true;
    
}

function movPeca(divDestino)
{

    if(!jogadaIniciada)
    {
        return false;
    }   
    if(!divDestino.innerHTML == "")
    {
        return false;
    }

    destino.linha = parseInt(divDestino.id[0]);
    destino.coluna = parseInt(divDestino.id[1]);
    retirarPeca = false;
    var divOrigem = document.getElementById(pecaEscolhida.linha.toString() + pecaEscolhida.coluna.toString());

    console.log("origem: linha " + pecaEscolhida.linha + " coluna " + pecaEscolhida.coluna);
    console.log("destino: linha " + destino.linha + " coluna " + destino.coluna);

    if((pecaEscolhida.linha == (destino.linha + 1)) & ((pecaEscolhida.coluna == (destino.coluna - 1)) | (pecaEscolhida.coluna == (destino.coluna + 1))))
    {        
        console.log("chegou aqui");
        divDestino.appendChild(divOrigem.children[0]);
        divOrigem.innerHTML = "";
    }

    else if((pecaEscolhida.linha == (destino.linha + 2)) & (pecaEscolhida.coluna == (destino.coluna - 2)))
    {
        if(document.getElementById((destino.linha + 1).toString() + (destino.coluna - 1).toString()).children[0] != undefined)
        {
            divDestino.appendChild(divOrigem.children[0]);
            divOrigem.innerHTML = "";
            document.getElementById((destino.linha + 1).toString() + (destino.coluna - 1).toString()).innerHTML = "";
        }
    }
    else if((pecaEscolhida.linha == (destino.linha + 2)) & (pecaEscolhida.coluna == (destino.coluna + 2)))
    {
        console.log((pecaEscolhida.linha + 1).toString() + (pecaEscolhida.coluna + 1).toString());
        if(document.getElementById((destino.linha + 1).toString() + (destino.coluna + 1).toString()).children[0] != undefined)
        {
            divDestino.appendChild(divOrigem.children[0]);  
            divOrigem.innerHTML = ""
            document.getElementById((destino.linha + 1).toString() + (destino.coluna + 1).toString()).innerHTML = "";
        }
    }
    else if((pecaEscolhida.linha == (destino.linha - 2)) & (pecaEscolhida.coluna == (destino.coluna - 2)))
    {
        if(document.getElementById((destino.linha - 1).toString() + (destino.coluna - 1).toString()).children[0] != undefined)
        {
            divDestino.appendChild(divOrigem.children[0]);
            divOrigem.innerHTML = "";
            document.getElementById((destino.linha - 1).toString() + (destino.coluna - 1).toString()).innerHTML = "";
        }
    }
    else if((pecaEscolhida.linha == (destino.linha - 2)) & (pecaEscolhida.coluna == (destino.coluna + 2)))
    {
        if(document.getElementById((destino.linha - 1).toString() + (destino.coluna + 1).toString()).children[0] != undefined)
        {
            divOrigem.appendChild(diivOrigem.children[0]);
            divOrigem.innerHTML = "";
            document.getElementById((destino.linha - 1).toString() + (destino.coluna + 1).toString()).innerHTML = "";
        }
    }

    jogadaIniciada = false;
}

function pegarEstatisticas() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'condutor.php?rota=calcularEstatisticas&idUsuario=' + document.getElementById("idUsuario").value);

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                passarEstatisticasCampos(JSON.parse(xhr.responseText));
            }
        }
    }

    xhr.send();
}

function passarEstatisticasCampos(resultados) {
    document.getElementById("vitorias").innerHTML = "Vitórias:" + resultados.vitorias ;
    document.getElementById("derrotas").innerHTML = "Derrotas:" + resultados.derrotas;    
    document.getElementById("empates").innerHTML = "Empates:" + resultados.empates;  
}

function pegarUsuarios() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'condutor.php?rota=buscarUsuarios&idUsuario=' + document.getElementById("idUsuario").value);
    console.log("Eita");

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                passarUsuariosCampos(JSON.parse(xhr.responseText));
            }
        }
    }

    xhr.send();
}

function passarUsuariosCampos(usuarios) {

    var divJogadores = document.getElementById("containerJogadores");

    for(var j=0; j<Object.keys(usuarios).length; j++) {
        
        var divJogador = document.createElement("div");
        divJogador.classList.add("jogador");

        var pJogador = document.createElement("p");
        pJogador.innerHTML = usuarios["Usuario" + j.toString()].login;
        divJogador.appendChild(pJogador);

        if(usuarios["Usuario" + j.toString()].estado == "Online")
        {
            var btnJogador = document.createElement("button");
            btnJogador.classList.add("btn_jogador");
            btnJogador.innerHTML = '<i class="fas fa-plus"></i>';
            divJogador.appendChild(btnJogador);
        }
        
        


        var pEstado = document.createElement("p");
        pEstado.classList.add("estado");
        pEstado.innerHTML = usuarios["Usuario" + j.toString()].estado;
        divJogador.appendChild(pEstado);
        
        divJogadores.appendChild(divJogador);
    }
}
