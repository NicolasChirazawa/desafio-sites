// 3A - Shortest path of the king (https://codeforces.com/contest/3/problem/A)

/*
The king is left alone on the chessboard. In spite of this loneliness, he doesn't lose heart, because he has business of national importance. For example, he has to pay an official visit to square t. As the king is not in habit of wasting his time, he wants to get from his current position s to square t in the least number of moves. Help him to do this.


In one move the king can get to the square that has a common side or a common vertex with the square the king is currently in (generally there are 8 different squares he can move to).

Input
The first line contains the chessboard coordinates of square s, the second line — of square t.

Chessboard coordinates consist of two characters, the first one is a lowercase Latin letter (from a to h), the second one is a digit from 1 to 8.

Output
In the first line print n — minimum number of the king's moves. Then in n lines print the moves themselves. Each move is described with one of the 8: L, R, U, D, LU, LD, RU or RD.

L, R, U, D stand respectively for moves left, right, up and down (according to the picture), and 2-letter combinations stand for diagonal moves. If the answer is not unique, print any of them.

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
    const inicial = readline();
    const final = readline();
 
    //Achar valor letras
    let letras = [(inicial[0].charCodeAt() - 97), (final[0].charCodeAt() - 97)];
 
    //Achar direção horizontal
    let esquerdaDireita = [Math.abs(letras[0] - letras[1])];
    if(letras[0] > letras[1]){
        esquerdaDireita.push(0);
    } else {
        esquerdaDireita.push(1);
    }
 
    //Achar direção vertical
    let cimaBaixo = [Math.abs(inicial[1] - final[1])];
    if(inicial[1] > final[1]){
        cimaBaixo.push(0);
    } else {
        cimaBaixo.push(1);
    }
 
    //Quantidade de passos
    let maiorValor = 0
 
    if(esquerdaDireita[0] >= cimaBaixo[0]){
        maiorValor = esquerdaDireita[0];
    } else {
        maiorValor = cimaBaixo[0];
    }
 
    console.log(maiorValor);
 
    //Dá os passos
    for(let i = 0; i < maiorValor; i++){
       let letra = '';
       let numero = '';
 
        if(esquerdaDireita[0] > 0){
            if(esquerdaDireita[1] == 0){
                letra = 'L'
            } else {
                letra = 'R'
            }
            esquerdaDireita[0]--;
        }
 
        if(cimaBaixo[0] > 0){
            if(cimaBaixo[1] == 0){
                numero = 'D';
            } else{
                numero = 'U'
            }
            cimaBaixo[0]--;
        }
        console.log(letra + numero);
    }
}