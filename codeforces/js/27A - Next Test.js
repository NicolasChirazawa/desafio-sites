// 27A - Next Test (https://codeforces.com/problemset/problem/27/A)

/*
«Polygon» is a system which allows to create programming tasks in a simple and professional way. When you add a test to the problem, the corresponding form asks you for the test index. As in most cases it is clear which index the next test will have, the system suggests the default value of the index. It is calculated as the smallest positive integer which is not used as an index for some previously added test.

You are to implement this feature. Create a program which determines the default index of the next test, given the indexes of the previously added tests.

Input
The first line contains one integer n (1 ≤ n ≤ 3000) — the amount of previously added tests. The second line contains n distinct integers a1, a2, ..., an (1 ≤ ai ≤ 3000) — indexes of these tests.

Output
Output the required default value for the next test index.
*/

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
    const linha = readline().split(' ').map((elemento) => Number(elemento));

    let elementos_linha = {};
    let maior_elemento = 0;

    for(let i = 0; i < quantidade; i++) {
        elementos_linha[linha[i]] = 1;

        if(linha[i] > maior_elemento) { maior_elemento = linha[i] }
    }

    let index = 0;

    for(let i = 1; i < maior_elemento; i++) {
        if(elementos_linha[i] === undefined) { 
            index = i;
            break; 
        }
    }

    if(index === 0) { index = maior_elemento + 1 }

    console.log(index);
}