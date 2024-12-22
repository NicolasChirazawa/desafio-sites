// 609A - USB Flash Drives (https://codeforces.com/contest/609/problem/A)

/*
Sean is trying to save a large file to a USB flash drive. He has n USB flash drives with capacities equal to a1, a2, ..., an megabytes. The file size is equal to m megabytes.

Find the minimum number of USB flash drives needed to write Sean's file, if he can split the file between drives.

Input
The first line contains positive integer n (1 ≤ n ≤ 100) — the number of USB flash drives.

The second line contains positive integer m (1 ≤ m ≤ 105) — the size of Sean's file.

Each of the next n lines contains positive integer ai (1 ≤ ai ≤ 1000) — the sizes of USB flash drives in megabytes.

It is guaranteed that the answer exists, i. e. the sum of all ai is not less than m.

Output
Print the minimum number of USB flash drives to write Sean's file, if he can split the file between drives.

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
 
function main(){
    const quantidadeUSBS = Number(readline());
    const tamanhoArquivo = Number(readline());
    let tamanhoUSBS = [];
    
    for(let i = 0; i < quantidadeUSBS; i++){
        tamanhoUSBS[i] = Number(readline());
    }
    
    tamanhoUSBS.sort((a, b) => {return a - b})
    let minimoUSBS = tamanhoUSBS[tamanhoUSBS.length - 1];
 
    for(let j = 0; j < tamanhoUSBS.length; j++){
        if(minimoUSBS >= tamanhoArquivo){
            console.log(j + 1);
            break;
        } else {
            minimoUSBS += tamanhoUSBS[tamanhoUSBS.length - 2 - j];
        }
    }
}