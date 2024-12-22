// 58A - Chat Room (https://codeforces.com/contest/58/problem/A)

/*
Vasya has recently learned to type and log on to the Internet. He immediately entered a chat room and decided to say hello to everybody. Vasya typed the word s. It is considered that Vasya managed to say hello if several letters can be deleted from the typed word so that it resulted in the word "hello". For example, if Vasya types the word "ahhellllloou", it will be considered that he said hello, and if he types "hlelo", it will be considered that Vasya got misunderstood and he didn't manage to say hello. Determine whether Vasya managed to say hello by the given word s.

Input
The first and only line contains the word s, which Vasya typed. This word consisits of small Latin letters, its length is no less that 1 and no more than 100 letters.

Output
If Vasya managed to say hello, print "YES", otherwise print "NO".

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
 
function main(){
 
    const input = readline();
    let hello = ['h', 'e', 'l', 'l', 'o'];
    let contador = 0;
 
    for (let i = 0; i < input.length; i++){
 
        if(input[i] == hello[contador]){
            contador++;
        }
    }
 
    console.log(contador == 5 ? 'YES' : 'NO');
}