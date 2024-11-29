//158A - Next Round (https://codeforces.com/contest/158/problem/A)

/* "Contestant who earns a score equal to or greater than the k-th place finisher's score will advance to the next round, as long as the contestant earns a positive score..." — an excerpt from contest rules.

A total of n participants took part in the contest (n ≥ k), and you already know their scores. Calculate how many participants will advance to the next round.

Input
The first line of the input contains two integers n and k (1 ≤ k ≤ n ≤ 50) separated by a single space.

The second line contains n space-separated integers a1, a2, ..., an (0 ≤ ai ≤ 100), where ai is the score earned by the participant who got the i-th place. The given sequence is non-increasing (that is, for all i from 1 to n - 1 the following condition is fulfilled: ai ≥ ai + 1).

Output
Output the number of participants who advance to the next round.

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
 
    const firstLineInput = readline().split(' ').map(Number); // [1,4,5]
    const secondLineInputArr = readline().split(' ').map(Number); // [1,5,9]
 
    const n = firstLineInput[0];
    const k = firstLineInput[1];
    let soma = 0;
 
    for (let loop = 0; loop < n; loop++) {
            
        if (secondLineInputArr[loop] >= secondLineInputArr[k - 1] && secondLineInputArr[loop] > 0) {
            soma++;  
        }
    }
    console.log(soma);
}