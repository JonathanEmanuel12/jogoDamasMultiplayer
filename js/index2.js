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
    for (var i=9; i>=0; i--)
    {
        for(var j=9; j>=0; j--)
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

        pecaBtn.classList.add("peca_preta");
        pecaBtn2.classList.add("peca_preta");    
        pecaBtn3.classList.add("peca_branca");
        pecaBtn4.classList.add("peca_branca");

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
    
    var div = button.parentNode;
    pecaEscolhida.linha = div.id[0];
    pecaEscolhida.coluna = div.id[1];
    jogadaIniciada = true;
    
}

function movPeca(div)
{

    if(!jogadaIniciada)
    {
        return false;
    }   
    if(!div.innerHTML == "")
    {
        return false;
    }

    destino.linha = div.id[0];
    destino.coluna = div.id[1];

    console.log(destino.linha);
    console.log(destino.coluna);
}