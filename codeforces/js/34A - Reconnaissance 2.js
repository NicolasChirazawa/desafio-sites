//34A - Reconnaissance 2 (https://codeforces.com/contest/34/problem/A)

/*
n soldiers stand in a circle. For each soldier his height ai is known. A reconnaissance unit can be made of such two neighbouring soldiers, whose heights difference is minimal, i.e. |ai - aj| is minimal. So each of them will be less noticeable with the other. Output any pair of soldiers that can form a reconnaissance unit.

Input
The first line contains integer n (2 ≤ n ≤ 100) — amount of soldiers. Then follow the heights of the soldiers in their order in the circle — n space-separated integers a1, a2, ..., an (1 ≤ ai ≤ 1000). The soldier heights are given in clockwise or counterclockwise direction.

Output
Output two integers — indexes of neighbouring soldiers, who should form a reconnaissance unit. If there are many optimum solutions, output any of them. Remember, that the soldiers stand in a circle.

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
 
function menorValor(a, b){
    return a[1] - b[1];
}
 
function main() {
 
    const input = readline();
    const alturas = readline().split(' ');
    let contador = 1;
 
    //Declara dicionário (pode ser '{}' também)
    let dict = new Object();
 
    for(let i = 0; i < Number(input); i++){
    
        //Ultima combinação
        if(contador == Number(input)) { contador = 0 }
 
        dict[i + 1] = Math.abs(alturas[i] - alturas[contador]);
        contador++;
    }
    //Pegar conjunto chave-valor
    let dict_array = Object.entries(dict);
    dict_array = dict_array.sort(menorValor);
 
    if(Number(dict_array[0][0]) == Number(input)){
        console.log(input + ' ' + 1)
    } else {
        console.log(dict_array[0][0] + ' ' + (Number(dict_array[0][0]) + 1))
    }
}