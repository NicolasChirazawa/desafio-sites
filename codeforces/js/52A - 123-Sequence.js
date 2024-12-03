//48A - Rock-Paper-Scissors (https://codeforces.com/contest/48/problem/A)

/*
Uncle Fyodor, Matroskin the Cat and Sharic the Dog live their simple but happy lives in Prostokvashino. Sometimes they receive parcels from Uncle Fyodor’s parents and sometimes from anonymous benefactors, in which case it is hard to determine to which one of them the package has been sent. A photographic rifle is obviously for Sharic who loves hunting and fish is for Matroskin, but for whom was a new video game console meant? Every one of the three friends claimed that the present is for him and nearly quarreled. Uncle Fyodor had an idea how to solve the problem justly: they should suppose that the console was sent to all three of them and play it in turns. Everybody got relieved but then yet another burning problem popped up — who will play first? This time Matroskin came up with a brilliant solution, suggesting the most fair way to find it out: play rock-paper-scissors together. The rules of the game are very simple. On the count of three every player shows a combination with his hand (or paw). The combination corresponds to one of three things: a rock, scissors or paper. Some of the gestures win over some other ones according to well-known rules: the rock breaks the scissors, the scissors cut the paper, and the paper gets wrapped over the stone. Usually there are two players. Yet there are three friends, that’s why they decided to choose the winner like that: If someone shows the gesture that wins over the other two players, then that player wins. Otherwise, another game round is required. Write a program that will determine the winner by the gestures they have shown.

Input
The first input line contains the name of the gesture that Uncle Fyodor showed, the second line shows which gesture Matroskin showed and the third line shows Sharic’s gesture.

Output
Print "F" (without quotes) if Uncle Fyodor wins. Print "M" if Matroskin wins and "S" if Sharic wins. If it is impossible to find the winner, print "?".

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
 
//The first input line contains the name of the gesture that Uncle Fyodor showed, the second line shows which gesture Matroskin showed and the third line shows Sharic’s gesture.
//Print "F" (without quotes) if Uncle Fyodor wins. Print "M" if Matroskin wins and "S" if Sharic wins. If it is impossible to find the winner, print "?".
 
function main() {
 
    let ordem = [];
    let jogadores = ['F', 'M', 'S'];
    let resposta = [0, 0, 0];
 
    for(let i = 0; i < 3; i++){
        ordem[i] = readline();
 
        if(ordem[i] == 'paper'){
            resposta[0]++;
        } else if(ordem[i] == 'rock'){
            resposta[1]++;
        } else {
            resposta[2]++;
        }
 
        if(i == 2){
            resposta.join('');
        }
    }
    if(resposta.indexOf('2' != -1)){
        if(resposta[0] == '1' && resposta[1] == '2'){
            for(let i = 0; i < 3; i++){
                if(ordem[i] == 'paper'){
                    console.log(jogadores[i]);
                }
            }
        } else if(resposta[1] == '1' && resposta[2] == '2') {
            for(let i = 0; i < 3; i++){
                if(ordem[i] == 'rock'){
                    console.log(jogadores[i]);
                }
            }
        } else if(resposta[2] == '1' && resposta[0] == '2') {
            for(let i = 0; i < 3; i++){
                if(ordem[i] == 'scissors'){
                    console.log(jogadores[i]);
                }
            }
        }
        else {
            console.log('?');
        }
    } else {
        console.log('?');
    }
}