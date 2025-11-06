// 8B - Obsession with Robots (https://codeforces.com/contest/8/problem/B)

/*
    The whole world got obsessed with robots,and to keep pace with the progress, great Berland's programmer Draude decided to build his own robot. He was working hard at the robot. He taught it to walk the shortest path from one point to another, to record all its movements, but like in many Draude's programs, there was a bug — the robot didn't always walk the shortest path. Fortunately, the robot recorded its own movements correctly. Now Draude wants to find out when his robot functions wrong. Heh, if Draude only remembered the map of the field, where he tested the robot, he would easily say if the robot walked in the right direction or not. But the field map was lost never to be found, that's why he asks you to find out if there exist at least one map, where the path recorded by the robot is the shortest.

    The map is an infinite checkered field, where each square is either empty, or contains an obstruction. It is also known that the robot never tries to run into the obstruction. By the recorded robot's movements find out if there exist at least one such map, that it is possible to choose for the robot a starting square (the starting square should be empty) such that when the robot moves from this square its movements coincide with the recorded ones (the robot doesn't run into anything, moving along empty squares only), and the path from the starting square to the end one is the shortest.

    In one movement the robot can move into the square (providing there are no obstrutions in this square) that has common sides with the square the robot is currently in.
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

function setInvalidMoves (move, x, y, invalidMoves) {
    if (move === 'L') {
        invalidMoves[`${x}, ${y + 1}`] = '.';
        invalidMoves[`${x}, ${y - 1}`] = '.';
        invalidMoves[`${x + 1}, ${y}`] = '.';

        x--;
    } else if (move === 'R') {
        invalidMoves[`${x}, ${y + 1}`] = '.';
        invalidMoves[`${x}, ${y - 1}`] = '.';
        invalidMoves[`${x - 1}, ${y}`] = '.';

        x++;
    } else if (move === 'U') {
        invalidMoves[`${x - 1}, ${y}`] = '.';
        invalidMoves[`${x + 1}, ${y}`] = '.';
        invalidMoves[`${x}, ${y - 1}`] = '.';

        y++;
    } else {
        invalidMoves[`${x - 1}, ${y}`] = '.';
        invalidMoves[`${x + 1}, ${y}`] = '.';
        invalidMoves[`${x}, ${y + 1}`] = '.';

        y--;
    }

    return [x, y];
}

function main() {
    let movements = readline();
    let [invalidMoves, validMoves] = [{}, {}];
    let [x, y] = [0, 0];

    for (let i = 0; i < movements.length; i++) {
        let move = movements[i];
        
        if (validMoves[`${x}, ${y}`] !== undefined) { return console.log('BUG')}

        validMoves[`${x}, ${y}`] = '.';

        [x, y] = setInvalidMoves(move, x, y, invalidMoves);

        if (invalidMoves[`${x}, ${y}`] !== undefined) { return console.log('BUG') };
    }
    console.log('OK');
};