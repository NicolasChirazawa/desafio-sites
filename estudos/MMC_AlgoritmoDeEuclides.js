// Material para estudar sobre: (https://pt.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm#:~:text=O%20Algoritmo%20Euclidiano%20para%20encontrar,e%20podemos%20parar%20a%20verifica%C3%A7%C3%A3o.)

function algortimoEuclides(valor_1, valor_2){
    
    let menor_valor;
    let maior_valor;

    if(valor_1 > valor_2){
        maior_valor = valor_1;
        menor_valor = valor_2
    } else {
        menor_valor = valor_1;
        maior_valor = valor_2;
    }

    // Ele funciona com a seguinte lógica. Quando um mmc ocorre com um número e o outro sendo obrigatoriamente '0', o mmc é o próprio número, como MMC(6, 0), é 6.
    
    // Assim são realizadas sucessivas divisões entre o maior e o menor número, descartando o dividendo, e a partir do resto, chega na resposta

    while(menor_valor != 0){
        let resto = maior_valor % menor_valor;

        maior_valor = menor_valor;
        menor_valor = resto;

    }
    
    return maior_valor;
}

function main() {
    // O Algoritmo de Euclides tem a função de achar rapidamente um MMC de dois números.
    let valor_1 = 270;
    let valor_2 = 192;

    let mmc = algortimoEuclides(valor_1, valor_2);

    console.log(mmc);
}
main();