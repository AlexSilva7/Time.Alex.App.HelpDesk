
function VerificarCredenciais(){

    var verificaLogin = localStorage.getItem("Usuario")

    if(verificaLogin == null){
        alert("Favor fazer login antes de acessar esse conteudo")
        window.location.href = "login.html";
        localStorage.removeItem("Usuario")
    }
    
}

window.onpaint = VerificarCredenciais();


/*
var titulo = "dasdsa"
var categoria = "dadsa"
var descricao = "dasdsa"

var array = [categoria, descricao]

var usuario = localStorage.GetItem("Usuario")

var usuarioChamado = [usuario, titulo]

jogar no localStorage(usuarioChamado, array);


//como vai ficar
     chave                                 valor
[jose, "PC nao liga"]         [categoria, descricao]
[jose, "problema com email"   [categoria, descricao]
jose                          [categoria, descricao]
jose                          [ategoria, descricao]
*/


