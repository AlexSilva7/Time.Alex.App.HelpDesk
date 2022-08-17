
var admin = {
    username: "admin",
    password: "1234"
}

var maria = {
    username: "maria",
    password: "1234"
}

var jose = {
    username: "jose",
    password: "1234"
}

var arrayUsuarios = [admin, maria, jose];

function Entrar(){

    var login = document.getElementById("login")
    var senha = document.getElementById("password")

    if(login.value == "" || senha.value == "" ){
        alert("preencha os campos");
        login.focus();
        return
    }

    var usuario = VerificaLogin(login.value)
    
    if(usuario == null){
        ChamaErro(login, senha);
        return;
    }

    if(senha.value == usuario.password){
        alert("Logado com sucesso!");
        localStorage.setItem("Usuario", login.value);
        window.location.href = "home.html"; 

    }else{
        ChamaErro(login, senha);
    }

}

function ChamaErro(elementoLogin, elementoSenha){
    const element = document.getElementById('erros');
    element.classList.remove('d-none');
    elementoLogin.value = ""
    elementoSenha.value = ""
    elementoLogin.focus();
}

function VerificaLogin(usuario){

    for(var x = 0; x < arrayUsuarios.length; x++){

        if(usuario == arrayUsuarios[x].username){

            return arrayUsuarios[x]

        }

    }
}

function RetornaDNone(){
    const element = document.getElementById('erros')
    element.classList.add('d-none')
}
