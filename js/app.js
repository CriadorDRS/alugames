let jogosAlugados = []; //Cria uma lista para  guardar qual jogo está alugado

function alterarStatus(status, elemento) { //Função para mudar o status de 'Alugar' para 'Devolver'

    const img = document.getElementById("imagem-"+status); //Identifica a imagem associada ao botão
    let texto = document.getElementById("jogo-"+status);   //Identifica o texto associado ao botão
    
    if (jogosAlugados.length < 1) { //Condicional que verifica se existe um jogo alugado
        jogosAlugados.push(status);                                   //Adiciona o jogo à lista de jogos alugados
        elemento.classList.add('dashboard__item__button--return');    //Escurece o botão de alugar
        img.parentNode.classList.add('dashboard__item__img--rented'); //Escurece a imagem do jogo
        texto.innerHTML = "Devolver";                                 //Muda o texto do botão de "Alugar" para "Devolver"
    } else {
        if (jogosAlugados.includes(status)){ //Condicional que verfica se o jogo clicado já está alugado
            jogosAlugados = [];                                              //Retira o jogo da lista de alugados
            elemento.classList.remove("dashboard__item__button--return");    //Volta o botão ao modo normal
            img.parentNode.classList.remove("dashboard__item__img--rented"); //Volta a imagem ao modo normal
            texto.innerHTML = "Alugar";                                      //Muda o texto do botão de "Devolver" para "Alugar"
        } else {
            alert("Ops! Você já tem um jogo alugado, devolva ele antes de alugar outro"); //Avisa o usuário que um jogo já está alugado
        }
    }
}