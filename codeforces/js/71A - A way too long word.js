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
    let input = '';
    let resposta = '';
    
    for(let i = 0; i < quantidade; i++){
        input = readline();
        
        if(input.length > 10) {
        
            resposta = input[0] + (input.length - 2) + input[(input.length - 1)] //Primeiro caractere, tamanho, ultimo caractere (como lê como array, o 0 existe, logo deve subtrair 1)
        } else { resposta = input }
            console.log(resposta);
    }
}