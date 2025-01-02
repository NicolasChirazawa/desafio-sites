// 456A - Laptops (https://codeforces.com/contest/456/problem/A)

/*
One day Dima and Alex had an argument about the price and quality of laptops. Dima thinks that the more expensive a laptop is, the better it is. Alex disagrees. Alex thinks that there are two laptops, such that the price of the first laptop is less (strictly smaller) than the price of the second laptop but the quality of the first laptop is higher (strictly greater) than the quality of the second laptop.

Please, check the guess of Alex. You are given descriptions of n laptops. Determine whether two described above laptops exist.

Input
The first line contains an integer n (1 ≤ n ≤ 105) — the number of laptops.

Next n lines contain two integers each, ai and bi (1 ≤ ai, bi ≤ n), where ai is the price of the i-th laptop, and bi is the number that represents the quality of the i-th laptop (the larger the number is, the higher is the quality).

All ai are distinct. All bi are distinct.

Output
If Alex is correct, print "Happy Alex", otherwise print "Poor Alex" (without the quotes).
 
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
    // Sempre testa em duplas
    const quantidade = Number(readline());
    let laptops = [];
 
    let alexPalpite = 'Poor Alex';
 
    for(let i = 0; i < quantidade; i++){
        laptops[i] = readline().split(' ').map((element) => Number(element));
        //laptops[i] = laptops[i].split(' ').map((element) => Number(element));
    }
 
    laptops.sort((a, b) => {return a[0] - b[0]});
 
    for(let i = 1; i < laptops.length; i++){
        if(laptops[i][0] != laptops[i - 1][0]){
            if(laptops[i][1] < laptops[i - 1][1]){ 
                alexPalpite = 'Happy Alex';
            }
        }
    }
    console.log(alexPalpite)
}