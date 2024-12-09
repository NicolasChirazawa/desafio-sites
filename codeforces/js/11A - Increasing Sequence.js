//11A - Increscing Sequence (https://codeforces.com/contest/11/problem/A)

/*
A sequence a0, a1, ..., at - 1 is called increasing if ai - 1 < ai for each i: 0 < i < t.

You are given a sequence b0, b1, ..., bn - 1 and a positive integer d. In each move you may choose one element of the given sequence and add d to it. What is the least number of moves required to make the given sequence increasing?

Input
The first line of the input contains two integer numbers n and d (2 ≤ n ≤ 2000, 1 ≤ d ≤ 106). The second line contains space separated sequence b0, b1, ..., bn - 1 (1 ≤ bi ≤ 106).

Output
Output the minimal number of moves needed to make the sequence increasing.

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
 
    //'n' e 'd'
    const input = readline().split(' ');
    //Valores de entrada
    let sequencia = readline().split(' ');
 
    let moves = 0;
 
    for(let i = 1; i < input[0]; i++){
        if(Number(sequencia[i]) == Number(sequencia[i - 1])){
 
            sequencia[i] = Number(sequencia[i]) + Number(input[1]);
            moves++;
 
        } else if(Number(sequencia[i]) < Number(sequencia[i - 1])){
            
            let diferenca = Number(sequencia[i - 1]) - Number(sequencia[i]);
 
            //O 'Math.ceil' serve para lidar com números quebrados, todo número quebrado deve tender para cima, um jeito fácil de pensar nisso, é ver números 0,5, no mínimo, precisa ser 1 movimento completo.
            let multVezes = Math.ceil(diferenca / input[1]);
 
            //Existe o caso que ambos são iguais, ou seja 529 e 529.
            if((Number(sequencia[i])) + (multVezes * input[1]) == Number(sequencia[i - 1])) { multVezes++ }
 
            sequencia[i] = Number(sequencia[i]) + (multVezes * input[1]);
 
            moves = moves + multVezes;
        }
    }
    console.log(moves);
}