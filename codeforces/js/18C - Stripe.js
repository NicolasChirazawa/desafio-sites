// 18C - Stripe (https://codeforces.com/problemset/problem/18/C)

/*
    Once Bob took a paper stripe of n squares (the height of the stripe is 1 square). In each square he wrote an integer number, possibly negative. He became interested in how many ways exist to cut this stripe into two pieces so that the sum of numbers from one piece is equal to the sum of numbers from the other piece, and each piece contains positive integer amount of squares. Would you help Bob solve this problem?

    Input
    The first input line contains integer n (1 ≤ n ≤ 105) — amount of squares in the stripe. The second line contains n space-separated numbers — they are the numbers written in the squares of the stripe. These numbers are integer and do not exceed 10000 in absolute value.

    Output
    Output the amount of ways to cut the stripe into two non-empty pieces so that the sum of numbers from one piece is equal to the sum of numbers from the other piece. Don't forget that it's allowed to cut the stripe along the squares' borders only.
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
    const quantidade = Number(readline());
    let valor = readline().split(' ').map((elemento) => Number(elemento));

    let contador = 0;
    let divisao_1_somatorio = 0;
    let divisao_2_somatorio = 0;

    for(let i = 0; i < quantidade; i++) {
        divisao_2_somatorio += valor[i];
    }

    for(let i = 0; i < quantidade - 1; i++) {
        divisao_1_somatorio += valor[i];
        divisao_2_somatorio -= valor[i];

        if(divisao_1_somatorio === divisao_2_somatorio) { contador++  }
    }

    console.log(contador)
}