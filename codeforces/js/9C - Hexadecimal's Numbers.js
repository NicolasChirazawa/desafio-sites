// 9C - Hexadecimal's Numbers (https://codeforces.com/contest/9/problem/C)

/*
    One beautiful July morning a terrible thing happened in Mainframe: a mean virus Megabyte somehow got access to the memory of his not less mean sister Hexadecimal. He loaded there a huge amount of n different natural numbers from 1 to n to obtain total control over her energy.

    But his plan failed. The reason for this was very simple: Hexadecimal didn't perceive any information, apart from numbers written in binary format. This means that if a number in a decimal representation contained characters apart from 0 and 1, it was not stored in the memory. Now Megabyte wants to know, how many numbers were loaded successfully.

    Input
    Input data contains the only number n (1 ≤ n ≤ 109).

    Output
    Output the only number — answer to the problem.
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
    const number = String(readline());

    const razao = 2;
    let max_correct_numbers = 
        (number.length > 1) ? 
        (razao * (razao**(number.length - 2) - 1)) / (razao - 1) + 1 : 
        0;
    
    let skip_number = false;
    for (let i = 0; i < number.length ; i++) {
        if (number[i] > 1) {skip_number = true  }

        if (i > 0 && 
            (Number(number[i]) > 0 || skip_number)
        ) {
            max_correct_numbers += 2**(number.length - i - 1);
        }
    }
    
    max_correct_numbers += 1;
    console.log(max_correct_numbers);
}