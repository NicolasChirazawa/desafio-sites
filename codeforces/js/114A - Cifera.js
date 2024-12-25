// 114A - Cifera (https://codeforces.com/contest/114/problem/A)

/*
When Petya went to school, he got interested in large numbers and what they were called in ancient times. For instance, he learned that the Russian word "tma" (which now means "too much to be counted") used to stand for a thousand and "tma tmyschaya" (which literally means "the tma of tmas") used to stand for a million.

Petya wanted to modernize the words we use for numbers and invented a word petricium that represents number k. Moreover, petricium la petricium stands for number k2, petricium la petricium la petricium stands for k3 and so on. All numbers of this form are called petriciumus cifera, and the number's importance is the number of articles la in its title.

Petya's invention brought on a challenge that needed to be solved quickly: does some number l belong to the set petriciumus cifera? As Petya is a very busy schoolboy he needs to automate the process, he asked you to solve it.

Input
The first input line contains integer number k, the second line contains integer number l (2 ≤ k, l ≤ 231 - 1).

Output
You should print in the first line of the output "YES", if the number belongs to the set petriciumus cifera and otherwise print "NO". If the number belongs to the set, then print on the seconds line the only number — the importance of number l.

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
 
function precisao(valor){
    return valor.toPrecision(12);
}
 
function getBaseLog(x, y){
    // Isso retorna log 'y' na base 'x'
    return precisao(Math.log(y) / Math.log(x));
}

function main() {
    const cifra = Number(readline());
    const numero = Number(readline());
 
    /* Resolução com loop (24/11/2024)
    if(numero < cifra) {
        console.log('NO');
    } else {
        for(let i = 1; i < numero; i++){
            let valor = cifra**i;
            
            if(valor == numero){
                console.log('YES')
                console.log(i - 1);
                break;
            } else if (valor > numero) {
                console.log('NO');
                break;
            }
        }
    }
    */

    const resposta = Number(getBaseLog(cifra, numero));
 
    if(String(resposta).indexOf('.')!= -1){
        console.log('NO');
    } else {
        console.log('YES')
        console.log(resposta - 1);
    }
}