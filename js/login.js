
var admin = {
    username: "admin",
    senha: "1234"
}


function Login(){

    var login = document.getElementById("login").value
    var senha = document.getElementById("password").value 
    //window.location.href = "home.html";
    if(login == admin.username){
        alert(login)
        localStorage.setItem("Usuario", login);
        window.location.href = "home.html"; 
    }
   /* if(login == admin.username && senha == admin.senha){
        localStorage.setItem("Usuario", login);
        //window.location.href = "www.google.com.br";
        window.location.assign("http://pt.stackoverflow.com");
    }
    else{
        
  } */
}
