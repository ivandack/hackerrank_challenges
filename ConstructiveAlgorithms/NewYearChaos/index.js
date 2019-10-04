'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
  let bribeCounter = 0;
  const queueLength = q.length;
  for (let i = 0; i < queueLength; i++) {
    const position = i + 1;
    const currentPerson = q[i];
    const positionDifference = currentPerson - position;
    if (positionDifference > 2) {
      // More than two bribes
      console.log('Too chaotic');
      return;
    } else {
      // Checks if there are bribing people in front of currentPerson
      for (let j = Math.max(0, currentPerson - 2); j < i; j++) {
        if (q[j] > currentPerson) {
          // A person moved foward (bribed)
          bribeCounter++;
        }
      }
    }
  }
  console.log(bribeCounter);
}

function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    const q = readLine()
      .split(' ')
      .map(qTemp => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}
