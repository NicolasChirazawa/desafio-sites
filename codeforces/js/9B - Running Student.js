// 9B - Running Student (https://codeforces.com/contest/9/problem/B)

/*
    And again a misfortune fell on Poor Student. He is being late for an exam.

    Having rushed to a bus stop that is in point (0, 0), he got on a minibus and they drove along a straight line, parallel to axis OX, in the direction of increasing x.

    Poor Student knows the following:

    during one run the minibus makes n stops, the i-th stop is in point (xi, 0)
    coordinates of all the stops are different
    the minibus drives at a constant speed, equal to vb
    it can be assumed the passengers get on and off the minibus at a bus stop momentarily
    Student can get off the minibus only at a bus stop
    Student will have to get off the minibus at a terminal stop, if he does not get off earlier
    the University, where the exam will be held, is in point (xu, yu)
    Student can run from a bus stop to the University at a constant speed vs as long as needed
    a distance between two points can be calculated according to the following formula: 
    Student is already on the minibus, so, he cannot get off at the first bus stop
    Poor Student wants to get to the University as soon as possible. Help him to choose the bus stop, where he should get off. If such bus stops are multiple, choose the bus stop closest to the University.

    Input
    The first line contains three integer numbers: 2 ≤ n ≤ 100, 1 ≤ vb, vs ≤ 1000. The second line contains n non-negative integers in ascending order: coordinates xi of the bus stop with index i. It is guaranteed that x1 equals to zero, and xn ≤ 105. The third line contains the coordinates of the University, integers xu and yu, not exceeding 105 in absolute value.

    Output
    In the only line output the answer to the problem — index of the optimum bus stop.
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
    const number = String(readline());

    const razao = 2;
    let max_correct_numbers = 
        (number.length > 1) ? 
        (razao * (razao**(number.length - 2) - 1)) / (razao - 1) + 1 : 
        0;
    
    let skip_number = false;
    for (let i = 0; i < number.length ; i++) {
        if (number[i] > 1) {skip_number = true  }

        if (i > 0 && 
            (Number(number[i]) > 0 || skip_number)
        ) {
            max_correct_numbers += 2**(number.length - i - 1);
        }
    }
    
    max_correct_numbers += 1;
    console.log(max_correct_numbers);
}