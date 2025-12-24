// 29A - Spit Problem (https://codeforces.com/contest/29/problem/A)

/*
    In a Berland's zoo there is an enclosure with camels. It is known that camels like to spit. Bob watched these interesting animals for the whole day and registered in his notepad where each animal spitted. Now he wants to know if in the zoo there are two camels, which spitted at each other. Help him to solve this task.

    The trajectory of a camel's spit is an arc, i.e. if the camel in position x spits d meters right, he can hit only the camel in position x + d, if such a camel exists.

    Input
    The first line contains integer n (1 ≤ n ≤ 100) — the amount of camels in the zoo. Each of the following n lines contains two integers xi and di ( - 104 ≤ xi ≤ 104, 1 ≤ |di| ≤ 2·104) — records in Bob's notepad. xi is a position of the i-th camel, and di is a distance at which the i-th camel spitted. Positive values of di correspond to the spits right, negative values correspond to the spits left. No two camels may stand in the same position.

    Output
    If there are two camels, which spitted at each other, output YES. Otherwise, output NO.
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
    let camels = Number(readline());
    let dictionary = {};

    for (let i = 0; i < camels; i++) {
        let camel = readline().split(' ').map((element) => Number(element));
        
        if (dictionary[camel[0]] !== undefined) {
            let camel_position = dictionary[camel[0]];
            let camel_spit_position = camel[0] + camel[1];

            if (camel_spit_position === camel_position) { return console.log('YES') };
        }
        dictionary[camel[0] + camel[1]] = camel[0];
    }
    console.log('NO');
}