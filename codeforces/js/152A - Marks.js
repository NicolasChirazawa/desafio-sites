// 152A - Marks (https://codeforces.com/contest/152/problem/A)

/*
Vasya, or Mr. Vasily Petrov is a dean of a department in a local university. After the winter exams he got his hands on a group's gradebook.

Overall the group has n students. They received marks for m subjects. Each student got a mark from 1 to 9 (inclusive) for each subject.

Let's consider a student the best at some subject, if there is no student who got a higher mark for this subject. Let's consider a student successful, if there exists a subject he is the best at.

Your task is to find the number of successful students in the group.

Input
The first input line contains two integers n and m (1 ≤ n, m ≤ 100) — the number of students and the number of subjects, correspondingly. Next n lines each containing m characters describe the gradebook. Each character in the gradebook is a number from 1 to 9. Note that the marks in a rows are not sepatated by spaces.

Output
Print the single number — the number of successful students in the given group.

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
    const alunosEMateria = readline().split(' ');
    let notas = [];
    let alunos = [];
 
    //Populando
    for(let i = 0; i < alunosEMateria[0]; i++){
        notas[i] = readline().split('');
        //notas[i] = notas[i].split('');
    }
 
    for(let i = 0; i < alunosEMateria[1]; i++){
        // Reseta pelo escopo, assim só guarda momentâneamente
        let resposta = [];
        
        for(let j = 0; j < alunosEMateria[0]; j++){
            resposta[j] = notas[j][i].split('').map((element) => Number(element));
            //Dita qual é o aluno
            resposta[j].push(j);
        }
 
        resposta.sort((a, b) => {return a[0] - b[0]});
        contador = resposta.length - 2;
 
        //O último sempre será 'push'
        alunos.push(resposta[resposta.length - 1][1]);
 
        //Ver quais mais além do último tem valores iguais;
        if(contador >= 0 && resposta[resposta.length - 1][0] == resposta[contador][0]){
 
            while(contador >= 0 && resposta[resposta.length - 1][0] == resposta[contador][0]){
                alunos.push(resposta[contador][1]);
                contador--;
            }
        }
    }
    alunos = alunos.filter((value, index, self) => {
        return self.indexOf(value) === index; 
    })
    console.log(alunos.length);
}