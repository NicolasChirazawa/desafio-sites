//44A - Indian Summer

/*
Indian summer is such a beautiful time of the year! A girl named Alyona is walking in the forest and picking a bouquet from fallen leaves. Alyona is very choosy — she doesn't take a leaf if it matches the color and the species of the tree of one of the leaves she already has. Find out how many leaves Alyona has picked.

Input
The first line contains an integer n (1 ≤ n ≤ 100) — the number of leaves Alyona has found. The next n lines contain the leaves' descriptions. Each leaf is characterized by the species of the tree it has fallen from and by the color. The species of the trees and colors are given in names, consisting of no more than 10 lowercase Latin letters. A name can not be an empty string. The species of a tree and the color are given in each line separated by a space.

Output
Output the single number — the number of Alyona's leaves.

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
    let leaves = [];
    let resposta; [];
 
    for(let i = 0; i < input; i++){
        leaves[i] = readline();
        
        if(input - 1 == i ){
            const set = new Set(leaves);
            resposta = Array.from(set);
        }      
    }
    console.log(resposta.length)
}