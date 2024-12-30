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
    const quantidade = Number(readline());
    let bebidas = ['ABSINTH', 'BEER', 'BRANDY', 'CHAMPAGNE', 'GIN', 'RUM', 'SAKE', 'TEQUILA', 'VODKA', 'WHISKEY', 'WINE'];

    let contador = 0;

    for(let i = 0; i < quantidade; i++){
        let input = readline();

        if(input[0].charCodeAt() < 65 && input < 18){
            contador++;
        } else{

            let min = 0;
            let max = bebidas.length - 1;
            let chute;

            while(min < max){
                chute = Math.floor((min + max) / 2);

                if(bebidas[chute] == input) {
                    contador++;
                    break;
                } else if (bebidas[chute][0] < input[0]) {
                    min = chute + 1;
                } else if(bebidas[chute][0] > input[0]) {
                    max = chute - 1;
                } else {
                    // Testar com os dois iguais

                    if(input[0].charCodeAt() == 66){
                        if(input == bebidas[1]){
                            contador++;
                        } else if (input == bebidas[2]) {
                            contador++
                        }
                    } else {
                        if(input == bebidas[9]){
                            contador++;
                        } else if (input == bebidas[10]){
                            contador++
                        }
                    }
                    break;
                }
            }
        }
    }
}