// 1B - Spreadsheets (https://codeforces.com/problemset/problem/1/B)

/*
    In the popular spreadsheets systems (for example, in Excel) the following numeration of columns is used. The first column has number A, the second — number B, etc. till column 26 that is marked by Z. Then there are two-letter numbers: column 27 has number AA, 28 — AB, column 52 is marked by AZ. After ZZ there follow three-letter numbers, etc.

    The rows are marked by integer numbers starting with 1. The cell name is the concatenation of the column and the row numbers. For example, BC23 is the name for the cell that is in column 55, row 23.

    Sometimes another numeration system is used: RXCY, where X and Y are integer numbers, showing the column and the row numbers respectfully. For instance, R23C55 is the cell from the previous example.

    Your task is to write a program that reads the given sequence of cell coordinates and produce each item written according to the rules of another numeration system.

    Input
    The first line of the input contains integer number n (1 ≤ n ≤ 105), the number of coordinates in the test. Then there follow n lines, each of them contains coordinates. All the coordinates are correct, there are no cells with the column and/or the row numbers larger than 106 .

    Output
    Write n lines, each line should contain a cell coordinates in the other numeration system.
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

function transformCoordinate(coordinate) {
    let newCoordinate = [];
    let element = '';
    // Everytime will start with a letter
    let value = 'Letra';

    for(let i = 0; i < coordinate.length; i++) {
        let swap = false;

        if(String(coordinate).codePointAt(i) >= 65 && String(coordinate).codePointAt(i) <= 90) {
            if(value !== 'Letter') { 
                swap = true;
                value = 'Letter';
            }
        } else {
            if(value !== 'Number') {
                swap = true;
                value = 'Number';
            }
        }

        if(swap === true) { 
            newCoordinate.push(element);
            element = '';
        }
        element += coordinate[i];
    }
    newCoordinate.push(element);

    let response = '';
    if      (newCoordinate.length === 2) { response = transformCommumToUncommum(newCoordinate) }
    else if (newCoordinate.length === 4) { response = transformUncommumToCommum(newCoordinate) }

    return response;
}

function transformCommumToUncommum(coordinate) {
    let base = coordinate[0];
    let secondPart = 0;

    for(let i = 0; i < base.length; i++) {
        secondPart += (String(base).charCodeAt(i) - 64) * 26**(base.length - 1 - i);
    }

    let response = 'R' + coordinate[1] + 'C' + secondPart;
    return response;
}

function transformUncommumToCommum(coordinate) {    
    let base = coordinate[3];

    let element = 0;
    let crescentValue = 0;
    let loop = 0;

    for(; element < base; loop++) {
        element += 26**(loop + 1);
        if(loop > 0) { crescentValue += 26**(loop) }
    }

    let secondPart = '';

    let valueCorrected = base;
    for(let i = 0; i < loop; i++) {
        if((loop - i) > 1) {
            valueCorrected = base - crescentValue;
            crescentValue = crescentValue - 26**(loop - i - 1);

            let divisorFactor = Math.ceil(valueCorrected/26**(loop - i - 1));
            base = base - (divisorFactor * 26**(loop - i - 1));

            secondPart += String.fromCharCode(Number(divisorFactor) + 64)
        } else {
            secondPart += String.fromCharCode(Number(base) + 64)
        }
    }

    const response = secondPart + coordinate[1];
    return response;
}

function main() {
    let quantity = Number(readline());

    for(let i = 0; i < quantity; i++) {
        let response = transformCoordinate(readline());
        console.log(response);
    } 
}