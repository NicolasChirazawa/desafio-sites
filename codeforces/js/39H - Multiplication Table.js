// 39H - Multiplication Table (https://codeforces.com/contest/39/problem/H)

/*
    Petya studies positional notations. He has already learned to add and subtract numbers in the systems of notations with different radices and has moved on to a more complicated action — multiplication. To multiply large numbers one has to learn the multiplication table. Unfortunately, in the second grade students learn only the multiplication table of decimals (and some students even learn it in the first grade). Help Petya make a multiplication table for numbers in the system of notations with the radix k.

    Input
    The first line contains a single integer k (2 ≤ k ≤ 10) — the radix of the system.

    Output
    Output the multiplication table for the system of notations with the radix k. The table must contain k - 1 rows and k - 1 columns. The element on the crossing of the i-th row and the j-th column is equal to the product of i and j in the system of notations with the radix k. Each line may have any number of spaces between the numbers (the extra spaces in the samples are put for clarity).
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

function transformarBase(elemento, base) {
    let numeroConvertido = '';

    while(true) {
        numeroConvertido = String(elemento % base) + numeroConvertido;
        elemento = Math.floor(elemento / base);
        
        if(elemento === 0) { break }
    }
    return numeroConvertido;
}

function main() {
    const quantidade = Number(readline());
    let linha = [];

    for(let i = 1; i < quantidade; i++) {
        for(let j = 1; j < quantidade; j++) {
            let elemento = i * j;

            linha.push(transformarBase(elemento, quantidade));
        }
        console.log(linha.join(' '));
        linha = [];
    }
}