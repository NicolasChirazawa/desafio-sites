//546A - Soldiers and Bananas (https://codeforces.com/contest/546/problem/A)

/*
A soldier wants to buy w bananas in the shop. He has to pay k dollars for the first banana, 2k dollars for the second one and so on (in other words, he has to pay i·k dollars for the i-th banana).

He has n dollars. How many dollars does he have to borrow from his friend soldier to buy w bananas?

Input
The first line contains three positive integers k, n, w (1  ≤  k, w  ≤  1000, 0 ≤ n ≤ 109), the cost of the first banana, initial number of dollars the soldier has and number of bananas he wants.

Output
Output one integer — the amount of dollars that the soldier must borrow from his friend. If he doesn't have to borrow money, output 0.
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
 
    //Paga k dólares pela primeira banana, a segunda custa 2k dólares e por ai vai
    //Ele tem n dólares
    //Comprar w bananas
    //Ordem do array: [k, n, w]
 
    let input = readline().split(' ');
    let somaPA = ((Number(input[0]) + (Number(input[0]) * Number(input[2]))) * input[2]) / 2;
 
    if(somaPA <= input[1]){
        console.log(0);
    } else {
        console.log(somaPA - input[1]);
    }
}