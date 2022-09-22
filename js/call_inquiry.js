//usuario logado
const user = localStorage.getItem('Usuario');

//['Usuario', 'jose,PC pifou', 'jose,Minha internet', 'jose,Outlook']
const keys = Object.keys(localStorage);

// var x = localStorage.getItem('jose,Outlook')
// Usuario [0]
// jose,PC pifou [1]
// jose,Minha internet caiu [2]
// jose,Outlook [3]

var arrayChamados = []
/*
[
    {
        titulo: 'PC pifou',
        categoria: 'Software',
        descricao: 'dasdadas'
    },

    {
        titulo: 'Minha internet caiu',
        categoria: 'Hardware',
        descricao: 'Estou sem internet desde ..'
    },

    {
        titulo: 'Outlook',
        categoria: 'Software',
        descricao: 'Problema com email'
    },
]
*/

for(var x = 0; x < keys.length; x++){

    //jose,Minha internet caiu
    if(keys[x] != 'Usuario'){

        let splitKey = keys[x].split(',')
        //[jose, Minha internet caiu]

        if(splitKey[0] == user){

            var value = localStorage.getItem(keys[x])
            var valueSplit = value.split(',')
            //[Hardware, Estou sem intenet desde]

            var chamado = {
                titulo: splitKey[1],
                categoria: valueSplit[0],
                descricao: valueSplit[1]
            }

            arrayChamados.push(chamado)
        }
    }
}


for(var x = 0; x < arrayChamados.length; x++){

    var divPrincipal = document.getElementById("principal");

        var html = 
        `<div class="row mt-2"> 
            <div class="col-6 m-auto">
                <div class="card">
                    <div class="card-header">
                        ${arrayChamados[x].titulo}
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">
                            ${arrayChamados[x].categoria}
                        </h6>
                        <p class="card-text">
                            ${arrayChamados[x].descricao}
                        </p>
                    </div>
                </div>
            </div>
        </div>`

    divPrincipal.innerHTML = divPrincipal.innerHTML + html;
}

// var nome = "Alex de Araujo da Silva"

// var x = nome.split('x')

// ['Ale', 'de Araujo da Silva']


// var nome2 = '20/12/2009'

// var split = nome2.split('/')

// ['20', '12', '2009']


// var nome = "Ariane"

// nome.split('i')

// ['ar', 'ane']





