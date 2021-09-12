var controle = 0;
console.log("Eita");
for(var i=0; i<9; i++)
{
    if(controle == 0)
    {
        document.getElementById("0"+i.toString()).style.backgroundColor = "#000";
        controle = 1;
    } else {
        console.log("0"+i.toString())
        document.getElementById("0"+i.toString()).style.backgroundColor = "#fff";
        controle = 0;
    }
}