//16A - Flag (https://codeforces.com/contest/16/problem/A)

/*
According to a new ISO standard, a flag of every country should have a chequered field n × m, each square should be of one of 10 colours, and the flag should be «striped»: each horizontal row of the flag should contain squares of the same colour, and the colours of adjacent horizontal rows should be different. Berland's government asked you to find out whether their flag meets the new ISO standard.

Input
The first line of the input contains numbers n and m (1 ≤ n, m ≤ 100), n — the amount of rows, m — the amount of columns on the flag of Berland. Then there follows the description of the flag: each of the following n lines contain m characters. Each character is a digit between 0 and 9, and stands for the colour of the corresponding square.

Output
Output YES, if the flag meets the new ISO standard, and NO otherwise.

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
    const input = readline().split(' ');
    let bandeira = [];
    let resposta = 'YES';
 
    for(let i = 0; i < input[0]; i++){
        //Populando
        bandeira[i] = readline().split('');
 
        //Condicional comparando elementos do array
        for(let k = 1; k < input[1]; k++){
            if(bandeira[i][k] != bandeira[i][k - 1]){
                resposta = 'NO'
                break;
            }
        }
 
            //Condicional primeiro elemento da coluna
        if(i > 0){
            if(bandeira[i][0] == bandeira[i - 1][0]){
                resposta = 'NO'
                break;
            } 
        }
    }
    console.log(resposta);
}