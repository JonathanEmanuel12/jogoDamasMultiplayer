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

//terminar else ifs

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