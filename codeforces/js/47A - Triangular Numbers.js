/*
A triangular number is the number of dots in an equilateral triangle uniformly filled with dots. For example, three dots can be arranged in a triangle; thus three is a triangular number. The n-th triangular number is the number of dots in a triangle with n dots on a side. . You can learn more about these numbers from Wikipedia (http://en.wikipedia.org/wiki/Triangular_number).

Your task is to find out if a given integer is a triangular number.

Input
The first line contains the single number n (1 ≤ n ≤ 500) — the given integer.

Output
If the given integer is a triangular number output YES, otherwise output NO

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
 
function numTriang(n){ 
    let calculo = (n *(n + 1))/2;
    return calculo;
}
 
function main() {
 
    const input = readline();
    let numero = 0;
 
    for(let i = 1; i <= input; i++){
        numero = numTriang(i);
        if(numero == input){
            console.log('YES');
            break;
        } else if(numero > input){
            console.log('NO')
            break;
        }
    }
}