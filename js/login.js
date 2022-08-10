
var admin = {
    username: "admin",
    senha: "1234"
}

function Login(){

    var login = document.getElementById("login").value
    var senha = document.getElementById("password").value 

    if(login == admin.username){
        if(senha == admin.senha){

        }
    }

    console.log(login)
    alert("para")
}

