// 14B - Young Photographer (https://codeforces.com/problemset/problem/14/B)

/*
    Among other things, Bob is keen on photography. Especially he likes to take pictures of sportsmen. That was the reason why he placed himself in position x0 of a long straight racetrack and got ready to take pictures. But the problem was that not all the runners passed him. The total amount of sportsmen, training at that racetrack, equals n. And each of them regularly runs distances within a particular segment of the racetrack, which is the same for each sportsman. For example, the first sportsman runs from position a1 to position b1, the second — from a2 to b2

    What is the minimum distance that Bob should move to have a chance to take pictures of each sportsman? Bob can take a picture of a sportsman, if he stands within the segment that this sportsman covers on the racetrack.

    Input
    The first line of the input file contains integers n and x0 (1 ≤ n ≤ 100; 0 ≤ x0 ≤ 1000). The following n lines contain pairs of integers ai, bi (0 ≤ ai, bi ≤ 1000; ai ≠ bi).

    Output
    Output the required minimum distance in the same units as the positions on the racetrack. If there is no such a position, output -1.
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

function organizeOrder (coordenate) {
    if (coordenate[0] > coordenate[1]) {
        return [coordenate[1], coordenate[0]];
    } else {
        return [coordenate[0], coordenate[1]];
    }
}

function main() {
    let initial_coordenate = readline().split(' ').map((coordenate) => Number(coordenate));
    let [lower_coordenate, bigger_coordenate] = [-Infinity, Infinity];

    // let teste = ['1 2', '2 3', '3 4'];
    for (let i = 0; i < initial_coordenate[0]; i++) {
        let coordenate = readline().split(' ').map((coordenate) => Number(coordenate));

        coordenate = organizeOrder(coordenate);
        if (coordenate[0] > lower_coordenate) {
            lower_coordenate = coordenate[0];
        }
        if (coordenate[1] < bigger_coordenate) {
            bigger_coordenate = coordenate[1];
        }
    }

    if (lower_coordenate > bigger_coordenate) { return console.log(-1) };
    
    if (initial_coordenate[1] < lower_coordenate)  { return console.log(lower_coordenate      - initial_coordenate[1]) }
    if (initial_coordenate[1] > bigger_coordenate) { return console.log(initial_coordenate[1] - bigger_coordenate    ) }

    return console.log(0);
}