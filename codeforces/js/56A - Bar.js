// 56A - Bar (https://codeforces.com/contest/56/problem/A)

/*
According to Berland laws it is only allowed to sell alcohol to people not younger than 18 years. Vasya's job is to monitor the law's enforcement. Tonight he entered a bar and saw n people sitting there. For every one of them Vasya happened to determine either the age or the drink the person is having. Vasya can check any person, i.e. learn his age and the drink he is having at the same time. What minimal number of people should Vasya check additionally to make sure that there are no clients under 18 having alcohol drinks?

The list of all alcohol drinks in Berland is: ABSINTH, BEER, BRANDY, CHAMPAGNE, GIN, RUM, SAKE, TEQUILA, VODKA, WHISKEY, WINE

Input
The first line contains an integer n (1 ≤ n ≤ 100) which is the number of the bar's clients. Then follow n lines, each describing one visitor. A line either contains his age (an integer from 0 to 1000) or his drink (a string of capital Latin letters from 1 to 100 in length). It is guaranteed that the input data does not contain spaces and other unnecessary separators.

Only the drinks from the list given above should be considered alcohol.

Output
Print a single number which is the number of people Vasya should check to guarantee the law enforcement.

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
    const quantidade = Number(readline());
    let bebidas = ['ABSINTH', 'BEER', 'BRANDY', 'CHAMPAGNE', 'GIN', 'RUM', 'SAKE', 'TEQUILA', 'VODKA', 'WHISKEY', 'WINE'];
 
    let contador = 0;
 
    for(let i = 0; i < quantidade; i++){
        let input = readline();
 
        if(input[0].charCodeAt() < 65 && input < 18){
            contador++;
        } else{
            for(let i = 0; i < bebidas.length; i++){
                if(input == bebidas[i]){
                    contador++
                    break;
                }
            }
        }
    }
    console.log(contador);
}