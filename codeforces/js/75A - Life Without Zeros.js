//75A - Life Without Zeros (https://codeforces.com/contest/75/problem/A)

/*
Can you imagine our life if we removed all zeros from it? For sure we will have many problems.

In this problem we will have a simple example if we removed all zeros from our life, it's the addition operation. Let's assume you are given this equation a + b = c, where a and b are positive integers, and c is the sum of a and b. Now let's remove all zeros from this equation. Will the equation remain correct after removing all zeros?

For example if the equation is 101 + 102 = 203, if we removed all zeros it will be 11 + 12 = 23 which is still a correct equation.

But if the equation is 105 + 106 = 211, if we removed all zeros it will be 15 + 16 = 211 which is not a correct equation.

Input
The input will consist of two lines, the first line will contain the integer a, and the second line will contain the integer b which are in the equation as described above (1 ≤ a, b ≤ 109). There won't be any leading zeros in both. The value of c should be calculated as c = a + b.

Output
The output will be just one line, you should print "YES" if the equation will remain correct after removing all zeros, and print "NO" otherwise.

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
 
function tirarZero(valor){
    valor = String(valor).split('');
 
    for(let i = 0; i < valor.length; i++) {
        if(valor[i] == '0') { 
            valor[i] = '' 
        }
    }
    return valor.join('');
}
 
function main(){
    let valores = [];
    
    for(let i = 0; i < 2; i++){
        valores[i] = readline().split('');    
        //valores[i] = valores[i].split('')
    }
    
    let soma_com_zero = 0;
    let soma_sem_zero = 0;
 
    for(let i = 0; i < valores.length; i++){
 
        soma_com_zero += Number(valores[i].join(''));
 
        for(let j = 0; j < valores[i].length; j++){
            if(valores[i][j] == '0') { 
                valores[i][j] = '';
            }
        }
        soma_sem_zero += Number(valores[i].join(''));
    }
 
    let soma_tirar_zero = tirarZero(soma_com_zero);
 
    console.log(soma_sem_zero == soma_tirar_zero ? 'YES' : 'NO')
}