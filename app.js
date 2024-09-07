function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Inicializa uma string para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        // Cria um elemento div para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Saiba mais!</a>
                </h2>
            </div>
        `;
    }

    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
}


// <img src="${dado.imagem}"> - Pedaço do cód que não teve funcionamento..