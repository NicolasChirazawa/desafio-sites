// 106B - Choosing Laptop (https://codeforces.com/contest/106/problem/B)

/*
Vasya is choosing a laptop. The shop has n laptops to all tastes.

Vasya is interested in the following properties: processor speed, ram and hdd. Vasya is a programmer and not a gamer which is why he is not interested in all other properties.

If all three properties of a laptop are strictly less than those properties of some other laptop, then the first laptop is considered outdated by Vasya. Among all laptops Vasya does not consider outdated, he chooses the cheapest one.

There are very many laptops, which is why Vasya decided to write a program that chooses the suitable laptop. However, Vasya doesn't have his own laptop yet and he asks you to help him.

Input
The first line contains number n (1 ≤ n ≤ 100).

Then follow n lines. Each describes a laptop as speed ram hdd cost. Besides,

speed, ram, hdd and cost are integers
1000 ≤ speed ≤ 4200 is the processor's speed in megahertz
256 ≤ ram ≤ 4096 the RAM volume in megabytes
1 ≤ hdd ≤ 500 is the HDD in gigabytes
100 ≤ cost ≤ 1000 is price in tugriks
All laptops have different prices.

Output
Print a single number — the number of a laptop Vasya will choose. The laptops are numbered with positive integers from 1 to n in the order in which they are given in the input data.

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
    let quantidade = Number(readline());
    let laptops = [];
 
        let acumuladorPreco = 0;
 
    // Popular
    for(let i = 0; i < quantidade; i++){
        laptops[i] = readline().split(' ').map((element) => Number(element));
        //laptops[i] = laptops[i].split(' ').map((element) => Number(element));
        
        //Começa no zero
        laptops[i].push(i + 1);
    }
 
    for(let i = 0; i < quantidade; i++){
        if(quantidade == 1){ break }
        
        for(let k = 0; k < quantidade; k++){
            
            // Verifica os três componentes
            let verificadorComponente = 0;
 
            // Pular o teste dele com ele mesmo;
            if(k == i && k != quantidade - 1) { k++ }
 
            for(let l = 0; l < laptops[i].length - 2; l++){
                if(laptops[i][verificadorComponente] < laptops[k][verificadorComponente]){
                    verificadorComponente++;
                } else {
                    break;
                }
            }
 
            // Outdated
            if(verificadorComponente == 3){
                laptops.splice(i, 1);
                i -= 1;
                quantidade -= 1;
 
                break;
            }
        }
    }
 
    laptops.sort((a, b) => a[3] - b[3]);
    console.log(laptops[0][4]);
}