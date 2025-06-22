// 45I - TCMCF+++ (https://codeforces.com/contest/45/problem/I) 

/*
    Vasya has gotten interested in programming contests in TCMCF+++ rules. On the contest n problems were suggested and every problem had a cost — a certain integral number of points (perhaps, negative or even equal to zero). According to TCMCF+++ rules, only accepted problems can earn points and the overall number of points of a contestant was equal to the product of the costs of all the problems he/she had completed. If a person didn't solve anything, then he/she didn't even appear in final standings and wasn't considered as participant. Vasya understood that to get the maximal number of points it is not always useful to solve all the problems. Unfortunately, he understood it only after the contest was finished. Now he asks you to help him: find out what problems he had to solve to earn the maximal number of points.

    Input
    The first line contains an integer n (1 ≤ n ≤ 100) — the number of the suggested problems. The next line contains n space-separated integers ci ( - 100 ≤ ci ≤ 100) — the cost of the i-th task. The tasks' costs may coinсide.

    Output
    Print space-separated the costs of the problems that needed to be solved to get the maximal possible number of points. Do not forget, please, that it was necessary to solve at least one problem. If there are several solutions to that problem, print any of them.
*/

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

function main() {
    let quantidade = Number(readline());
    let valores = readline().split(' ').map((elemento) => Number(elemento));

    let multiplicacao_positiva = [];
    let zero = false;
    let multiplicacao_negativa = [];

    for(let i = 0; i < quantidade; i++) {
        if(valores[i] > 0) {
            multiplicacao_positiva.push(valores[i]);
        } else if(valores[i] < 0) {
            multiplicacao_negativa.push(valores[i]);
        } else { 
            zero = true;
        }
    }

    if (multiplicacao_positiva.length == 0 && multiplicacao_negativa.length <= 1 && zero === true) {
        return console.log(0);
    }

    if(multiplicacao_negativa.length > 0) {
        multiplicacao_negativa.sort((a, b) => a - b);
        
        let eImpar = multiplicacao_negativa.length % 2;

        if(eImpar == 1 && (
            (multiplicacao_positiva.length === 0 && multiplicacao_negativa.length > 1) ||   
            (multiplicacao_positiva.length > 0 && multiplicacao_negativa.length > 0)
        )) {  
            multiplicacao_negativa = multiplicacao_negativa.slice(0, multiplicacao_negativa.length - 1);
        }
        
        // Ajuste espaçamento
        if(multiplicacao_positiva.length > 0 && multiplicacao_negativa.length > 1) { 
            multiplicacao_positiva.push(''); 
        }

        return console.log(multiplicacao_positiva.join(' ') + multiplicacao_negativa.join(' '));
    }

    return console.log(multiplicacao_positiva.join(' '));
}