//9A - Die Roll (https://codeforces.com/contest/9/problem/A)

/*
Yakko, Wakko and Dot, world-famous animaniacs, decided to rest from acting in cartoons, and take a leave to travel a bit. Yakko dreamt to go to Pennsylvania, his Motherland and the Motherland of his ancestors. Wakko thought about Tasmania, its beaches, sun and sea. Dot chose Transylvania as the most mysterious and unpredictable place.

But to their great regret, the leave turned to be very short, so it will be enough to visit one of the three above named places. That's why Yakko, as the cleverest, came up with a truly genius idea: let each of the three roll an ordinary six-sided die, and the one with the highest amount of points will be the winner, and will take the other two to the place of his/her dreams.

Yakko thrown a die and got Y points, Wakko — W points. It was Dot's turn. But she didn't hurry. Dot wanted to know for sure what were her chances to visit Transylvania.

It is known that Yakko and Wakko are true gentlemen, that's why if they have the same amount of points with Dot, they will let Dot win.

Input
The only line of the input file contains two natural numbers Y and W — the results of Yakko's and Wakko's die rolls.

Output
Output the required probability in the form of irreducible fraction in format «A/B», where A — the numerator, and B — the denominator. If the required probability equals to zero, output «0/1». If the required probability equals to 1, output «1/1».

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

function mdc (a, b) {
    let resto = a % b;

    do {
        
        resto = a % b;
        a = b;
        b = resto;

    } while (resto != 0)
        return a;
}

function main() {

    //const input = readline().split('');
    const input = readline();
    let maiorValor = Math.max(...input);
    let denominador = 6;

    //Chance da Wakko ganhar
    //6 -> 1 // 5 -> 2 // 4 -> 3 // 3 -> 4...
    let numerador = 7 - maiorValor;
    valorMDC = mdc(numerador, denominador);

    if(numerador % valorMDC == 0) {
        numerador = numerador / valorMDC;
        denominador = denominador / valorMDC
    }

    console.log(`${numerador}/${denominador}`);
}