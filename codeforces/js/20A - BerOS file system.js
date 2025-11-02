// 20A - BerOS file system (https://codeforces.com/problemset/problem/20/A)

/*
The new operating system BerOS has a nice feature. It is possible to use any number of characters '/' as a delimiter in path instead of one traditional '/'. For example, strings //usr///local//nginx/sbin// and /usr/local/nginx///sbin are equivalent. The character '/' (or some sequence of such characters) at the end of the path is required only in case of the path to the root directory, which can be represented as single character '/'.

A path called normalized if it contains the smallest possible number of characters '/'.

Your task is to transform a given path to the normalized form.

Input
The first line of the input contains only lowercase Latin letters and character '/' — the path to some directory. All paths start with at least one character '/'. The length of the given line is no more than 100 characters, it is not empty.

Output
The path in normalized form.

*/

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
    let link = readline();
    let newLink = '';

    let [isFirstSlash, presenceSlash] = [false, false];

    if (link[0] === '/') { newLink = '/'; isFirstSlash = true; }

    for(let i = 1; i < link.length; i++) {
        if (link[i] === '/' && isFirstSlash === false) {
            presenceSlash = true;
        } else if (link[i] !== '/') {
            if (presenceSlash === true) { 
                newLink += '/';
                presenceSlash = false;
            };        
            newLink += link[i];
            isFirstSlash = false;
        }
    }
    console.log(newLink)
}