'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the roadsAndLibraries function below.
function roadsAndLibraries(n, c_lib, c_road, cities) {
  if (c_lib <= c_road) {
    /*
          If it's more expensive to build roads, then 
          one library per city is best.
        */
    return c_lib * n;
  }

  const visited = new Set();
  const adjacencyMatrix = [];
  for (let i = 0; i < n; i++) {
    adjacencyMatrix.push(new Array());
  }
  cities.forEach(c => {
    const fromCity = c[0];
    const toCity = c[1];
    adjacencyMatrix[fromCity - 1].push(toCity - 1);
    adjacencyMatrix[toCity - 1].push(fromCity - 1);
  });

  function dfs(city) {
    if (!visited.has(city)) {
      visited.add(city);
      adjacencyMatrix[city].forEach(dfs);
    }
  }

  let clusterCount = 0;
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      clusterCount++;
      dfs(i);
    }
  }
  const result = clusterCount * c_lib + (n - clusterCount) * c_road;
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const nmC_libC_road = readLine().split(' ');
    const n = parseInt(nmC_libC_road[0], 10);
    const m = parseInt(nmC_libC_road[1], 10);
    const c_lib = parseInt(nmC_libC_road[2], 10);
    const c_road = parseInt(nmC_libC_road[3], 10);
    let cities = Array(m);
    for (let i = 0; i < m; i++) {
      cities[i] = readLine()
        .split(' ')
        .map(citiesTemp => parseInt(citiesTemp, 10));
    }
    const result = roadsAndLibraries(n, c_lib, c_road, cities);
    ws.write(result + '\n');
  }

  ws.end();
}
