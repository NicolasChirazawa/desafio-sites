// 74A - Room Leader (https://codeforces.com/problemset/problem/74/A)

/*
    Let us remind you part of the rules of Codeforces. The given rules slightly simplified, use the problem statement as a formal document.

    In the beginning of the round the contestants are divided into rooms. Each room contains exactly n participants. During the contest the participants are suggested to solve five problems, A, B, C, D and E. For each of these problem, depending on when the given problem was solved and whether it was solved at all, the participants receive some points. Besides, a contestant can perform hacks on other contestants. For each successful hack a contestant earns 100 points, for each unsuccessful hack a contestant loses 50 points. The number of points for every contestant is represented by the sum of points he has received from all his problems, including hacks.

    You are suggested to determine the leader for some room; the leader is a participant who has maximum points.

    Input
    The first line contains an integer n, which is the number of contestants in the room (1 ≤ n ≤ 50). The next n lines contain the participants of a given room. The i-th line has the format of "handlei plusi minusi ai bi ci di ei" — it is the handle of a contestant, the number of successful hacks, the number of unsuccessful hacks and the number of points he has received from problems A, B, C, D, E correspondingly. The handle of each participant consists of Latin letters, digits and underscores and has the length from 1 to 20 characters. There are the following limitations imposed upon the numbers:

    0 ≤ plusi, minusi ≤ 50;
    150 ≤ ai ≤ 500 or ai = 0, if problem A is not solved;
    300 ≤ bi ≤ 1000 or bi = 0, if problem B is not solved;
    450 ≤ ci ≤ 1500 or ci = 0, if problem C is not solved;
    600 ≤ di ≤ 2000 or di = 0, if problem D is not solved;
    750 ≤ ei ≤ 2500 or ei = 0, if problem E is not solved.
    All the numbers are integer. All the participants have different handles. It is guaranteed that there is exactly one leader in the room (i.e. there are no two participants with the maximal number of points).

    Output
    Print on the single line the handle of the room leader.
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
    let quantidade = Number(readline());

    let mais_pontos = ['', 0];

    for(let i = 0; i < quantidade; i++) {
        let valores = readline().split(' ');

        // Considerando já os hacks
        let valor_soma_atual = (Number(valores[1]) * 100) - (Number(valores[2]) * 50);

        // Valores ABCDE partem do 3
        let loop = 3;
        while(true) {
            valor_soma_atual += Number(valores[loop]);
            loop++;
            if(loop === valores.length) { break }
        }

        if(i === 0) {
            mais_pontos = [valores[0], valor_soma_atual];           
        }
        
        if(valor_soma_atual > mais_pontos[1]) { 
            mais_pontos = [valores[0], valor_soma_atual];
        }
    }   

    return console.log(mais_pontos[0]);
}