//14A - Letter (https://codeforces.com/contest/14/problem/A)

/*
A boy Bob likes to draw. Not long ago he bought a rectangular graph (checked) sheet with n rows and m columns. Bob shaded some of the squares on the sheet. Having seen his masterpiece, he decided to share it with his elder brother, who lives in Flatland. Now Bob has to send his picture by post, but because of the world economic crisis and high oil prices, he wants to send his creation, but to spend as little money as possible. For each sent square of paper (no matter whether it is shaded or not) Bob has to pay 3.14 burles. Please, help Bob cut out of his masterpiece a rectangle of the minimum cost, that will contain all the shaded squares. The rectangle's sides should be parallel to the sheet's sides.

Input
The first line of the input data contains numbers n and m (1 ≤ n, m ≤ 50), n — amount of lines, and m — amount of columns on Bob's sheet. The following n lines contain m characters each. Character «.» stands for a non-shaded square on the sheet, and «*» — for a shaded square. It is guaranteed that Bob has shaded at least one square.

Output
Output the required rectangle of the minimum cost. Study the output data in the sample tests to understand the output format better.

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
    const input = readline().split(' ');
    let numbers = [];
    let horizontal = ['', ''];
    let vertical = ['', ''];
 
    //Populando
    for(let i = 0; i < input[0]; i++){
        
        numbers[i] = readline();
 
        if(horizontal[0] === '' && numbers[i].indexOf('*') >= 0){
            horizontal[0] = i;
        }
        if(numbers[i].indexOf('*') != -1){
            horizontal[1] = i;
        }
    }
 
    for(let j = 0; j < input[1]; j++){
        for(let k = 0; k < input[0]; k++){
 
            if(vertical[0] === '' && numbers[k][j].indexOf("*") >= 0) {
                vertical[0] = j;
             }
             if(numbers[k][j].indexOf('*') != -1) {
                vertical[1] = j;
             }
        }
    }
 
    for(let l = horizontal[0]; l <= horizontal[1]; l++){
        console.log(numbers[l].slice(vertical[0], vertical[1] + 1));
    }
}