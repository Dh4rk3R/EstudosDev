function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
   
    // Inicializa uma string para armazenar os resultados da pesquisa
    let campoPesquisa = document.getElementById("campoPesquisa").value
    


    //Condição par validar se vazio
    if(!campoPesquisa == ''){
        section.innerHTML = "<h2> Nada foi encontrado T-T</h2>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();
        //se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
                    //então faça isso..
        console.log(dado.titulo.includes(campoPesquisa))
        // Cria um elemento div para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Saiba mais!</a>
                </h2>
            </div>`;
        }
         if(!resultados){
        resultados = "<h2>Dados não encontrado!</h2>"
        }

        // Atualiza o conteúdo da seção com os resultados da pesquisa
        section.innerHTML = resultados;
    
    }
}


// <img src="${dado.imagem}"> - Pedaço do cód que não teve funcionamento..