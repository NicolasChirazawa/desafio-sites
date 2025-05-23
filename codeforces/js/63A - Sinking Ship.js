//63A - Sinking Ship (https://codeforces.com/contest/63/problem/A)

/*
The ship crashed into a reef and is sinking. Now the entire crew must be evacuated. All n crew members have already lined up in a row (for convenience let's label them all from left to right with positive integers from 1 to n) and await further instructions. However, one should evacuate the crew properly, in a strict order. Specifically:

The first crew members to leave the ship are rats. Then women and children (both groups have the same priority) leave the ship. After that all men are evacuated from the ship. The captain leaves the sinking ship last.

If we cannot determine exactly who should leave the ship first for any two members of the crew by the rules from the previous paragraph, then the one who stands to the left in the line leaves the ship first (or in other words, the one whose number in the line is less).

For each crew member we know his status as a crew member, and also his name. All crew members have different names. Determine the order in which to evacuate the crew.

Input
The first line contains an integer n, which is the number of people in the crew (1 ≤ n ≤ 100). Then follow n lines. The i-th of those lines contains two words — the name of the crew member who is i-th in line, and his status on the ship. The words are separated by exactly one space. There are no other spaces in the line. The names consist of Latin letters, the first letter is uppercase, the rest are lowercase. The length of any name is from 1 to 10 characters. The status can have the following values: rat for a rat, woman for a woman, child for a child, man for a man, captain for the captain. The crew contains exactly one captain.

Output
Print n lines. The i-th of them should contain the name of the crew member who must be the i-th one to leave the ship.

/* Common Template Start */
 
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
 
function main(){
    const input = Number(readline());
    let valores = [];
    let segundoNome = ['rat', 'woman', 'child', 'man', 'captain']
    
    for(let i = 0; i < input; i++){
        valores[i] = readline().split(' ');
 
        for(let j = 0; j < segundoNome.length; j++){
            if(valores[i][1] == segundoNome[j]){
                if(j == 2) { j = 1 }
                valores[i].push(j);
                break;
            }
        }
    }
 
    valores.sort((a, b) => {return a[2] - b[2]})
 
    for(let i = 0; i < input; i++){
        console.log(valores[i][0]);
    }
}