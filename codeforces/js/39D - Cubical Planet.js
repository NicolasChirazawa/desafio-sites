// 39D - Cubibal Planet (https://codeforces.com/problemset/problem/39/D)

/*
    You can find anything whatsoever in our Galaxy! A cubical planet goes round an icosahedral star. Let us introduce a system of axes so that the edges of the cubical planet are parallel to the coordinate axes and two opposite vertices lay in the points (0, 0, 0) and (1, 1, 1). Two flies live on the planet. At the moment they are sitting on two different vertices of the cubical planet. Your task is to determine whether they see each other or not. The flies see each other when the vertices they occupy lie on the same face of the cube.

    Input
    The first line contains three space-separated integers (0 or 1) — the coordinates of the first fly, the second line analogously contains the coordinates of the second fly.

    Output
    Output "YES" (without quotes) if the flies see each other. Otherwise, output "NO".
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
    let ponto_1 = readline().split(' ');
    let ponto_2 = readline().split(' ');

    const quantidade_pontos = ponto_1.length;
    let diferencas = 0;

    for(let i = 0; i < quantidade_pontos; i++) {
        if(ponto_1[i] !== ponto_2[i]) { diferencas++ }
    }

    diferencas === 3 ? console.log('NO') : console.log('YES');
}