//52A - 123-Sequence (https://codeforces.com/contest/52/problem/A)

/*
There is a given sequence of integers a1, a2, ..., an, where every number is from 1 to 3 inclusively. You have to replace the minimum number of numbers in it so that all the numbers in the sequence are equal to each other.

Input
The first line contains an integer n (1 ≤ n ≤ 106). The second line contains a sequence of integers a1, a2, ..., an (1 ≤ ai ≤ 3).

Output
Print the minimum number of replacements needed to be performed to make all the numbers in the sequence equal.

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
 
    const input = readline();
    let sequencia = readline().split(' ');
    let contador = [0, 0, 0]
 
    for(let i = 0; i < input; i++){
        if(Number(sequencia[i]) == 1){
            contador[0]++;
        } else if (Number(sequencia[i]) == 2){
            contador[1]++;
        } else {
            contador[2]++;
        }
    }
 
    let maior = Math.max(contador[0], contador[1], contador[2]);
    console.log(input - maior);
}