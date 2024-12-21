// 255A - Greg's Workout (https://codeforces.com/contest/255/problem/A)

/*
Greg is a beginner bodybuilder. Today the gym coach gave him the training plan. All it had was n integers a1, a2, ..., an. These numbers mean that Greg needs to do exactly n exercises today. Besides, Greg should repeat the i-th in order exercise ai times.

Greg now only does three types of exercises: "chest" exercises, "biceps" exercises and "back" exercises. Besides, his training is cyclic, that is, the first exercise he does is a "chest" one, the second one is "biceps", the third one is "back", the fourth one is "chest", the fifth one is "biceps", and so on to the n-th exercise.

Now Greg wonders, which muscle will get the most exercise during his training. We know that the exercise Greg repeats the maximum number of times, trains the corresponding muscle the most. Help Greg, determine which muscle will get the most training.

Input
The first line contains integer n (1 ≤ n ≤ 20). The second line contains n integers a1, a2, ..., an (1 ≤ ai ≤ 25) — the number of times Greg repeats the exercises.

Output
Print word "chest" (without the quotes), if the chest gets the most exercise, "biceps" (without the quotes), if the biceps gets the most exercise and print "back" (without the quotes) if the back gets the most exercise.

It is guaranteed that the input is such that the answer to the problem is unambiguous.

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
    const input = Number(readline());
    const treino = readline().split(' ').map((element) => Number(element));
 
    /* Ordem de exercício "chest", "biceps", "back" e volta */
 
    let resposta = [[0, "chest"], [0, "biceps"], [0, "back"]];
 
    for(let i = 0; i < input; i++){
        if(i % 3 == 0){
            resposta[0][0] += treino[i];
        } else if ((i - 1) % 3 == 0){
            resposta[1][0] += treino[i];
        } else {
            resposta[2][0] += treino[i];
        }
    }
 
    if (resposta[0][0] > resposta[1][0] && resposta[0][0] > resposta[2][0]){
        console.log("chest");
    } else if (resposta[1][0] > resposta[2][0]){
        console.log("biceps");
    } else {
        console.log("back");
    }
}