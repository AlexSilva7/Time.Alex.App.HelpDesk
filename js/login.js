
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

function Entrar(){

    var login = document.getElementById("login")
    var senha = document.getElementById("password")

    if(login.value == "" || senha.value == "" ){
        alert("preencha os campos");
        login.focus();
        return
    }

    if(login.value == admin.username && senha.value == admin.password){
        alert("Logado com sucesso!");
        localStorage.setItem("Usuario", login);
        window.location.href = "home.html"; 
    }else{
        const element = document.getElementById('erros');
        element.classList.remove('d-none');
        login.value = ""
        senha.value = ""
        login.focus();
    }
}
