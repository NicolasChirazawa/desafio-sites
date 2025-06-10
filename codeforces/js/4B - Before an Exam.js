// 4B - Before an Exam (https://codeforces.com/problemset/problem/4/B)

/*
    Tomorrow Peter has a Biology exam. He does not like this subject much, but d days ago he learnt that he would have to take this exam. Peter's strict parents made him prepare for the exam immediately, for this purpose he has to study not less than minTimei and not more than maxTimei hours per each i-th day. Moreover, they warned Peter that a day before the exam they would check how he has followed their instructions.

    So, today is the day when Peter's parents ask him to show the timetable of his preparatory studies. But the boy has counted only the sum of hours sumTime spent him on preparation, and now he wants to know if he can show his parents a timetable sсhedule with d numbers, where each number sсhedulei stands for the time in hours spent by Peter each i-th day on biology studies, and satisfying the limitations imposed by his parents, and at the same time the sum total of all schedulei should equal to sumTime.

    Input
    The first input line contains two integer numbers d, sumTime (1 ≤ d ≤ 30, 0 ≤ sumTime ≤ 240) — the amount of days, during which Peter studied, and the total amount of hours, spent on preparation. Each of the following d lines contains two integer numbers minTimei, maxTimei (0 ≤ minTimei ≤ maxTimei ≤ 8), separated by a space — minimum and maximum amount of hours that Peter could spent in the i-th day.

    Output
    In the first line print YES, and in the second line print d numbers (separated by a space), each of the numbers — amount of hours, spent by Peter on preparation in the corresponding day, if he followed his parents' instructions; or print NO in the unique line. If there are many solutions, print any of them.
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
    // Quantidade linhas, média tempo
    const valores = readline().split(' ').map((element) => Number(element));

    let minTempo = 0;
    let maxTempo = 0;

    let registro_inicio = [];
    let registro_final = [];

    for(let i = 0; i < valores[0]; i++) {
        let linha = readline().split(' ').map((elemento) => Number(elemento));
       
        minTempo += linha[0];
        maxTempo += linha[1];
        registro_inicio[i] = linha[0];
        registro_final[i] = linha[1];
    }

    if(minTempo > valores[1] || maxTempo < valores[1]) {
        return console.log('NO');
    } else {
        console.log('YES')
    }

    let tempo_acumulado = minTempo;

    while(true) {
        for(let i = 0; i < valores[0]; i++) {
            
            if(registro_inicio[i] < registro_final[i]) {             
                registro_inicio[i]++;
                tempo_acumulado++; 
            }

            if(tempo_acumulado === valores[1]) { break }
        }

        if(tempo_acumulado === valores[1]) { break }
    }

    let resposta = '';

    for(let i = 0; i < valores[0]; i++) {
        resposta += ' ' + registro_inicio[i];
    }

    console.log(resposta.slice(1, resposta.length))
}