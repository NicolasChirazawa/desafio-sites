// 70B - Text Messaging (https://codeforces.com/contest/70/problem/A)

/*
    Fangy the little walrus, as all the modern walruses, loves to communicate via text messaging. One day he faced the following problem: When he sends large texts, they are split into parts each containing n characters (which is the size of one text message). Thus, whole sentences and words get split!

    Fangy did not like it, so he faced the task of breaking the text into minimal messages on his own so that no sentence were broken into pieces when it is sent and the number of text messages to be sent would be minimal. If two consecutive sentences are in different messages, the space between them can be ignored (Fangy does not write this space).

    The little walrus's text looks in the following manner:

    TEXT ::= SENTENCE | SENTENCE SPACE TEXT
    SENTENCE ::= WORD SPACE SENTENCE | WORD END
    END ::= {'.', '?', '!'}
    WORD ::= LETTER | LETTER WORD
    LETTER ::= {'a'..'z', 'A'..'Z'}
    SPACE ::= ' '
    SPACE stands for the symbol of a space.

    So, how many messages did Fangy send?

    Input
    The first line contains an integer n, which is the size of one message (2 ≤ n ≤ 255). The second line contains the text. The length of the text does not exceed 104 characters. It is guaranteed that the text satisfies the above described format. Specifically, this implies that the text is not empty.

    Output
    On the first and only line print the number of text messages Fangy will need. If it is impossible to split the text, print "Impossible" without the quotes.
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
    const message_size = Number(readline());
    const message = readline();

    let space_sentence  = 0;
    let finish_sentence = false;

    let accumulator_base = 0;
    let accumulator_sub = 0
    let answer = 0;

    for (let i = 0; i < message.length; i++) {
        accumulator_base++;

        // Não estou tratando o apagamento do espaço
        if (finish_sentence) { accumulator_sub++ }

        if (message[i] === '!' || message[i] === '.' || message[i] === '?') {
            finish_sentence = true;
            accumulator_sub = 0;

            if (message[i + 1] === ' ') { space_sentence = 1 }
            else { space_sentence = 0 };
        }

        // console.log(finish_sentence, message[i], accumulator_base, accumulator_sub)
        if (finish_sentence && accumulator_base === message_size) {
            answer++;

            accumulator_base = accumulator_sub - space_sentence;
            accumulator_sub = 0;
            space_sentence = 0;

            finish_sentence = false;
        }
        if (accumulator_base > message_size) { return console.log('Impossible') }

        if (finish_sentence && i === message.length - 1) {
            answer++;
            break;
        }
    }
    console.log(answer);
}