// 44E - Anfisa the Monkey (https://codeforces.com/contest/44/problem/E)

/*
    Anfisa the monkey learns to type. She is yet unfamiliar with the "space" key and can only type in lower-case Latin letters. Having typed for a fairly long line, Anfisa understood that it would be great to divide what she has written into k lines not shorter than a and not longer than b, for the text to resemble human speech more. Help Anfisa.

    Input
    The first line contains three integers k, a and b (1 ≤ k ≤ 200, 1 ≤ a ≤ b ≤ 200). The second line contains a sequence of lowercase Latin letters — the text typed by Anfisa. It is guaranteed that the given line is not empty and its length does not exceed 200 symbols.

    Output
    Print k lines, each of which contains no less than a and no more than b symbols — Anfisa's text divided into lines. It is not allowed to perform any changes in the text, such as: deleting or adding symbols, changing their order, etc. If the solution is not unique, print any of them. If there is no solution, print "No solution" (without quotes).
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
    // Frases, mínimo, máximo
    const input = readline().split(' ').map((element) => Number(element));
    const phase = readline();

    if (input[0] * input[1] > phase.length) { return console.log('No solution') };
    if (input[0] * input[2] < phase.length) { return console.log('No solution') };

    let min_phase = 0;

    for (let i = 0; i < input[2] - input[1]; i++) {
        if (phase.length >= input[0] * (input[1] + i)) {
            min_phase = input[1] + i;
        } else {
            break;
        }
    };

    let EXTRA = phase.length - (min_phase * input[0]);
    let extra_skip = false;
    let phase_response = '';

    for (let i = 0; i < phase.length; i++) {
        phase_response += phase[i];

        if (phase_response.length >= min_phase) {
            if (EXTRA > 0 && extra_skip === false) { 
                EXTRA -= 1;
                extra_skip = true;
            } else if (extra_skip === true || EXTRA <= 0) {
                extra_skip = false;
                console.log(phase_response);
                phase_response = '';
            }
        }
    }
}