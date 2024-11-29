//96A - Football (https://codeforces.com/contest/96/problem/A)

/*
Petya loves football very much. One day, as he was watching a football match, he was writing the players' current positions on a piece of paper. To simplify the situation he depicted it as a string consisting of zeroes and ones. A zero corresponds to players of one team; a one corresponds to players of another team. If there are at least 7 players of some team standing one after another, then the situation is considered dangerous. For example, the situation 00100110111111101 is dangerous and 11110111011101 is not. You are given the current situation. Determine whether it is dangerous or not.

Input
The first input line contains a non-empty string consisting of characters "0" and "1", which represents players. The length of the string does not exceed 100 characters. There's at least one player from each team present on the field.

Output
Print "YES" if the situation is dangerous. Otherwise, print "NO".

Examples
InputCopy
001001
OutputCopy
NO
InputCopy
1000000001
OutputCopy
YES

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

    const input = readline().split('');

    let resposta = '';
    let contador_zero = 0;
    let contador_um = 0;

    for (let loop = 0; loop < input.length; loop++) {
        if(input[loop] == '0') {
            contador_zero++;
            contador_um = 0;
        } else {
            contador_zero = 0;
            contador_um++;
        }

        if (contador_zero == 7 || contador_um == 7) { 
            resposta = 'YES'; 
            loop = input.length; 
        } else { resposta = 'NO' }
    }
    console.log(resposta);
}