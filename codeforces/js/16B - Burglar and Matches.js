// 16B - Burglar and Matches (https://codeforces.com/contest/16/problem/B)

/*
A burglar got into a matches warehouse and wants to steal as many matches as possible. In the warehouse there are m containers, in the i-th container there are ai matchboxes, and each matchbox contains bi matches. All the matchboxes are of the same size. The burglar's rucksack can hold n matchboxes exactly. Your task is to find out the maximum amount of matches that a burglar can carry away. He has no time to rearrange matches in the matchboxes, that's why he just chooses not more than n matchboxes so that the total amount of matches in them is maximal.

Input
The first line of the input contains integer n (1 ≤ n ≤ 2·108) and integer m (1 ≤ m ≤ 20). The i + 1-th line contains a pair of numbers ai and bi (1 ≤ ai ≤ 108, 1 ≤ bi ≤ 10). All the input numbers are integer.

Output
Output the only number — answer to the problem.

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
    // Pode segurar / Contâiners
    const quantidade = readline().split(' ')
    let fosforos = [];
 
    //Populei
    for(let i = 0; i < quantidade[1]; i++){
        //Quantidade de caixas / Unidades dentro da caixa
        fosforos[i] = readline().split(' ').map((element) => Number(element));
        //fosforos[i] = fosforos[i].split(' ').map((element) => Number(element));
    }
    
    fosforos.sort((a, b) => {return a[1] - b[1]});
    
    let contador = fosforos.length - 1;
    let acumulador = 0;
 
    for(let i = 0; i < quantidade[0]; i++){
        if(contador >= 0 && fosforos[contador][0] > 0 ){
            //Todos cabem dentro de uma condicional que acelera a execução do loop
            if (i + fosforos[contador][0] < quantidade[0]){
                i += fosforos[contador][0] - 1;
                acumulador += fosforos[contador][0] * fosforos[contador][1];
                contador--;
            } else {
            //Cabe parcialmente
                let sobrou = quantidade[0] - i;
                acumulador += fosforos[contador][1] * sobrou;
                fosforos[contador][0]--;
                break;
            }
        }
        //Quebra caso a quantidade de caixas que ele possa pegar seja maior que a disponível
        if (contador == -1){ break }
    }
    console.log(acumulador);
}