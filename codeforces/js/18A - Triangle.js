// 18A - Triangle (https://codeforces.com/contest/18/problem/A)

/*
    At a geometry lesson Bob learnt that a triangle is called right-angled if it is nondegenerate and one of its angles is right. Bob decided to draw such a triangle immediately: on a sheet of paper he drew three points with integer coordinates, and joined them with segments of straight lines, then he showed the triangle to Peter. Peter said that Bob's triangle is not right-angled, but is almost right-angled: the triangle itself is not right-angled, but it is possible to move one of the points exactly by distance 1 so, that all the coordinates remain integer, and the triangle become right-angled. Bob asks you to help him and find out if Peter tricks him. By the given coordinates of the triangle you should find out if it is right-angled, almost right-angled, or neither of these.

    Input
    The first input line contains 6 space-separated integers x1, y1, x2, y2, x3, y3 — coordinates of the triangle's vertices. All the coordinates are integer and don't exceed 100 in absolute value. It's guaranteed that the triangle is nondegenerate, i.e. its total area is not zero.

    Output
    If the given triangle is right-angled, output RIGHT, if it is almost right-angled, output ALMOST, and if it is neither of these, output NEITHER.
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

function testeTrianguloRetangulo(coordenadas){

    let linha_1 = (
        ((Math.abs(coordenadas[0] - coordenadas[2]))**2)
        +
        ((Math.abs(coordenadas[1] - coordenadas[3]))**2)
    );

    let linha_2 = (
        ((Math.abs(coordenadas[0] - coordenadas[4]))**2) 
        +
        ((Math.abs(coordenadas[1] - coordenadas[5]))**2)
    );

    let linha_3 = (
        ((Math.abs(coordenadas[2] - coordenadas[4]))**2)
        +
        ((Math.abs(coordenadas[3] - coordenadas[5]))**2)
    );

    if( 
        ( linha_1 !== 0 && linha_2 !== 0 && linha_3 !== 0 ) 
        && 
        (
            linha_1 + linha_2 === linha_3 ||
            linha_1 + linha_3 === linha_2 ||
            linha_2 + linha_3 === linha_1
        )
    ) {
        return true
    }
    return false;
}

function testeTrianguloQuaseRetangulo(coordenadas) {
    
    // 3 pontos
    for(let i = 0; i < 3; i++) {
        // 4 movimentos
        for(let j = 0; j < 4; j++) {
            let coordenadas_x = [coordenadas[0], coordenadas[2], coordenadas[4]];
            let coordenadas_y = [coordenadas[1], coordenadas[3], coordenadas[5]];

            if(j === 0) {
                coordenadas_x[i]++;
            } else if(j === 1) {
                coordenadas_x[i]--;
            } else if(j === 2) {
                coordenadas_y[i]++;
            } else if(j === 3) {
                coordenadas_y[i]--;
            }

            let linha_1 = (
                ((Math.abs(coordenadas_x[0] - coordenadas_x[1]))**2)
                +
                ((Math.abs(coordenadas_y[0] - coordenadas_y[1]))**2)
            );

            let linha_2 = (
                ((Math.abs(coordenadas_x[0] - coordenadas_x[2]))**2) 
                +
                ((Math.abs(coordenadas_y[0] - coordenadas_y[2]))**2)
            );

            let linha_3 = (
                ((Math.abs(coordenadas_x[1] - coordenadas_x[2]))**2)
                +
                ((Math.abs(coordenadas_y[1] - coordenadas_y[2]))**2)
            );

            if(
                ( linha_1 !== 0 && linha_2 !== 0 && linha_3 !== 0 ) 
                && 
                (
                    linha_1 + linha_2 === linha_3 ||
                    linha_1 + linha_3 === linha_2 ||
                    linha_2 + linha_3 === linha_1
                )
            ) { 
                return true;
            }
        }
    }
    return false;
}

function main() {
    // x1, y1 / x2, y2 / x3, y3
    let coordenadas = readline().split(' ').map((elemento) => Number(elemento));

   let trianguloRetangulo = testeTrianguloRetangulo(coordenadas); 
   if(trianguloRetangulo === true) { return console.log('RIGHT') }

   let trianguloQuaseRetangulo = testeTrianguloQuaseRetangulo(coordenadas);
   if(trianguloQuaseRetangulo === true) { return console.log('ALMOST') }

   return console.log('NEITHER');
}