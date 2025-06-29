// 31B - Sysadmin Bob (https://codeforces.com/problemset/problem/31/B)

/*
    Email address in Berland is a string of the form A@B, where A and B are arbitrary strings consisting of small Latin letters.

    Bob is a system administrator in «Bersoft» company. He keeps a list of email addresses of the company's staff. This list is as a large string, where all addresses are written in arbitrary order, separated by commas. The same address can be written more than once.

    Suddenly, because of unknown reasons, all commas in Bob's list disappeared. Now Bob has a string, where all addresses are written one after another without any separators, and there is impossible to determine, where the boundaries between addresses are. Unfortunately, on the same day his chief asked him to bring the initial list of addresses. Now Bob wants to disjoin addresses in some valid way. Help him to do that.

    Input
    The first line contains the list of addresses without separators. The length of this string is between 1 and 200, inclusive. The string consists only from small Latin letters and characters «@».

    Output
    If there is no list of the valid (according to the Berland rules) email addresses such that after removing all commas it coincides with the given string, output No solution. In the other case, output the list. The same address can be written in this list more than once. If there are several solutions, output any of them.
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

function main() {
    let enderecos = readline();

    let contador = 0 ;
    let contador_emails = 0;
    let objeto = [];

    for(let i = 0; i < enderecos.length; i++) {
        if(enderecos[i].charCodeAt(0) !== 64) {
            if(objeto[contador] === undefined) { objeto[contador] = '' }
            objeto[contador] = objeto[contador] + enderecos[i];
        } else {
            if(objeto[contador] !== undefined){
                contador++;
            }
            contador_emails++;
        }
    }

    if(contador_emails + 1 !== objeto.length || contador_emails === 0) { return console.log('No solution') }
    
    let resposta = '';
    for(let i = 0; i < objeto.length; i++) {
        
        if(i === 0 || i === objeto.length - 1) {
            if (objeto[i].length === 0) {
                return console.log('No solution');
            }

            resposta += objeto[i] + '@';
        } else {
            if (objeto[i].length === 1) {
                return console.log('No solution');
            }

             resposta += objeto[i].slice(0, 1) + ',' + objeto[i].slice(1, objeto[i].length) + '@';
        }
    }

    return console.log(resposta.slice(0, resposta.length - 1));
}