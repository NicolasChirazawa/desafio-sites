/*
Petya loves lucky numbers. We all know that lucky numbers are the positive integers whose decimal representations contain only the lucky digits 4 and 7. For example, numbers 47, 744, 4 are lucky and 5, 17, 467 are not.

Unfortunately, not all numbers are lucky. Petya calls a number nearly lucky if the number of lucky digits in it is a lucky number. He wonders whether number n is a nearly lucky number.

Input
The only line contains an integer n (1 ≤ n ≤ 1018).

Please do not use the %lld specificator to read or write 64-bit numbers in С++. It is preferred to use the cin, cout streams or the %I64d specificator.

Output
Print on the single line "YES" if n is a nearly lucky number. Otherwise, print "NO" (without the quotes).

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
 
function luckyNumber(number){
    let counter = 0;
    let answer = 'YES';
 
    for(let i = 0; i < number.length; i++){
        if(number[i] == 4 || number[i] == 7){
            counter += 1;
        }
    }
 
    for(let j = 0; j < String(counter).length; j++){
 
        if(String(counter)[j] != 4 && String(counter)[j] != 7){
            answer = 'NO';
            break;
        }
    }
 
    return answer;
}
 
function main() {
    const input = readline();
    let answer = '';
 
    //Lucky Number
    answer = luckyNumber(input);
            
    //Answer
    console.log(answer);
}