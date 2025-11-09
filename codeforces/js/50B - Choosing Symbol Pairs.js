// 50B - Chossing Symbol Pairs (https://codeforces.com/contest/50/problem/B)

/*
    There is a given string S consisting of N symbols. Your task is to find the number of ordered pairs of integers i and j such that

    1. 1 ≤ i, j ≤ N

    2. S[i] = S[j], that is the i-th symbol of string S is equal to the j-th.

    Input
    The single input line contains S, consisting of lowercase Latin letters and digits. It is guaranteed that string S in not empty and its length does not exceed 105.

    Output
    Print a single number which represents the number of pairs i and j with the needed property. Pairs (x, y) and (y, x) should be considered different, i.e. the ordered pairs count.
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
    let word = readline();
    let dictionary = {};
    let array = [];
    let response = 0;

    for (let i = 0; i < word.length; i++) {
        if (dictionary[word[i]] === undefined) {
            dictionary[word[i]] = 1;
            array.push(word[i]);
        } else {
            dictionary[word[i]]++;
        };
    };
    
    for(let i = 0; i < array.length; i++) {
        response += (dictionary[array[i]] * dictionary[array[i]]);
    }
    console.log(response);
};