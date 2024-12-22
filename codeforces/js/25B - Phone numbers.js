// 25B - Phone numbers (https://codeforces.com/contest/25/problem/B)

/*
Phone number in Berland is a sequence of n digits. Often, to make it easier to memorize the number, it is divided into groups of two or three digits. For example, the phone number 1198733 is easier to remember as 11-987-33. Your task is to find for a given phone number any of its divisions into groups of two or three digits.

Input
The first line contains integer n (2 ≤ n ≤ 100) — amount of digits in the phone number. The second line contains n digits — the phone number to divide into groups.

Output
Output any of divisions of the given phone number into groups of two or three digits. Separate groups by single character -. If the answer is not unique, output any.

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
    
    let tamanhoTelefone = Number(readline());
    let telefone = readline();
    let valor = '';
    let impar = 0;
 
    if(tamanhoTelefone % 2 == 1){
        tamanhoTelefone--;
        impar++;
    }
 
    for(let i = 0; i < (tamanhoTelefone / 2); i++){
        
        if(impar == 1 && i == (tamanhoTelefone / 2) - 1){
            valor += telefone.slice(telefone.length - 3, telefone.length) + '-'
            break;
        }
        valor += telefone.slice((i * 2), (2 + (i * 2))) + '-';
    }
    console.log(valor.slice(0, valor.length - 1));
}