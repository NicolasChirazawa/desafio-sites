// 55A - Flea Travel (https://codeforces.com/problemset/problem/55/A)

/*
    A flea is sitting at one of the n hassocks, arranged in a circle, at the moment. After minute number k the flea jumps through k - 1 hassoсks (clockwise). For example, after the first minute the flea jumps to the neighboring hassock. You should answer: will the flea visit all the hassocks or not. We assume that flea has infinitely much time for this jumping.
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
    // Círculo formado por 'n' 
    const number = Number(readline());
    const attempt_quantity = number*2;
    const dicionary = {};

    let position = 1;

    for(let i = 1; i <= attempt_quantity; i++) {
        position = position + (i % number);
        if(position > number) { position = position - number }
        if(dicionary[position] === undefined) { dicionary[position] = 1 }
        
    }

    let answer = 'YES';
    for(let i = 1; i < number + 1; i++) {
        if(dicionary[i] === undefined) { 
            answer = 'NO'; 
            break;
        }
    }
    console.log(answer);
}