
var admin = {
    username: "admin",
    password: "1234"
}

function Entrar(){

    var login = document.getElementById("login").value
    var senha = document.getElementById("password").value 

    if(login == admin.username && senha == admin.password){
        alert("Logado com sucesso!");
        localStorage.setItem("Usuario", login);
        window.location.href = "home.html"; 
    }else{
        alert("Login ou senha incorretos!");
    }
    
}
