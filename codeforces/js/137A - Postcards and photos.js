// 137A - Postcards and photos (https://codeforces.com/contest/137/problem/A)

/*
Polycarpus has postcards and photos hung in a row on the wall. He decided to put them away to the closet and hang on the wall a famous painter's picture. Polycarpus does it like that: he goes from the left to the right and removes the objects consecutively. As Polycarpus doesn't want any mix-ups to happen, he will not carry in his hands objects of two different types. In other words, Polycarpus can't carry both postcards and photos simultaneously. Sometimes he goes to the closet and puts the objects there, thus leaving his hands free. Polycarpus must put all the postcards and photos to the closet. He cannot skip objects. What minimum number of times he should visit the closet if he cannot carry more than 5 items?

Input
The only line of the input data contains a non-empty string consisting of letters "С" and "P" whose length does not exceed 100 characters. If the i-th character in the string is the letter "С", that means that the i-th object (the numbering goes from the left to the right) on Polycarpus' wall is a postcard. And if the i-th character is the letter "P", than the i-th object on the wall is a photo.

Output
Print the only number — the minimum number of times Polycarpus has to visit the closet.

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
 
    //Começa com ele indo no armário
    let contador = 1;
 
    //Mais de 5 iguais
    //Não pode dois diferentes
 
    let repeticao = 0;
 
    for(let i = 1; i < input.length; i++){
         if(input[i - 1] == input[i] && repeticao < 4){ repeticao++ } 
         else {
            repeticao = 0;
            contador++;
         }
    }
    console.log(contador)
}