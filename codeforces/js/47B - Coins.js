// 47B - Coins (https://codeforces.com/contest/47/problem/B)

/*
    One day Vasya came across three Berland coins. They didn't have any numbers that's why Vasya didn't understand how their denominations differ. He supposed that if one coin is heavier than the other one, then it should be worth more. Vasya weighed all the three pairs of coins on pan balance scales and told you the results. Find out how the deminations of the coins differ or if Vasya has a mistake in the weighting results. No two coins are equal.

    Input
    The input data contains the results of all the weighting, one result on each line. It is guaranteed that every coin pair was weighted exactly once. Vasya labelled the coins with letters «A», «B» and «C». Each result is a line that appears as (letter)(> or < sign)(letter). For example, if coin "A" proved lighter than coin "B", the result of the weighting is A<B.

    Output
    It the results are contradictory, print Impossible. Otherwise, print without spaces the rearrangement of letters «A», «B» and «C» which represent the coins in the increasing order of their weights.
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
function letterOrder (movements) {
    if (movements[1] === '>') {
        return [movements[2], movements[0]];
    } else {
        return [movements[0], movements[2]];
    }
}

function lettersOrganize (letters, movements) {
    if (letters[movements[0]] === undefined) {
        letters[movements[0]] = '0,1';
    } else {
        const positions = letters[movements[0]].split(',');
        letters[movements[0]] = positions[0];
    }

    if (letters[movements[1]] === undefined) {
        letters[movements[1]] = '1,2';
    } else {
        const positions = letters[movements[1]].split(',');
        letters[movements[1]] = positions[1];
    }
}

function main() {
    let letters = {};

    for (let i = 0; i < 3; i++) {
        let movements = readline().split('');
        movements = letterOrder(movements);
        lettersOrganize(letters, movements);
    } 

    let response = [];
    let letterGroups = Object.entries(letters);

    for(let i = 0; i < letterGroups.length; i++) {
        response[letterGroups[i][1]] = letterGroups[i][0];
    }

    if (response.length !== 3) { return console.log('Impossible') }
    console.log(response.join(''))
};