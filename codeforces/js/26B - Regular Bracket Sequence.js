// 26B - Regular Bracket Sequence (https://codeforces.com/contest/26/problem/B)

/*
    A bracket sequence is called regular if it is possible to obtain correct arithmetic expression by inserting characters «+» and «1» into this sequence. For example, sequences «(())()», «()» and «(()(()))» are regular, while «)(», «(()» and «(()))(» are not.

    One day Johnny got bracket sequence. He decided to remove some of the brackets from it in order to obtain a regular bracket sequence. What is the maximum length of a regular bracket sequence which can be obtained?

    Input
    Input consists of a single line with non-empty string of «(» and «)» characters. Its length does not exceed 106.

    Output
    Output the maximum possible length of a regular bracket sequence.
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
    const parenteses = readline();
    let acumulador = 0;
    let validos = 0;

    for(let i = 0; i < parenteses.length; i++){
        if(parenteses[i] == '(') {
            acumulador++;
        } else if (acumulador > 0 && parenteses[i] == ')') {
            acumulador--;
            validos += 2;
        } else {
            acumulador = 0;
        }
    }
    console.log(validos);
}