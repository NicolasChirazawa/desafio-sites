const SEM_LANCE = 0;
const JOGO_EM_ANDAMENTO = '';

const jogo = {
   
    /*
     0: Sem lance,
     1: Lance X,
     2: Lance Y
    */

    posicaoValor: [SEM_LANCE, SEM_LANCE, SEM_LANCE, SEM_LANCE, SEM_LANCE, SEM_LANCE, SEM_LANCE, SEM_LANCE, SEM_LANCE],
    lance: 1,
    quantidadeLance: 0,
    resultado: JOGO_EM_ANDAMENTO,
}

addEventListener("click", (e) => {
    //Obtenho a tag clicada e o id indicado
    let valor = [e.target.localName, Number(e.target.attributes.id?.nodeValue)];

    //Não segue se o clique não for num 'td'
    if(valor[0] != 'td') { return }

    //Verificação do resultado do jogo
    if(jogo.resultado != JOGO_EM_ANDAMENTO) { 
        console.log(jogo.resultado);
        return 
    }

    jogada(valor);
    condicaoVitoria();
})

function jogada(valor){
    // Lance inválido -> Valor do array diferente de 0
    if( jogo.posicaoValor[valor[1] - 1] != SEM_LANCE) { 
        return 
    } else {
        jogo.posicaoValor[valor[1] - 1] = jogo.lance;
        mudarCaractere(valor);
        passarLance();
    }
}

function mudarCaractere (valor) {
    let letra = document.getElementById(String(valor[1]));
    if(jogo.lance == 1){
        letra.children[0].innerHTML = 'X'
    } else {
        letra.children[0].innerHTML = 'O'
    }
}

function passarLance(){
    if(jogo.lance % 2 == 0){
        jogo.lance = 1;
    } else {
        jogo.lance++;
    }
}

function condicaoVitoria(){
    
    // Vitória
    for(let i = 0; i < jogo.posicaoValor.length; i++){
        // Verificação horizontal
        for(let j = 1; j <= 2; j++){
            if (jogo.posicaoValor[0 + (i * 3)] == j && jogo.posicaoValor[1 + (i * 3)] == j && jogo.posicaoValor[2 + (i * 3)] == j){
                console.log('horizontal');
                jogo.resultado = j % 2 == 0 ? 'Vitória do O' : 'Vitória do X'
                return 
            }

        // Verificação vertical
            if (jogo.posicaoValor[0 + i] == j && jogo.posicaoValor[3 + i] == j && jogo.posicaoValor[6 + i] == j){
                console.log('vertical');
                jogo.resultado = j % 2 == 0 ? 'Vitória do O' : 'Vitória do X'
                return 
            }
        }
    }
    for(let i = 1; i <= 2; i++){
        // Verificação diagonais
        if(jogo.posicaoValor[0] == i && jogo.posicaoValor[4] == i && jogo.posicaoValor[8] == i){
            console.log("diagonal");
            jogo.resultado = i % 2 == 0 ? 'Vitória do O' : 'Vitória do X'
            return 
        }
        if(jogo.posicaoValor[2] == i && jogo.posicaoValor[4] == i && jogo.posicaoValor[6] == i){
            console.log("diagonal");
            jogo.resultado = i % 2 == 0 ? 'Vitória do O' : 'Vitória do X'
            return 
        }
    }

    // Empate
    jogo.quantidadeLance++;
    if(jogo.quantidadeLance == 9) { jogo.resultado = 'Empate' }
}