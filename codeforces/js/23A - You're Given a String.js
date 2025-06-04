// 23A You're Given a String (https://codeforces.com/problemset/problem/23/A)

/*
    You're given a string of lower-case Latin letters. Your task is to find the length of its longest substring that can be met in the string at least twice. These occurrences can overlap (see sample test 2).

    Input
    The first input line contains the string. It's guaranteed, that the string is non-empty, consists of lower-case Latin letters, and its length doesn't exceed 100.

    Output
    Output one number — length of the longest substring that can be met in the string at least twice.
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
    const texto = readline();

    let loop = 0;
    const criterio = (texto.length % 2 === 1 ? (texto.length + 1) / 2 : texto.length / 2);

    while(true) {
        let dicionario = {};
        let acumular_valores = '';

        let teste_soma = loop;

        for(let i = 0; i < texto.length; i++) {
            let teste_passagem_primeiro_criterio = false;
            
            if(acumular_valores.length != (loop + 1)) { 
                acumular_valores += texto[i];
                teste_passagem_primeiro_criterio = true;
            }

            if(acumular_valores.length == (loop + 1)) {
                if(teste_passagem_primeiro_criterio == false) {
                    acumular_valores = acumular_valores.slice(1) + texto[i];
                }
                
                if(dicionario[acumular_valores] === undefined) { 
                    dicionario[acumular_valores] = acumular_valores; 
                } else {
                    loop++;
                    break;
                }
            }
        }

        if(loop === teste_soma) { break }
    }
    console.log(loop);
}