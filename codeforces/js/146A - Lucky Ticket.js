//146A - Lucky Ticket (https://codeforces.com/contest/146/problem/A)

/*
There is a game called "I Wanna Be the Guy", consisting of n levels. Little X and his friend Little Y are addicted to the game. Each of them wants to pass the whole game.

Little X can pass only p levels of the game. And Little Y can pass only q levels of the game. You are given the indices of levels Little X can pass and the indices of levels Little Y can pass. Will Little X and Little Y pass the whole game, if they cooperate each other?

Input
The first line contains a single integer n (1 ≤  n ≤ 100).

The next line contains an integer p (0 ≤ p ≤ n) at first, then follows p distinct integers a1, a2, ..., ap (1 ≤ ai ≤ n). These integers denote the indices of levels Little X can pass. The next line contains the levels Little Y can pass in the same format. It's assumed that levels are numbered from 1 to n.

Output
If they can pass all the levels, print "I become the guy.". If it's impossible, print "Oh, my keyboard!" (without the quotes).

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
 
function organizar(a, b){
    return a - b;
}
 
function main(){
    let input = readline();
    let littleX = readline().split(' ').slice(1);
    let littleY = readline().split(' ').slice(1);
    let valores = littleX.concat(littleY).sort(organizar);
    let contador = 1;
 
    let resposta = 'Oh, my keyboard!';
 
    for(let i = 0; i < valores.length; i++){
 
        if(Number(valores[i]) == contador){
 
            contador++;
            if(contador > input){
                resposta = 'I become the guy.';
            }
        }
    }
    console.log(resposta);
}