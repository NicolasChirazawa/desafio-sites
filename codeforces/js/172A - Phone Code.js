//172A - Phone Code (https://codeforces.com/contest/172/problem/A)

/*
Polycarpus has n friends in Tarasov city. Polycarpus knows phone numbers of all his friends: they are strings s1, s2, ..., sn. All these strings consist only of digits and have the same length.

Once Polycarpus needed to figure out Tarasov city phone code. He assumed that the phone code of the city is the longest common prefix of all phone numbers of his friends. In other words, it is the longest string c which is a prefix (the beginning) of each si for all i (1 ≤ i ≤ n). Help Polycarpus determine the length of the city phone code.

Input
The first line of the input contains an integer n (2 ≤ n ≤ 3·104) — the number of Polycarpus's friends. The following n lines contain strings s1, s2, ..., sn — the phone numbers of Polycarpus's friends. It is guaranteed that all strings consist only of digits and have the same length from 1 to 20, inclusive. It is also guaranteed that all strings are different.

Output
Print the number of digits in the city phone code.

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
    const input = readline();
    let numeros = [];
 
    
    for(let i = 0; i < input; i++){
        numeros[i] = readline();
    }
    
 
    for(let i = 0; i < numeros[0].length; i++){
        for(let j = 1; j < input; j++){
            if(numeros[j][i] != numeros[j - 1][i]){
                console.log(i);
                i = numeros[0].length;
                break;
            }
       }
    }
}