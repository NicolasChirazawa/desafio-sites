//486A - Calculating Function (https://codeforces.com/contest/486/problem/A)

/*
For a positive integer n let's define a function f:

f(n) =  - 1 + 2 - 3 + .. + ( - 1)nn

Your task is to calculate f(n) for a given integer n.

Input
The single line contains the positive integer n (1 ≤ n ≤ 1015).

Output
Print f(n) in a single line.

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
    let input = Number(readline());
    
    if(input == 1) { 
        console.log(input * (-1)) 
    }
    else if (input % 2 == 0){
        input = (input / 2)
        console.log(input)
    } else {
        input = ((input + 1)/2) * (-1)
        console.log(input)
    }
}