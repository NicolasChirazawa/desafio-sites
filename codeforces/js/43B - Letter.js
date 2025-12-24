// 43B - Letter (https://codeforces.com/contest/43/problem/B)

/*
    Vasya decided to write an anonymous letter cutting the letters out of a newspaper heading. He knows heading s1 and text s2 that he wants to send. Vasya can use every single heading letter no more than once. Vasya doesn't have to cut the spaces out of the heading — he just leaves some blank space to mark them. Help him; find out if he will manage to compose the needed text.

    Input
    The first line contains a newspaper heading s1. The second line contains the letter text s2. s1 и s2 are non-empty lines consisting of spaces, uppercase and lowercase Latin letters, whose lengths do not exceed 200 symbols. The uppercase and lowercase letters should be differentiated. Vasya does not cut spaces out of the heading.

    Output
    If Vasya can write the given anonymous letter, print YES, otherwise print NO
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
    const dictionary = {};
    const heading = readline();
    const text = readline();

    for (let i = 0; i < heading.length; i++) {
        if (String(heading[i]).charCodeAt(0) !== 32) {
            if (dictionary[heading[i]] === undefined) {
                dictionary[heading[i]] = 1;
            } else {
                dictionary[heading[i]] = dictionary[heading[i]] + 1;
            }
        }
    }

    for (let i = 0; i < text.length; i++) {
        if (String(text[i]).charCodeAt(0) !== 32) {
            if (dictionary[text[i]] === undefined) { return console.log('NO'); };
            dictionary[text[i]] = dictionary[text[i]] - 1;
            if (dictionary[text[i]] < 0) { return console.log('NO') }
        }
    }
    console.log('YES');
}