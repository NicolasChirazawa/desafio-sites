// 13A - Numbers (https://codeforces.com/contest/13/problem/A)

/*
Little Petya likes numbers a lot. He found that number 123 in base 16 consists of two digits: the first is 7 and the second is 11. So the sum of digits of 123 in base 16 is equal to 18.

Now he wonders what is an average value of sum of digits of the number A written in all bases from 2 to A - 1.

Note that all computations should be done in base 10. You should find the result as an irreducible fraction, written in base 10.

Input
Input contains one integer number A (3 ≤ A ≤ 1000).

Output
Output should contain required average value in format «X/Y», where X is the numerator and Y is the denominator.

/* Common Template Starts */
 
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});
 
process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });
 
    main();
});
 
function readline() {
    return inputString[currentLine++];
}
/* Common Template Ends */
 
function calcular_base(valor, base){
    let resto_soma = 0;
 
    while(valor >= base){
        resto_soma += valor % base;
        valor = Math.floor(valor / base);
    }
 
    if(valor > 0 && base > valor) { 
        resto_soma += valor 
    }
    return resto_soma;
}
 
/* Resolvido com loop em 18/12/24 
 
function montar_fracao_irredutivel_loop(numerador, denominador){
    for(let i = 2; i < (denominador - 1); i++){
        if(numerador % i == 0 && denominador % i == 0){
            numerador /= i;
            denominador /= i;
 
            i = 1;
        }
    }
    return numerador + '/' + denominador;
}
*/
 
function montar_fracao_irredutivel(numerador, denominador){
    
    let mdc = [numerador, denominador];
 
    while(mdc[1] != 0){
        let valor_numerador = mdc[1];
        mdc[1] = mdc[0] % mdc[1];
        mdc[0] = valor_numerador;
    }
 
    return(numerador/mdc[0] + '/' + denominador/mdc[0]);
}
 
function main() {
 
    const valor = Number(readline());
    let base_contador = 2;
    let numerador = 0;
 
    // Loop para realizar o processo de progressão das bases
    while(base_contador <= (valor - 1)){
 
        // Numerador
        numerador += calcular_base(valor, base_contador);
 
        base_contador++;
    }
 
    // 1 é dado no final para matar o loop, e o outro é pelo contador começar no 1;
    let denominador = base_contador - 2;
 
    console.log(montar_fracao_irredutivel(numerador, denominador));
}