// 6B - President's Office https://codeforces.com/contest/6/problem/B)

/*
President of Berland has a very vast office-room, where, apart from him, work his subordinates. Each subordinate, as well as President himself, has his own desk of a unique colour. Each desk is rectangular, and its sides are parallel to the office walls. One day President decided to establish an assembly, of which all his deputies will be members. Unfortunately, he does not remember the exact amount of his deputies, but he remembers that the desk of each his deputy is adjacent to his own desk, that is to say, the two desks (President's and each deputy's) have a common side of a positive length.

The office-room plan can be viewed as a matrix with n rows and m columns. Each cell of this matrix is either empty, or contains a part of a desk. An uppercase Latin letter stands for each desk colour. The «period» character («.») stands for an empty cell.

Input
The first line contains two separated by a space integer numbers n, m (1 ≤ n, m ≤ 100) — the length and the width of the office-room, and c character — the President's desk colour. The following n lines contain m characters each — the office-room description. It is guaranteed that the colour of each desk is unique, and each desk represents a continuous subrectangle of the given matrix. All colours are marked by uppercase Latin letters.

Output
Print the only number — the amount of President's deputies.

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
 
    // tamanho vertical, horizontal, mesa do presidente
    const valores = readline().split(' ');
 
    let posicoes = [];
    let mesaPresidente = {
        horizontal: [],
        vertical: []
    };
 
    let contador = 0;
    let condicao_parada = 0;
 
    for(let i = 0; i < valores[0]; i++){
        
        posicoes[i] = readline().split('')
        //posicoes[i] = posicoes[i].split('');
 
        // Descobrir mesa presidente
        for(let j = 0; j < valores[1]; j++){
            // Testa se a posição está de acordo com a mesa do presidente            
            if(posicoes[i][j] == valores[2]){
 
                condicao_parada = i;
 
                if(mesaPresidente.vertical.length == 0){
                    mesaPresidente.vertical.push(i);
                } else if (mesaPresidente.vertical[mesaPresidente.vertical.length - 1] < i) {
                    mesaPresidente.vertical.push(i);
                }
 
                if(mesaPresidente.horizontal.length == 0){
                    mesaPresidente.horizontal.push(j);
                } else if (mesaPresidente.horizontal[mesaPresidente.horizontal.length - 1] < j){
                    mesaPresidente.horizontal.push(j);
                }
            }
        }
 
        // Parar os loops porque não é necessário saber o restante. 
        // Reescreve o condicao_parada se entra nele
        if(condicao_parada != 0 && condicao_parada + 1 == i) { break }
    }
 
    // Teste vertical
    let mesaEsquerda = '';
    let mesaDireita = '';
 
    for(let i = mesaPresidente.vertical[0]; i <= mesaPresidente.vertical[mesaPresidente.vertical.length - 1]; i++){
 
        const esquerda_teste = posicoes[i][mesaPresidente.horizontal[0] - 1];
        const direita_teste = posicoes[i][mesaPresidente.horizontal[mesaPresidente.horizontal.length - 1] + 1]
 
        //Esquerda
        if (esquerda_teste != '.' && esquerda_teste != mesaEsquerda && esquerda_teste != undefined){
            mesaEsquerda = esquerda_teste;
            contador++;
        }
        
 
        //Direita
        if (direita_teste != '.' && direita_teste != mesaDireita && direita_teste != undefined){    
            mesaDireita = direita_teste;
            contador++;
        }
    }
 
    mesaCima = '';
    mesaBaixo = '';
 
    // Teste horizontal
    for(let i = mesaPresidente.horizontal[0]; i <= mesaPresidente.horizontal[mesaPresidente.horizontal.length - 1]; i++){
 
        if(posicoes[mesaPresidente.vertical[0] - 1] != undefined){
            const cima_teste = posicoes[mesaPresidente.vertical[0] - 1][i];
 
            // Cima
            if(cima_teste != '.' && cima_teste != mesaCima){
                contador++;
                mesaCima = cima_teste;
            }
        }
 
        if(posicoes[mesaPresidente.vertical[mesaPresidente.vertical.length - 1] + 1] != undefined){
            const baixo_teste = posicoes[mesaPresidente.vertical[mesaPresidente.vertical.length - 1] + 1][i];
            
            // Baixo
            if(baixo_teste != '.' && baixo_teste != mesaBaixo){
                contador++;
                mesaBaixo = baixo_teste;
            }
        }
 
    }
    console.log(contador)
}