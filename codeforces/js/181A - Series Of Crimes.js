// 181A - Series Of Crimes (https://codeforces.com/contest/181/problem/A)

/*
The Berland capital is shaken with three bold crimes committed by the Pihsters, a notorious criminal gang.

The Berland capital's map is represented by an n × m rectangular table. Each cell of the table on the map represents some districts of the capital.

The capital's main detective Polycarpus took a map and marked there the districts where the first three robberies had been committed as asterisks. Deduction tells Polycarpus that the fourth robbery will be committed in such district, that all four robbed districts will form the vertices of some rectangle, parallel to the sides of the map.

Polycarpus is good at deduction but he's hopeless at math. So he asked you to find the district where the fourth robbery will be committed.

Input
The first line contains two space-separated integers n and m (2 ≤ n, m ≤ 100) — the number of rows and columns in the table, correspondingly.

Each of the next n lines contains m characters — the description of the capital's map. Each character can either be a "." (dot), or an "*" (asterisk). A character equals "*" if the corresponding district has been robbed. Otherwise, it equals ".".

It is guaranteed that the map has exactly three characters "*" and we can always find the fourth district that meets the problem requirements.

Output
Print two integers — the number of the row and the number of the column of the city district that is the fourth one to be robbed. The rows are numbered starting from one from top to bottom and the columns are numbered starting from one from left to right.

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
    let input = readline().split(' ').map((element) => Number(element));
    let posicoes = [];
 
    for(let i = 0; i < input[0]; i++){
 
        let entrada = readline();
 
        for (let j = 0; j < input[1]; j++){
            // Apenas três pontos
            if(posicoes.length == 3){ break }
 
            if(entrada[j] == '*') {
                posicoes.push(i + ' ' + j);
                posicoes[posicoes.length - 1] = posicoes[posicoes.length - 1].split(' ');
            }
        }
    }
 
    let linha = 0;
    let coluna = 0;
 
    // Se são pontos superiores paralelos
    if(posicoes[0][0] == posicoes[1][0]){
        linha = posicoes[2][0];
 
        // Se o último número é igual
        if(posicoes[0][1] == posicoes[2][1]){
            coluna = posicoes[1][1];
        } else {
            coluna = posicoes[0][1];
        }
    } else {
        linha = posicoes[0][0];
 
        if(posicoes[0][1] == posicoes[2][1]){
            coluna = posicoes[1][1];
        } else {
            coluna = posicoes[2][1];
        }
    }
    // Não começa no 0, como o array
    linha++;
    coluna++;
 
    console.log(linha + ' ' + coluna);
}