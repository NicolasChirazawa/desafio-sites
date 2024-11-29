//411A - Password Check (https://codeforces.com/contest/411/problem/A) 

/*
You have probably registered on Internet sites many times. And each time you should enter your invented password. Usually the registration form automatically checks the password's crypt resistance. If the user's password isn't complex enough, a message is displayed. Today your task is to implement such an automatic check.

Web-developers of the company Q assume that a password is complex enough, if it meets all of the following conditions:

the password length is at least 5 characters;
the password contains at least one large English letter;
the password contains at least one small English letter;
the password contains at least one digit.
You are given a password. Please implement the automatic check of its complexity for company Q.

Input
The first line contains a non-empty sequence of characters (at most 100 characters). Each character is either a large English letter, or a small English letter, or a digit, or one of characters: "!", "?", ".", ",", "_".

Output
If the password is complex enough, print message "Correct" (without the quotes), otherwise print message "Too weak" (without the quotes).

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
    const input = readline();
    

    if(input.length >=5 && input.match(/[a-z]/) && input.match(/[A-Z]/) && input.match(/[0-9]/)){
        console.log('Correct');
    } else { console.log('Too weak')}
}