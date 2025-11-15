// 21A - Jabber ID (https://codeforces.com/problemset/problem/21/A)

/*
    Jabber ID on the national Berland service «Babber» has a form <username>@<hostname>[/resource], where

    <username> — is a sequence of Latin letters (lowercase or uppercase), digits or underscores characters «_», the length of <username> is between 1 and 16, inclusive.
    <hostname> — is a sequence of word separated by periods (characters «.»), where each word should contain only characters allowed for <username>, the length of each word is between 1 and 16, inclusive. The length of <hostname> is between 1 and 32, inclusive.
    <resource> — is a sequence of Latin letters (lowercase or uppercase), digits or underscores characters «_», the length of <resource> is between 1 and 16, inclusive.
    The content of square brackets is optional — it can be present or can be absent.

    There are the samples of correct Jabber IDs: mike@codeforces.com, 007@en.codeforces.com/contest.

    Your task is to write program which checks if given string is a correct Jabber ID.

    Input
    The input contains of a single line. The line has the length between 1 and 100 characters, inclusive. Each characters has ASCII-code between 33 and 127, inclusive.

    Output
    Print YES or NO.
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

function verifyCharacter (character) {
    let unicode = character.charCodeAt(0);
    let validCode = false;
    if (
        (unicode >= 48 && unicode <= 57) ||
        (unicode >= 65 && unicode <= 90) ||
        (unicode >= 97 && unicode <= 122) ||
        unicode === 95
    ) {
        validCode = true;
    }
    return validCode;
}

function main() {
    let email = readline();

    let [counter_1, counter_2, auxiliar_counter, counter_3] = [0, 0, 0, 0];
    let character = '';

    while (true) {
        character = email[counter_1];
        let characterValidation = verifyCharacter(character);

        if (!characterValidation) { break }

        counter_1++;
        if (counter_1 > 16) { return console.log('NO') }
    }

    if (character.charCodeAt(0) !== 64 || counter_1 === 0) { return console.log('NO') }
    else { counter_1++ }

    let stop = false;
    counter_2 = counter_1;

    while (true) {
        if (counter_2 === email.length) { 
            stop = true; 
            break; 
        };

        character = email[counter_2];
        let characterValidation = verifyCharacter(character);

        if (!characterValidation) { 
            if (character.charCodeAt(0) !== 46) { break }
            else if (auxiliar_counter < 1 || auxiliar_counter > 16) { return console.log('NO') }
            else { auxiliar_counter = 0; }
        } else {
            auxiliar_counter++;
        }

        counter_2++;
        if (counter_2 - counter_1 > 32) { return console.log('NO') }
    }

    if (stop === true) {
        if (
            counter_2 - counter_1 === 0 || 
            auxiliar_counter < 1 ||
            auxiliar_counter > 16
        ) { 
            return console.log('NO'); 
        } else {
            return console.log('YES')
        }
    };

    let characterValidation2 = verifyCharacter(character);
    if (characterValidation2 === false) {
        let testCharacter = email[counter_2].charCodeAt(0);
        if (testCharacter === 47) {
            characterValidation2 = true;
        }
    }

    if (
        !characterValidation2 || 
        counter_2 - counter_1 === 0 || 
        auxiliar_counter < 1 ||
        auxiliar_counter > 16
    ) { 
        return console.log('NO'); 
    };

    counter_2++;
    counter_3 = counter_2;

    while (true) {
        if (counter_3 === email.length) {  
            break; 
        };

        character = email[counter_3];
        let characterValidation = verifyCharacter(character);

        if (!characterValidation) { return console.log('NO') }

        counter_3++;
        if (counter_3 - counter_2 > 16) { return console.log('NO') }
    }

    if (counter_3 - counter_2 === 0) { return console.log('NO') }
    console.log('YES')
}