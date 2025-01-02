//37A - Towers (https://codeforces.com/contest/37/problem/A)

/*
Little Vasya has received a young builder’s kit. The kit consists of several wooden bars, the lengths of all of them are known. The bars can be put one on the top of the other if their lengths are the same.

Vasya wants to construct the minimal number of towers from the bars. Help Vasya to use the bars in the best way possible.

Input
The first line contains an integer N (1 ≤ N ≤ 1000) — the number of bars at Vasya’s disposal. The second line contains N space-separated integers li — the lengths of the bars. All the lengths are natural numbers not exceeding 1000.

Output
In one line output two numbers — the height of the largest tower and their total number. Remember that Vasya should use all the bars.

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
 
 
function main(){
    const quantidade = Number(readline());
    
    let barras = readline().split(' ').map((element) => Number(element));
    let quantidade_unidades = 0;
 
    let repetidos = {};
    
    for(let i = 0; i < quantidade; i++){
 
        // Se não encontrar a chave, a define dentro do objeto
        if(repetidos[barras[i]] == undefined){
            repetidos[barras[i]] = 0;
            quantidade_unidades++;
        } else {
            repetidos[barras[i]]++;
        }
    }
 
    const valor_array = Object.entries(repetidos)
    let maior_tamanho = [0, 0];
 
    for(let j = 0; j < valor_array.length; j++){
        if(maior_tamanho[1] < valor_array[j][1]){
            maior_tamanho = valor_array[j];
        }
    }
 
    // Array começa do 0
    maior_tamanho[1]++;
 
    console.log(maior_tamanho[1] + ' ' + quantidade_unidades)
}