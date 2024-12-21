// 43A - Football (https://codeforces.com/contest/43/problem/A)

/*
One day Vasya decided to have a look at the results of Berland 1910 Football Championship’s finals. Unfortunately he didn't find the overall score of the match; however, he got hold of a profound description of the match's process. On the whole there are n lines in that description each of which described one goal. Every goal was marked with the name of the team that had scored it. Help Vasya, learn the name of the team that won the finals. It is guaranteed that the match did not end in a tie.

Input
The first line contains an integer n (1 ≤ n ≤ 100) — the number of lines in the description. Then follow n lines — for each goal the names of the teams that scored it. The names are non-empty lines consisting of uppercase Latin letters whose lengths do not exceed 10 symbols. It is guaranteed that the match did not end in a tie and the description contains no more than two different teams.

Output
Print the name of the winning team. We remind you that in football the team that scores more goals is considered the winner.

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
    const linhas = Number(readline());
    let times = [['', 0],['', 0] ];
 
    for(let i = 0; i < linhas; i++){
        let golTime = readline();
 
        //Declaração do primeiro time
        if(i == 0){ 
            times[0][0] = golTime;
            times[0][1]++;
        }
 
        //contador
        if(i > 0){
            if(times[0][0] == golTime){
                times[0][1]++;
            } else {
                if(times[1][0] == 0) { times[1][0] = golTime } 
                times[1][1]++;
            }
        }
    }
    console.log(times[0][1] > times[1][1] ? times[0][0] : times[1][0])
}