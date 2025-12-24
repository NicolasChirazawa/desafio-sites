// 30A - Accounting (https://codeforces.com/contest/30/problem/A)

/*
    A long time ago in some far country lived king Copa. After the recent king's reform, he got so large powers that started to keep the books by himself.

    The total income A of his kingdom during 0-th year is known, as well as the total income B during n-th year (these numbers can be negative — it means that there was a loss in the correspondent year).

    King wants to show financial stability. To do this, he needs to find common coefficient X — the coefficient of income growth during one year. This coefficient should satisfy the equation:

    A·Xn = B.
    Surely, the king is not going to do this job by himself, and demands you to find such number X.

    It is necessary to point out that the fractional numbers are not used in kingdom's economy. That's why all input numbers as well as coefficient X must be integers. The number X may be zero or negative.

    Input
    The input contains three integers A, B, n (|A|, |B| ≤ 1000, 1 ≤ n ≤ 10).

    Output
    Output the required integer coefficient X, or «No solution», if such a coefficient does not exist or it is fractional. If there are several possible solutions, output any of them.
*/

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
    let input = readline().split(' ').map((element) => Number(element));
    
    const right_value = input[1] / input[0];
    const LIMIT = 1000;
 
    if (input[0] === 0 && input[1] === 0)  { return console.log(0) };
    if (input[0] === 0) { return console.log('No solution') };
 
    for (let i = -1000; i <= LIMIT; i++) {
        let left_value;
 
        for (let j = 0; j < input[2]; j++) {
            if (left_value === undefined) { left_value = i }
            else { left_value *= i }
        }
        if (left_value === right_value) { return console.log(i) }
    }
    return console.log('No solution');
}