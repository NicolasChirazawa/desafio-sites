// 10A - Power Consumption Calculation (https://codeforces.com/problemset/problem/10/A)

/*
    Tom is interested in power consumption of his favourite laptop. His laptop has three modes. In normal mode laptop consumes P1 watt per minute. T1 minutes after Tom moved the mouse or touched the keyboard for the last time, a screensaver starts and power consumption changes to P2 watt per minute. Finally, after T2 minutes from the start of the screensaver, laptop switches to the "sleep" mode and consumes P3 watt per minute. If Tom moves the mouse or touches the keyboard when the laptop is in the second or in the third mode, it switches to the first (normal) mode. Tom's work with the laptop can be divided into n time periods [l1, r1], [l2, r2], ..., [ln, rn]. During each interval Tom continuously moves the mouse and presses buttons on the keyboard. Between the periods Tom stays away from the laptop. Find out the total amount of power consumed by the laptop during the period [l1, rn].

    Input
    The first line contains 6 integer numbers n, P1, P2, P3, T1, T2 (1 ≤ n ≤ 100, 0 ≤ P1, P2, P3 ≤ 100, 1 ≤ T1, T2 ≤ 60). The following n lines contain description of Tom's work. Each i-th of these lines contains two space-separated integers li and ri (0 ≤ li < ri ≤ 1440, ri < li + 1 for i < n), which stand for the start and the end of the i-th period of work.

    Output
    Output the answer to the problem.
*/

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
    // n / p1, p2, p3 / t1, t2
    const valores = readline().split(' ').map((elemento) => Number(elemento));
    let contador = 0;
    let gasto_energetico = 0;

    for(let i = 0; i < valores[0]; i++) {
        let intervalo = readline().split(' ').map((elemento) => Number(elemento));

        // Se o inicio do segmento for diferente do tempo inicial
        if(intervalo[0] != contador && i != 0) {
            let inicio = intervalo[0] - contador;

            // Se é superior ou igual ao primeiro timer
            if (inicio >= valores[4]) { 
                gasto_energetico += (valores[1] * valores[4]);
                inicio -= valores[4];
            } else {
                gasto_energetico += (valores[1] * inicio);
                inicio = 0;
            }

            // Se é superior ou igual ao segundo timer
            if (inicio >= valores[5]) { 
                gasto_energetico += (valores[2] * valores[5]);
                inicio -= valores[5];
            } else {
                gasto_energetico += valores[2] * inicio;
                inicio = 0;
            }

            // Se tem tempo para o terceiro timer
            if(inicio > 0) { gasto_energetico += valores[3] * inicio }

        } 
    
        contador = intervalo[1];
        gasto_energetico += valores[1] * (intervalo[1] - intervalo[0]);
    }
    console.log(gasto_energetico)
}