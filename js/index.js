var controle = false;

var gridPrincipal = document.getElementById("gridPrincipal");   

for (var i=0; i<10; i++)
{
    for(var j=0; j<10; j++)
    {
        var divTabuleiro = document.createElement("div");
        divTabuleiro.classList.add("grid_parte");
        divTabuleiro.id = i.toString() + j.toString();
        divTabuleiro.innerHTML = i.toString() + j.toString();
        gridPrincipal.appendChild(divTabuleiro);
    }
}
for(var i=0; i<10; i++)
{
    for(var j=0; j<10; j++)
    {
        if(controle == false)
        {
            document.getElementById(i.toString() + j.toString()).style.backgroundColor = "#000";
        } else {
            document.getElementById(i.toString() + j.toString()).style.backgroundColor = "#fff";
        }
        controle = !controle;
    }
    controle = !controle;
}

