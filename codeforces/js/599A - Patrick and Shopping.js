// 599A - Patrick and Shopping (https://codeforces.com/contest/599/problem/A)

/*
Today Patrick waits for a visit from his friend Spongebob. To prepare for the visit, Patrick needs to buy some goodies in two stores located near his house. There is a d1 meter long road between his house and the first shop and a d2 meter long road between his house and the second shop. Also, there is a road of length d3 directly connecting these two shops to each other. Help Patrick calculate the minimum distance that he needs to walk in order to go to both shops and return to his house.


Patrick always starts at his house. He should visit both shops moving only along the three existing roads and return back to his house. He doesn't mind visiting the same shop or passing the same road multiple times. The only goal is to minimize the total distance traveled.

Input
The first line of the input contains three integers d1, d2, d3 (1 ≤ d1, d2, d3 ≤ 108) — the lengths of the paths.

d1 is the length of the path connecting Patrick's house and the first shop;
d2 is the length of the path connecting Patrick's house and the second shop;
d3 is the length of the path connecting both shops.
Output
Print the minimum distance that Patrick will have to walk in order to visit both shops and return to his house.

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
    
    /*
        d1: distância da casa do Patrick até o primeiro shopping;
        d2: distância da casa do Patrick até o segundo shopping;
        d3: distância que separa ambos os shoppings
 
        Visitar os dois shoppings pelo menos caminho
    */
 
    const input = readline().split(' ').map((element) => Number(element));
    let valor = [0, 0];
    let resultado = 0;
 
    if(input[0] <= input[1]){
        valor[0] = input[0];
        valor[1] = input[1];
    } else {
        valor[0] = input[1];
        valor[1] = input[0];
    }
 
    if(valor[0] + valor[1] < input[2]) {
        resultado = (valor[0] * 2) + (valor[1] * 2);
    } else if (input[2] + valor[0] < valor[1]){
        resultado = (valor[0] * 2) + (input[2] * 2);
    } else {
        resultado = valor[0] + valor[1] + input[2];
    }
 
    /*
    /* Solução poluída
    // Vai para o primeiro shopping
    if(input[0] < input[1]){
        //Por dentro, ambos vão pelo input[1]
        if(input[0] + input[1] < input[2]) {
            console.log('teste 1');
            resultado = input[0] + (input[1] * 2);
            //Ambos passam pelo input[2]
        } else if(input[2] + input[0] < input[1]){
            console.log('teste 2');
            resultado = (input[0] * 2) + (input[2] * 2);
        } else {
            console.log('teste 3');
            resultado = input[0] + input[1] + input[2];
        }
    }  else {
        if(input[0] + input[1] < input[2]) {
            console.log('teste 4');
            resultado = (input[0] * 2) + (input[1] * 2);
        } else if(input[2] + input[1] < input[0]) {
            console.log('teste 5');
            resultado = (input[1] * 2) + (input[2] * 2);
        } else {
            console.log('teste 6');
            resultado = input[0] + input[1] + input[2];
        }
    }
 
    if(input[0] + input[1] < input[2]){
        resultado = (input[0] * 2) + (input[1] * 2);
    }
    */
 
    console.log(resultado);
}