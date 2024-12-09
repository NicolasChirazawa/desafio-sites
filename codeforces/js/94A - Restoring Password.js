//94A - Restoring Password (https://codeforces.com/contest/94/problem/A)

/*
Igor K. always used to trust his favorite Kashpirovsky Antivirus. That is why he didn't hesitate to download the link one of his groupmates sent him via QIP Infinium. The link was said to contain "some real funny stuff about swine influenza". The antivirus had no objections and Igor K. run the flash application he had downloaded. Immediately his QIP Infinium said: "invalid login/password".

Igor K. entered the ISQ from his additional account and looked at the info of his main one. His name and surname changed to "H1N1" and "Infected" correspondingly, and the "Additional Information" field contained a strange-looking binary code 80 characters in length, consisting of zeroes and ones. "I've been hacked" — thought Igor K. and run the Internet Exploiter browser to quickly type his favourite search engine's address.

Soon he learned that it really was a virus that changed ISQ users' passwords. Fortunately, he soon found out that the binary code was actually the encrypted password where each group of 10 characters stood for one decimal digit. Accordingly, the original password consisted of 8 decimal digits.

Help Igor K. restore his ISQ account by the encrypted password and encryption specification.

Input
The input data contains 11 lines. The first line represents the binary code 80 characters in length. That is the code written in Igor K.'s ISQ account's info. Next 10 lines contain pairwise distinct binary codes 10 characters in length, corresponding to numbers 0, 1, ..., 9.

Output
Print one line containing 8 characters — The password to Igor K.'s ISQ account. It is guaranteed that the solution exists.

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
    const input = readline();
    let numeros = [];
    let senha = [];
    let resposta = [];
 
    // Popular numeros
    for(let i = 0; i < 10; i++){
        numeros[i] = readline();
 
        // Quebrar senha em grupos de 10
        if (i < 8) {
            senha[i] = input.slice((i * 10), ((i * 10) + 10));
        }
    }
 
    for(let k = 0; k < senha.length; k++){
        for(let j = 0; j < numeros.length; j++){
            if(senha[k] == numeros[j]){
                resposta[k] = numeros.indexOf(numeros[j]);
                break;
            }
        }
    }
    console.log(resposta.join(''));
}