// 149A - Business trip (https://codeforces.com/contest/149/problem/A)

/*
What joy! Petya's parents went on a business trip for the whole year and the playful kid is left all by himself. Petya got absolutely happy. He jumped on the bed and threw pillows all day long, until...

Today Petya opened the cupboard and found a scary note there. His parents had left him with duties: he should water their favourite flower all year, each day, in the morning, in the afternoon and in the evening. "Wait a second!" — thought Petya. He know for a fact that if he fulfills the parents' task in the i-th (1 ≤ i ≤ 12) month of the year, then the flower will grow by ai centimeters, and if he doesn't water the flower in the i-th month, then the flower won't grow this month. Petya also knows that try as he might, his parents won't believe that he has been watering the flower if it grows strictly less than by k centimeters.

Help Petya choose the minimum number of months when he will water the flower, given that the flower should grow no less than by k centimeters.

Input
The first line contains exactly one integer k (0 ≤ k ≤ 100). The next line contains twelve space-separated integers: the i-th (1 ≤ i ≤ 12) number in the line represents ai (0 ≤ ai ≤ 100).

Output
Print the only integer — the minimum number of months when Petya has to water the flower so that the flower grows no less than by k centimeters. If the flower can't grow by k centimeters in a year, print -1.

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
    let centimentosMeta = Number(readline());
    let meses = readline().split(' ').map((element) => Number(element));
    let contador = 0;
 
    meses.sort((a, b) => { return a - b });
    for(let i = (meses.length - 1); i >= 0; i--){
        if(centimentosMeta > 0 && centimentosMeta != 0) {
            centimentosMeta = centimentosMeta - meses[i];
            contador++;
        } else {
            break;
        }
    }
    console.log(centimentosMeta > 0 ? -1 : contador);
}