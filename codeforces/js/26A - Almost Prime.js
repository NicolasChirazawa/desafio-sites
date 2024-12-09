//26A - Almost Prime (https://codeforces.com/contest/26/problem/A)

/*
A number is called almost prime if it has exactly two distinct prime divisors. For example, numbers 6, 18, 24 are almost prime, while 4, 8, 9, 42 are not. Find the amount of almost prime numbers which are between 1 and n, inclusive.

Input
Input contains one integer number n (1 ≤ n ≤ 3000).

Output
Output the amount of almost prime numbers between 1 and n, inclusive.

/* Common Template Start */
 
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
 
function primeTest(input, contador){
    let j;
    for(j = 2; j < input - 1; j++){
        //A outra possibilidade de escrever 'if(!input % i)', que no caso, quando retorna resto 0, dá 'false', mas pelo exclamação vira 'true'.
        if(input % j == 0){ 
            return;
        }
    }
    contador.push(input);
}
 
function main(){
    let input = Number(readline());
    let numerosPrimos = [];
    let resposta = 0;
    
    for(let i = 2; i <= input; i++){
        primeTest(i, numerosPrimos);
    }
 
    for(let k = 1; k <= input; k++){
        let contador = 0;
        for(let l = 0; l < numerosPrimos.length; l++){
            if(k % numerosPrimos[l] == 0){
                contador++
            }
            if(l == (numerosPrimos.length - 1) && contador == 2){
                resposta++;
            }
        }
    }
    console.log(resposta);
}
