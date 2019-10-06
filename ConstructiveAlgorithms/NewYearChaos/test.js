const path = require('path');
const fs = require('fs');
const expect = require('chai').expect;
const child = require('child_process');

const OUTPUT_FILE = path.join(__dirname, './test_output');
const INPUT_REGEXP = /input(:?[0-9]+).txt/;

describe('Roads and Libraries', () => {

  const inputFiles = fs.readdirSync('./input');
  const cases = inputFiles.map(f => f.match(INPUT_REGEXP)[1]);

  for (let test of cases) {

    const input = fs.readFileSync(`./input/input${test}.txt`, 'utf8');
    const expectedOutput = fs.readFileSync(`./output/output${test}.txt`, 'utf8');
    it('should pass test from input' + test, function (done) {
      let output = '';
      const proc = child.spawn('node', ['./index.js'], {
        stdio: 'pipe',
      });

      proc.stdout.on('data', function(data) {
        output += data;
      });

      proc.stdout.on('close', function () {
        expect(output.trim()).to.eq(expectedOutput);
        done();
      });
      proc.stdin.write(input);
      proc.stdin.end();
    });

  }
});