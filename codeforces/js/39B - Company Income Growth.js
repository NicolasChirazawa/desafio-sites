// 39B - Company Income Growth (https://codeforces.com/problemset/problem/39/B)

/*
    Petya works as a PR manager for a successful Berland company BerSoft. He needs to prepare a presentation on the company income growth since 2001 (the year of its founding) till now. Petya knows that in 2001 the company income amounted to a1 billion bourles, in 2002 — to a2 billion, ..., and in the current (2000 + n)-th year — an billion bourles. On the base of the information Petya decided to show in his presentation the linear progress history which is in his opinion perfect. According to a graph Petya has already made, in the first year BerSoft company income must amount to 1 billion bourles, in the second year — 2 billion bourles etc., each following year the income increases by 1 billion bourles. Unfortunately, the real numbers are different from the perfect ones. Among the numbers ai can even occur negative ones that are a sign of the company’s losses in some years. That is why Petya wants to ignore some data, in other words, cross some numbers ai from the sequence and leave only some subsequence that has perfect growth.

    Thus Petya has to choose a sequence of years y1, y2, ..., yk,so that in the year y1 the company income amounted to 1 billion bourles, in the year y2 — 2 billion bourles etc., in accordance with the perfect growth dynamics. Help him to choose the longest such sequence.

    Input
    The first line contains an integer n (1 ≤ n ≤ 100). The next line contains n integers ai ( - 100 ≤ ai ≤ 100). The number ai determines the income of BerSoft company in the (2000 + i)-th year. The numbers in the line are separated by spaces.

    Output
    Output k — the maximum possible length of a perfect sequence. In the next line output the sequence of years y1, y2, ..., yk. Separate the numbers by spaces. If the answer is not unique, output any. If no solution exist, output one number 0.
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
    let lucro = readline().split(' ').map((elemento) => Number(elemento));

    let lucro_linha = 1;
    let lucro_anos = []

    for(let i = 0; i < quantidade; i++) {
        if(lucro[i] === lucro_linha) { 
            lucro_linha++;
            lucro_anos.push((2000 + i + 1));
        }
    }

    console.log(lucro_anos.length);
    if(lucro_anos.length !== 0) { 
        lucro_anos = lucro_anos.join(' ');
        console.log(lucro_anos);
    }
}