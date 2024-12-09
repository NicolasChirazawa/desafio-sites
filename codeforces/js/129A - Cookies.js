//129A - Cookies (https://codeforces.com/contest/129/problem/A)

/*
Olga came to visit the twins Anna and Maria and saw that they have many cookies. The cookies are distributed into bags. As there are many cookies, Olga decided that it's no big deal if she steals a bag. However, she doesn't want the sisters to quarrel because of nothing when they divide the cookies. That's why Olga wants to steal a bag with cookies so that the number of cookies in the remaining bags was even, that is, so that Anna and Maria could evenly divide it into two (even 0 remaining cookies will do, just as any other even number). How many ways there are to steal exactly one cookie bag so that the total number of cookies in the remaining bags was even?

Input
The first line contains the only integer n (1 ≤ n ≤ 100) — the number of cookie bags Anna and Maria have. The second line contains n integers ai (1 ≤ ai ≤ 100) — the number of cookies in the i-th bag.

Output
Print in the only line the only number — the sought number of ways. If there are no such ways print 0.

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
    let bolsa = readline().split(' ').map((element) => Number(element));
 
    //Soma, par e ímpar
    let valores = [0, 0, 0];
 
    for(let i = 0; i < input; i++){
        
        //Descobrir a soma
        valores[0] += bolsa[i];
 
        if(bolsa[i] % 2 == 0){
            valores[1]++;
        } else {
            valores[2]++;
        }
    }
    console.log(valores[0] % 2 == 0 ? valores[1] : valores[2]);
}