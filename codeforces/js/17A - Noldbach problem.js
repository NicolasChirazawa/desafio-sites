// 17A - Noldbach problem (https://codeforces.com/contest/17/problem/A)

/*
Nick is interested in prime numbers. Once he read about Goldbach problem. It states that every even integer greater than 2 can be expressed as the sum of two primes. That got Nick's attention and he decided to invent a problem of his own and call it Noldbach problem. Since Nick is interested only in prime numbers, Noldbach problem states that at least k prime numbers from 2 to n inclusively can be expressed as the sum of three integer numbers: two neighboring prime numbers and 1. For example, 19 = 7 + 11 + 1, or 13 = 5 + 7 + 1.

Two prime numbers are called neighboring if there are no other prime numbers between them.

You are to help Nick, and find out if he is right or wrong.

Input
The first line of the input contains two integers n (2 ≤ n ≤ 1000) and k (0 ≤ k ≤ 1000).

Output
Output YES if at least k prime numbers from 2 to n inclusively can be expressed as it was described above. Otherwise output NO.

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
 
function numeroPrimo(input){
    let primos = [2, 3];
 
    for(let i = 4; i <= input; i++){
        for(let j = 0; primos.length; j++){
            if(i % primos[j] == 0){ break }
            if(j == primos.length - 1) { primos.push(i) }
        }
    }
 
    // Se quiser só até o número 2, o três estará extra, então não entra na condição
    if(primos.length > 1) {
 
        let tamanho_primos = primos.length;
        let teste_ultimo_primo = primos[primos.length - 1] + 1;
 
        while(tamanho_primos == primos.length){
            for(let i = 0; i < primos.length; i++){
                if(teste_ultimo_primo % primos[i] == 0) { break }
 
                if(i == primos.length - 1){ primos.push(teste_ultimo_primo) }
            }
 
        teste_ultimo_primo++;
        }
    }
    return primos;
}
 
function testeNoldbackProblem(primos){
 
    let respostas = []; 
 
    // Há sempre um primo a mais para o teste final.
    for(let i = 0; i < primos.length - 1; i++){
 
        // Regra soma: Dois primos vizinhos (números primos adjacentes) e o número 1
        let valor_soma_limite = primos[i] + primos[i + 1] + 1;
 
        // Começa com a soma de dois primos mais um. Obrigatoriamente, no mínimo, deve ser 6, ou seja, primos[2, 3, 5...] não é necessário testar
        for(let j = 3; j < primos.length; j++){
            if(valor_soma_limite == primos[j] && primos[j] != primos[primos.length - 1]) { 
                respostas.push(primos[j]);
                break; 
            }
        }
    }
    return respostas;
}
 
 
function main() {
    let input = readline().split(' ').map((element) => Number(element));
 
    let numerosPrimos = numeroPrimo(input[0]);
    let aprovadosNoldbachProblem = testeNoldbackProblem(numerosPrimos);
 
    console.log(aprovadosNoldbachProblem.length >= input[1] ? 'YES' : 'NO');
}