// 2A - Winner (https://codeforces.com/contest/2/problem/A)

/*
    The winner of the card game popular in Berland "Berlogging" is determined according to the following rules. If at the end of the game there is only one player with the maximum number of points, he is the winner. The situation becomes more difficult if the number of such players is more than one. During each round a player gains or loses a particular number of points. In the course of the game the number of points is registered in the line "name score", where name is a player's name, and score is the number of points gained in this round, which is an integer number. If score is negative, this means that the player has lost in the round. So, if two or more players have the maximum number of points (say, it equals to m) at the end of the game, than wins the one of them who scored at least m points first. Initially each player has 0 points. It's guaranteed that at the end of the game at least one player has a positive number of points.

    Input
    The first line contains an integer number n (1  ≤  n  ≤  1000), n is the number of rounds played. Then follow n lines, containing the information about the rounds in "name score" format in chronological order, where name is a string of lower-case Latin letters with the length from 1 to 32, and score is an integer number between -1000 and 1000, inclusive.

    Output
    Print the name of the winner.
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
    let loop = Number(readline());
    let historic = [];
    let players = {};

    for(let i = 0; i < loop; i++) {
        let score = readline().split(' ');
        historic.push(score);

        if (players[score[0]] === undefined) {
            players[score[0]] = Number(score[1]);
        } else {
            players[score[0]] += Number(score[1]);
        }
    }

    let playersList = Object.entries(players);
    if (playersList.length === 1) { return console.log(playersList[0][0]) }
    
    let [playersMaxList, maxPoint] = [{}, -Infinity];
    for(let i = 0; i < playersList.length; i++) {
        if (maxPoint < playersList[i][1]) { 
            playersMaxList = { [playersList[i][0]]: playersList[i][0] };
            maxPoint = playersList[i][1];
        } else if (maxPoint === playersList[i][1]) {
            playersMaxList[playersList[i][0]] = playersList[i][0];
        };
    };
    if (playersMaxList.length === 1) { return console.log(playersMaxList[0]) }

    let newPlayersMaxList = {};
    for (let i = 0; i < historic.length; i++) {
        if (newPlayersMaxList[historic[i][0]] === undefined) {
            newPlayersMaxList[historic[i][0]] = Number(historic[i][1]);
        } else {
            newPlayersMaxList[historic[i][0]] += Number(historic[i][1]);
        }

        if (newPlayersMaxList[historic[i][0]] >= maxPoint && playersMaxList[historic[i][0]] !== undefined) { return console.log(historic[i][0]) }
    };
};