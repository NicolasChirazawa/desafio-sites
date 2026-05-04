// 16D - Logging (https://codeforces.com/problemset/problem/16/D)

/*
  The main server of Gomble company received a log of one top-secret process, the name of which can't be revealed. The log was written in the following format: «[date:time]: message», where for each «[date:time]» value existed not more than 10 lines. All the files were encoded in a very complicated manner, and only one programmer — Alex — managed to decode them. The code was so complicated that Alex needed four weeks to decode it. Right after the decoding process was finished, all the files were deleted. But after the files deletion, Alex noticed that he saved the recordings in format «[time]: message». So, information about the dates was lost. However, as the lines were added into the log in chronological order, it's not difficult to say if the recordings could appear during one day or not. It is possible also to find the minimum amount of days during which the log was written.

  So, to make up for his mistake Alex has to find the minimum amount of days covered by the log. Note that Alex doesn't have to find the minimum amount of days between the beginning and the end of the logging, he has to find the minimum amount of dates in which records could be done. (See Sample test 2 for further clarifications).

  We should remind you that the process made not more than 10 recordings in a minute. Consider that a midnight belongs to coming day.

  Input
  The first input line contains number n (1 ≤ n ≤ 100). The following n lines contain recordings in format «[time]: message», where time is given in format «hh:mm x.m.». For hh two-digit numbers from 01 to 12 are used, for mm two-digit numbers from 00 to 59 are used, and x is either character «a» or character «p». A message is a non-empty sequence of Latin letters and/or spaces, it doesn't start or end with a space. The length of each message doesn't exceed 20.

  Output
  Output one number — the minimum amount of days covered by the log.
*/

/* Common Template Starts */

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}
/* Common Template Ends */

function date_translate (date) {
  let hours = date[0].slice(0, 2);

  if (hours == '12') { date[0] = '00' + date[0].slice(2, 5) };
  return date;
}

function main() {
  let operations = Number(readline());
  let days = 0;
  let same_moment = 1;

  let last_register;

  for (let i = 0; i < operations; i++) {
    let data = readline().split(']')[0].slice(1, 10);
    let date = data.split(' ')

    date = date_translate(date)
    
    if (
      last_register && 
      date[0] == last_register[0] && 
      date[1] == last_register[1]
    ) {
      same_moment++;

      if (same_moment > 10) {
        same_moment = 0;
        days++;
      };
    } else if (last_register) {
       if (date[1] == 'a.m' && last_register[1] == 'p.m') {
        days++;  
      } else if (date[1] == last_register[1]) {
        date_numbers = date[0].split(':')
        last_register_numbers = last_register[0].split(':');

        if (date_numbers[0] < last_register_numbers[0]) { days++ }
        if (date_numbers[0] == last_register_numbers[0] && date_numbers[1] < last_register_numbers[1]) { days++ }
      }

      same_moment = 1;
    } else {
      days++;
    }
    last_register = date;
  }

  console.log(days)
}