function VerificaChamados(){
   var titulos = document.getElementById("titulo").value
   var chamados = document.querySelector("#op-categoria")
   var tiposDeChamados = chamados.options[chamados.selectedIndex].text
   var descricao = document.getElementById("descricao").value

   var usuarios = localStorage.getItem("Usuario");
   var array = tiposDeChamados + ',' + descricao
   var arrayUsuarios = usuarios + ',' + titulos


   if(titulos == "" || tiposDeChamados.text == "" || descricao == ""){
        alert("preencha os campos");
        titulos.focus();
        return
    }

    else{
        localStorage.setItem(arrayUsuarios, array);
        alert("Chamado aberto com sucesso");
        window.location.href = "home.html";
    }

}
//chave                  valor
//arrayUsuarios          array
//usuario,titulos        tiposdechamados,descricao

/*
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
