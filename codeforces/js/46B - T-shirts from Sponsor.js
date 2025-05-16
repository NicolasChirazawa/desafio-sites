// 46B - https://codeforces.com/contest/46/problem/B

/*
One day a well-known sponsor of a well-known contest decided to give every participant of the contest a T-shirt as a present. A natural problem occurred: on the one hand, it is not clear how many T-shirts of what sizes should be ordered, and on the other hand, one doesn't want to order too many T-shirts (and we do not exactly paper the walls with the oversupply). After considerable brain racking and some pre-estimating, the sponsor representatives ordered a certain number of T-shirts of sizes S, M, L, XL and XXL. The T-shirts turned out to bring good luck, that's why on the contest day there built up a line of K participants willing to get one. Every contestant is characterized by his/her desired T-shirt size (so it happens that for all the participants it is also one of the sizes S, M, L, XL and XXL). The participants come up to get a T-shirt one by one and try to choose the most suitable one, choosing it like this. If there is still a T-shirt of the optimal size left, that he/she takes it without further ado. Otherwise the contestant would prefer to choose a T-shirt with the size as close to the optimal one as possible (the distance between neighboring sizes is considered equal to one). If the variant of choice is not unique, the contestant will take a T-shirt of a bigger size (in case he/she grows more). For example, for a person whose optimal size is L the preference list looks like this: L, XL, M, XXL, S. Using the data on how many T-shirts of every size had been ordered by the organizers, on the size of contestants in the line determine who got a T-shirt of what size.

Input
The first line contains five non-negative integers NS, NM, NL, NXL, NXXL not exceeding 1000 which represent the number of T-shirts of the corresponding sizes. The second line contains an integer K (1 ≤ K ≤ 1000) which represents the number of participants. The next K lines contain the optimal T-shirt sizes for the contestants. The sizes are given in the order in which the participants stand in the line. It is guaranteed that NS + NM + NL + NXL + NXXL ≥ K.

Output
For each contestant, print a line containing the size of the T-shirt he/she got.
*/

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
    const leitura = readline().split(' ').map((element) => Number(element));

    const quantidadeCamisas = Number(readline());

    let tipos_camisa = {
        S: 0,
        M: 1,
        L: 2,
        XL: 3,
        XXL: 4 
    }

    let tamanhos_camisa = {
        0: 'S',
        1: 'M',
        2: 'L',
        3: 'XL',
        4: 'XXL'
    }

    for(let i = 0; i < quantidadeCamisas; i++){
        let tamanho = readline();

        tamanho = tipos_camisa[tamanho];

        if(leitura[tamanho] > 0) {
            leitura[tamanho]--;

            console.log(tamanhos_camisa[tamanho]);
        } else {
            let ordem = 1;
            let contador = 1;

            while (true) {
                if(ordem == 1){
                    ordem = 0;

                    let tamanho_atual = tamanho + contador;

                    if (tamanho_atual >= 0 && tamanho_atual <= 4 && leitura[tamanho_atual] > 0) {
                        leitura[tamanho_atual]--;
                        console.log(tamanhos_camisa[tamanho_atual]);
                        
                        break;
                    }
                } else {
                    ordem = 1;

                    let tamanho_atual = tamanho - contador;

                    if(tamanho_atual >= 0 && tamanho_atual <= 4 && leitura[tamanho_atual] > 0){
                        leitura[tamanho_atual]--;
                        console.log(tamanhos_camisa[tamanho_atual]);

                        break;
                    }

                    contador = contador + 1;
                }
            }
        }
    }
}