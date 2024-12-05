//1A - Theare Square (https://codeforces.com/contest/1/problem/A)

/*
Theatre Square in the capital city of Berland has a rectangular shape with the size n × m meters. On the occasion of the city's anniversary, a decision was taken to pave the Square with square granite flagstones. Each flagstone is of the size a × a.

What is the least number of flagstones needed to pave the Square? It's allowed to cover the surface larger than the Theatre Square, but the Square has to be covered. It's not allowed to break the flagstones. The sides of flagstones should be parallel to the sides of the Square.

Input
The input contains three positive integer numbers in the first line: n,  m and a (1 ≤  n, m, a ≤ 109).

Output
Write the needed number of flagstones.

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
    let input = readline().split(' ').map((element) => Number(element));
    let ladrilhos = [0, 0]
 
    if(input[0] % input[2] > 0){
        ladrilhos[0] = Math.floor(input[0] / input[2]) + 1; 
    } else {
        ladrilhos[0] = input[0]/input[2]
    }
 
    if(input[1] % input[2] > 0){
        ladrilhos[1] = Math.floor(input[1] / input[2]) + 1
    } else {
        ladrilhos[1] = input[1] / input[2];
    }
console.log(ladrilhos[0] * ladrilhos[1])
}