// 12B - Correct Solution? (https://codeforces.com/problemset/problem/12/B)

/*
One cold winter evening Alice and her older brother Bob was sitting at home near the fireplace and giving each other interesting problems to solve. When it was Alice's turn, she told the number n to Bob and said:

—Shuffle the digits in this number in order to obtain the smallest possible number without leading zeroes.

—No problem! — said Bob and immediately gave her an answer.

Alice said a random number, so she doesn't know whether Bob's answer is correct. Help her to find this out, because impatient brother is waiting for the verdict.

Input
The first line contains one integer n (0 ≤ n ≤ 109) without leading zeroes. The second lines contains one integer m (0 ≤ m ≤ 109) — Bob's answer, possibly with leading zeroes.

Output
Print OK if Bob's answer is correct and WRONG_ANSWER otherwise.
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

function contabilizar_zeros(zeros, string_com_zeros) {

    for(let i = 0; i < zeros; i++) {
        string_com_zeros += String('0');
    }

    return string_com_zeros;
}

function main() {
    const valor_1 = readline();
    const valor_2 = readline(); 
    let dicionario = {};

    for(let i = 0; i < valor_1.length; i++){
        if(dicionario[valor_1[i]] === undefined) {
            dicionario[valor_1[i]] = 1;
        } else {
            dicionario[valor_1[i]]++;
        }
    }

    let resultado = '';
    let testar_zero = (dicionario[0] != undefined);
    
    for(let i = 1; i < 10; i++) {
        while(dicionario[i] > 0) {
            resultado += String(i);

            if(testar_zero) { 
                resultado = contabilizar_zeros(dicionario[0], resultado);
                testar_zero = false;
             }
        
            dicionario[i]--;
        }
    }

    // Caso onde há apenas zero
    if(testar_zero) { resultado = contabilizar_zeros(dicionario[0], resultado) }

    console.log(resultado === valor_2 ? 'OK' : 'WRONG_ANSWER');
}