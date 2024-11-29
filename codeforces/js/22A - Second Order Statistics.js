//22A - Second Order Statics (https://codeforces.com/contest/22/problem/A)

/*
Once Bob needed to find the second order statistics of a sequence of integer numbers. Lets choose each number from the sequence exactly once and sort them. The value on the second position is the second order statistics of the given sequence. In other words it is the smallest element strictly greater than the minimum. Help Bob solve this problem.

Input
The first input line contains integer n (1 ≤ n ≤ 100) — amount of numbers in the sequence. The second line contains n space-separated integer numbers — elements of the sequence. These numbers don't exceed 100 in absolute value.

Output
If the given sequence has the second order statistics, output this order statistics, otherwise output NO.

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

function compareNumber(a, b){
    return a - b;
}

function main() {
    let input = readline();
    let input_2 = readline();
    
    array = input_2.split(' ');
    array.sort(compareNumber);

    for(let i = 0; i < input; i++){
        if(Number(array[i + 1]) > Number(array[i])){
            console.log(array[i + 1]);
            i = input;
        } else if ((i + 1) == input || array.lenght == 0) {  
            console.log('NO')
        }
    }
}