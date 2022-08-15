
function VerificarCredenciais(){

    var verificaLogin = localStorage.getItem("Usuario")

    if(verificaLogin == null){
        alert("Favor fazer login antes de acessar esse conteudo")
        window.location.href = "login.html";
    }
    
    //localStorage.clear()
}

window.onpaint = VerificarCredenciais();


