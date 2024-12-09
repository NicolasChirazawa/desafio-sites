//38A - Army (https://codeforces.com/contest/38/problem/A)

/*
The Berland Armed Forces System consists of n ranks that are numbered using natural numbers from 1 to n, where 1 is the lowest rank and n is the highest rank.

One needs exactly di years to rise from rank i to rank i + 1. Reaching a certain rank i having not reached all the previous i - 1 ranks is impossible.

Vasya has just reached a new rank of a, but he dreams of holding the rank of b. Find for how many more years Vasya should serve in the army until he can finally realize his dream.

Input
The first input line contains an integer n (2 ≤ n ≤ 100). The second line contains n - 1 integers di (1 ≤ di ≤ 100). The third input line contains two integers a and b (1 ≤ a < b ≤ n). The numbers on the lines are space-separated.

Output
Print the single number which is the number of years that Vasya needs to rise from rank a to rank b.

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
    const rankTotal = readline();
    const anos = readline().split(' ').map((element) => Number(element));
    const rankAoRank = readline().split(' ').map((element) => Number(element));
    let resposta = 0;
 
    for(let i = 0; i < (rankAoRank[1] - rankAoRank[0]); i++){
        resposta += anos[rankAoRank[0] + i - 1];
    }
 
    console.log(resposta);
}