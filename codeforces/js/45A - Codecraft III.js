//45A - Codecraft III (https://codeforces.com/contest/45/problem/A)

/*
Today Vasya visited a widely known site and learned that the continuation of his favourite game Codecraft II will appear after exactly k months. He looked at the calendar and learned that at the moment is the month number s. Vasya immediately got interested in what month Codecraft III will appear. Help him understand that.

All the twelve months in Vasya's calendar are named using their usual English names: January, February, March, April, May, June, July, August, September, October, November, December.

Input
The first input line contains the name of the current month. It is guaranteed that it is a proper English name of one of twelve months. The first letter is uppercase, the rest are lowercase. The second line contains integer k (0 ≤ k ≤ 100) — the number of months left till the appearance of Codecraft III.

Output
Print starting from an uppercase letter the name of the month in which the continuation of Codeforces II will appear. The printed name must be contained in the list January, February, March, April, May, June, July, August, September, October, November, December.

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
    let todayMonth = readline();
    let number = readline(); 
 
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let test = Object.keys(months);
 
    //Encontrar o mês
    for(let i = 0; i < months.length; i++){
        if(months[i] == todayMonth){
 
            todayMonth = test[i];
        }
    }
 
    number = (Number(number) + Number(todayMonth)); 
 
 
    //Achar o mês certo a somar
    if(number >= 12){
        number = number % 12;
    }
 
    console.log(months[number]);
}