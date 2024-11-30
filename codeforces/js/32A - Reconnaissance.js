//32A - Reconnaissance (https://codeforces.com/problemset/problem/32/A)

/*
Two players are playing a game. First each of them writes an integer from 1 to 6, and then a dice is thrown. The player whose written number got closer to the number on the dice wins. If both payers have the same difference, it's a draw.

The first player wrote number a, the second player wrote number b. How many ways to throw a dice are there, at which the first player wins, or there is a draw, or the second player wins?

Input
The single line contains two integers a and b (1 ≤ a, b ≤ 6) — the numbers written on the paper by the first and second player, correspondingly.

Output
Print three integers: the number of ways to throw the dice at which the first player wins, the game ends with a draw or the second player wins, correspondingly.

Examples

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
    let input = readline().split(' ');
    let valores = [0, 0, 0];
 
    for(let i = 1; i <= 6; i++){
        if(Math.abs(i - input[0]) == Math.abs(i - input[1])){
            valores[1]++;
        } else if((Math.abs(i - input[0]) < Math.abs(i - input[1]))){
            valores[0]++;
        } else{
            valores[2]++;
        }
    }
    console.log(valores[0] + ' ' + valores[1] + ' ' + valores[2]);
}