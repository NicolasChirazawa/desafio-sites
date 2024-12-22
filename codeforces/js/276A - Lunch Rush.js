// 276A - Lunch Rush (https://codeforces.com/contest/276/problem/A)

/*
Having written another programming contest, three Rabbits decided to grab some lunch. The coach gave the team exactly k time units for the lunch break.

The Rabbits have a list of n restaurants to lunch in: the i-th restaurant is characterized by two integers fi and ti. Value ti shows the time the Rabbits need to lunch in the i-th restaurant. If time ti exceeds the time k that the coach has given for the lunch break, then the Rabbits' joy from lunching in this restaurant will equal fi - (ti - k). Otherwise, the Rabbits get exactly fi units of joy.

Your task is to find the value of the maximum joy the Rabbits can get from the lunch, depending on the restaurant. The Rabbits must choose exactly one restaurant to lunch in. Note that the joy value isn't necessarily a positive value.

Input
The first line contains two space-separated integers — n (1 ≤ n ≤ 104) and k (1 ≤ k ≤ 109) — the number of restaurants in the Rabbits' list and the time the coach has given them to lunch, correspondingly. Each of the next n lines contains two space-separated integers — fi (1 ≤ fi ≤ 109) and ti (1 ≤ ti ≤ 109) — the characteristics of the i-th restaurant.

Output
In a single line print a single integer — the maximum joy value that the Rabbits will get from the lunch.

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
 
function main(){
   
    /*
        n: Quantidade de restuarantes
        k: Tempo disponível
   */
    const quantidade = readline().split(' ').map((element) => Number(element)); 
    let unidadeFelicidade = '';
 
    for(let i = 0; i < quantidade[0]; i++){
        /*
            fi: Unidade de felicidade
            ti: Tempo que leva;
        */
        //restaurantes[i] = restaurantes[i].split(' ').map((element) => Number(element));
        let restaurantes = readline().split(' ').map((element) => Number(element));
 
        if(restaurantes[1] <= quantidade[1]){
        
            // Certificação se vazio
            if(unidadeFelicidade == '') { unidadeFelicidade = restaurantes[0]}
            
            unidadeFelicidade = unidadeFelicidade < restaurantes[0] ? restaurantes[0] : unidadeFelicidade;
 
        } else {
 
            let formulaFelicidade = (restaurantes[0] - (restaurantes[1] - quantidade[1]));
 
            // Certificação se vazio
            if(unidadeFelicidade == '') { unidadeFelicidade = formulaFelicidade}
 
            unidadeFelicidade = unidadeFelicidade < formulaFelicidade ? formulaFelicidade : unidadeFelicidade; 
        }
    }
    console.log(unidadeFelicidade);
}