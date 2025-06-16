// 34C - Page Number (https://codeforces.com/problemset/problem/34/C)

/*
    «Bersoft» company is working on a new version of its most popular text editor — Bord 2010. Bord, like many other text editors, should be able to print out multipage documents. A user keys a sequence of the document page numbers that he wants to print out (separates them with a comma, without spaces).

    Your task is to write a part of the program, responsible for «standardization» of this sequence. Your program gets the sequence, keyed by the user, as input. The program should output this sequence in format l1-r1,l2-r2,...,lk-rk, where ri + 1 < li + 1 for all i from 1 to k - 1, and li ≤ ri. The new sequence should contain all the page numbers, keyed by the user, and nothing else. If some page number appears in the input sequence several times, its appearances, starting from the second one, should be ignored. If for some element i from the new sequence li = ri, this element should be output as li, and not as «li - li».

    For example, sequence 1,2,3,1,1,2,6,6,2 should be output as 1-3,6.

    Input
    The only line contains the sequence, keyed by the user. The sequence contains at least one and at most 100 positive integer numbers. It's guaranteed, that this sequence consists of positive integer numbers, not exceeding 1000, separated with a comma, doesn't contain any other characters, apart from digits and commas, can't end with a comma, and the numbers don't contain leading zeroes. Also it doesn't start with a comma or contain more than one comma in a row.
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
    let valores = readline().split(',').map((elemento) => Number(elemento));

    let dicionario = {};
    let valores_vistos = [];

    for(let i = 0; i < valores.length; i++) {
        if(dicionario[valores[i]] === undefined) { 
            dicionario[valores[i]] = valores[i];
            valores_vistos.push(valores[i]);  
        }
    }

    valores_vistos.sort((a, b) => a - b);

    let resposta = valores_vistos[0];
    let acumulador = 0;

    for(let i = 1; i < valores_vistos.length; i++) {
        
        if(valores_vistos[i] === valores_vistos[i - 1] + 1) {
            acumulador++;
        } else {
            if(acumulador > 0) { 
                resposta += `-${valores_vistos[i - 1]}`;
                acumulador = 0;
            }
            resposta += `,${valores_vistos[i]}`;
        }

        if(valores_vistos.length - 1 === i && acumulador > 0) { resposta += `-${valores_vistos[i]}` }
    }

    console.log(resposta);
}