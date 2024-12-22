// 5A - Chat Server's Outgoing Traffic (https://codeforces.com/contest/5/problem/A)

/*
Polycarp is working on a new project called "Polychat". Following modern tendencies in IT, he decided, that this project should contain chat as well. To achieve this goal, Polycarp has spent several hours in front of his laptop and implemented a chat server that can process three types of commands:

Include a person to the chat ('Add' command).
Remove a person from the chat ('Remove' command).
Send a message from a person to all people, who are currently in the chat, including the one, who sends the message ('Send' command).
Now Polycarp wants to find out the amount of outgoing traffic that the server will produce while processing a particular set of commands.

Polycarp knows that chat server sends no traffic for 'Add' and 'Remove' commands. When 'Send' command is processed, server sends l bytes to each participant of the chat, where l is the length of the message.

As Polycarp has no time, he is asking for your help in solving this problem.

Input
Input file will contain not more than 100 commands, each in its own line. No line will exceed 100 characters. Formats of the commands will be the following:

+<name> for 'Add' command.
-<name> for 'Remove' command.
<sender_name>:<message_text> for 'Send' command.
<name> and <sender_name> is a non-empty sequence of Latin letters and digits. <message_text> can contain letters, digits and spaces, but can't start or end with a space. <message_text> can be an empty line.

It is guaranteed, that input data are correct, i.e. there will be no 'Add' command if person with such a name is already in the chat, there will be no 'Remove' command if there is no person with such a name in the chat etc.

All names are case-sensitive.

Output
Print a single number — answer to the problem.

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
    
    /* Justificativa para participantes serem um número e não um array com as pessoas:
 
    It is guaranteed, that input data are correct, i.e. there will be no 'Add' command if person with such a name is already in the chat, there will be no 'Remove' command if there is no person with such a name in the chat etc.
 
    */
 
    let participantes = 0;
    let bytes = 0;
 
    for(let i = 0; i < 100; i++){
 
        const comando = readline();
 
        if(comando == undefined) { break }
 
        let teste = comando.slice(0, 1);
 
        if(teste == '+') {
            participantes++;
        } else if(teste == '-'){
            participantes--;
        } else {
            // Não sei se seria mais interessante guardar num array e o percorrer para achar o nome do 'User' ou o passar pelo nome até achar o dois pontos (:)
 
            for(let j = 0; j < comando.length; j++){
                if(comando[j] == ":"){
                    bytes += (comando.slice(j + 1).length) * participantes;
                    break;
                }
            }
        }
    }
    console.log(bytes);
}