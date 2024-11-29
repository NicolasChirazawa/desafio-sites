//440A - Forgotten Episode (https://codeforces.com/contest/440/problem/A)

/*
Polycarpus adores TV series. Right now he is ready to finish watching a season of a popular sitcom "Graph Theory". In total, the season has n episodes, numbered with integers from 1 to n.

Polycarpus watches episodes not one by one but in a random order. He has already watched all the episodes except for one. Which episode has Polycaprus forgotten to watch?

Input
The first line of the input contains integer n (2 ≤ n ≤ 100000) — the number of episodes in a season. Assume that the episodes are numbered by integers from 1 to n.

The second line contains n - 1 integer a1, a2, ..., an (1 ≤ ai ≤ n) — the numbers of episodes that Polycarpus has watched. All values of ai are distinct.

Output
Print the number of the episode that Polycarpus hasn't watched.
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
 
function ordemNumerica(a, b){
    return a - b;
}
 
function main() {
    const tamanho = readline();
    let episodios = readline().split(' ').sort(ordemNumerica);
    let resposta = 0;
 
    for(let i = 1; i < tamanho; i++){
 
        if(Number(episodios[i - 1]) != i){
            resposta = i;
            console.log(i);
            break;
        }
    }
    if(resposta == 0) { console.log(tamanho) }
}