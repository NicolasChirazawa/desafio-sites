/*
Scrooge McDuck keeps his most treasured savings in a home safe with a combination lock. Each time he wants to put there the treasures that he's earned fair and square, he has to open the lock.

The combination lock is represented by n rotating disks with digits from 0 to 9 written on them. Scrooge McDuck has to turn some disks so that the combination of digits on the disks forms a secret combination. In one move, he can rotate one disk one digit forwards or backwards. In particular, in one move he can go from digit 0 to digit 9 and vice versa. What minimum number of actions does he need for that?

Input
The first line contains a single integer n (1 ≤ n ≤ 1000) — the number of disks on the combination lock.

The second line contains a string of n digits — the original state of the disks.

The third line contains a string of n digits — Scrooge McDuck's combination that opens the lock.

Output
Print a single integer — the minimum number of moves Scrooge McDuck needs to open the lock.
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
 
function minimumMove(a, b){
    let c = 0;
 
    if(Math.abs(Number(a) - Number(b)) <= 5){
        c = Math.abs(Number(a) - Number(b));
    } else if (Number(a) > Number(b)) {
       c = 10 - Math.abs(Number(a) - Number(b))
    } else {
        c = 10 - Math.abs(Number(b) - Number(a))
    }
    return c;
}
 
function main() {
    const input = readline();
    const posicao = String(readline());
    const segredo = String(readline());
    let resultado = 0;
 
    for(let i = 0; i < input; i++){
        resultado += minimumMove(posicao[i], segredo[i]);
    }
    console.log(resultado);
}