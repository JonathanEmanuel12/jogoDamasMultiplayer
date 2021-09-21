const LOGIN = {
    BTN: "Entrar",
    CADASTRO: "Cadastre-se"
};
const CADASTRO = {
    BTN: "Cadastrar",
    CADASTRO: "Fazer login"
};

var textCadastro = document.getElementById("textCadastro");
var btnEntrar = document.getElementById("btnEntrar");
var form = document.getElementById("login");
var textValidacao = document.getElementById("textValidacao");

textCadastro.addEventListener("click", function(event) {
    alterarTextos(event.target.innerHTML);
});

function alterarTextos(conteudoCadastro) {
    textValidacao.innerHTML = "";
    var inputRota = document.getElementById("rota");

    if(conteudoCadastro == LOGIN.CADASTRO) {
        btnEntrar.value = CADASTRO.BTN;
        textCadastro.innerHTML = CADASTRO.CADASTRO;
        var input = criarConfSenha();
        form.style.height = "300px";
        form.replaceChild(input, form.children[2]);
        inputRota.value = "cadastro";
    }
    else
    {
        btnEntrar.value = LOGIN.BTN;
        textCadastro.innerHTML = LOGIN.CADASTRO;
        var span = document.createElement("span");   
        form.style.height = "220px";
        form.replaceChild(span, form.children[2]);     
        inputRota.value = "login";
    }


}

btnEntrar.addEventListener("click", function(event) {
    validarForm();
})


function criarConfSenha() {
    var input = document.createElement("input");
    input.id = "inputConfSenha";
    input.classList.add("input");
    input.type = "password";
    input.name = "password";
    input.placeholder = "Confirme sua senha";
    input.style.marginBottom = "20px";
    input.style.marginTop = "-15px";

    return input;
}

function validarForm(tipoForm) {
    var inputLogin = document.getElementById("inputLogin");
    var inputPassword = document.getElementById("inputPassword");
    var valLogin = false;
    var valSenha = false;
    textValidacao.innerHTML = "";


    if(isNaN(inputLogin.value) & inputLogin.value.length > 2 & inputLogin.value.length < 33)
    {
        valLogin = true;
    }
    else
    {
        textValidacao.innerHTML = "Login: tamanho max = 32 e min = 3; deve haver letras";
    }

    if(isNaN(inputPassword.value) & inputPassword.value.length > 3 & inputPassword.value.length < 17)
    {
        valSenha = true;
    }
    else
    {
        console.log("asd");
        textValidacao.innerHTML += "</br> Senha: tamanho max = 16 e min = 4; deve haver letras";
        form.style.height = "300px";
    }

    console.log(btnEntrar.value == CADASTRO.BTN);
    if(btnEntrar.value == CADASTRO.BTN)
    {
        if(document.getElementById("inputConfSenha").value == inputPassword.value & valSenha & valLogin)
        {    
            form.submit();
        }
        else 
        {
            textValidacao.innerHTML += "</br> Senhas não conferem";
            valSenha = false;
        }
    }
    
    
    if(valSenha & valLogin)
    {
        form.submit();
    }
}

if(form.children[3] == "Login já existe, por favor use outro")
{
    alterarTextos(LOGIN.BTN);
    
}