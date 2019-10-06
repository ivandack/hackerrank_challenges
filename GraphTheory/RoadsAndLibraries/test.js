const path = require('path');
const fs = require('fs');
const expect = require('chai').expect;
const child = require('child_process');

const OUTPUT_FILE = path.join(__dirname, './test_output');
const INPUT_REGEXP = /input(:?[0-9]+).txt/;

describe('Roads and Libraries', () => {

  const inputFiles = fs.readdirSync('./input');
  const cases = inputFiles.map(f => f.match(INPUT_REGEXP)[1]);

  beforeEach('Set output file', function () {
    fs.openSync(OUTPUT_FILE, 'w');
  });

  afterEach('Clean output file', function () {
    if (fs.existsSync(OUTPUT_FILE)) {
      fs.unlinkSync(OUTPUT_FILE);
    }
  });

  for (let test of cases) {

    const input = fs.readFileSync(`./input/input${test}.txt`, 'utf8');
    const expectedOutput = fs.readFileSync(`./output/output${test}.txt`, 'utf8');
    it('should pass test from input' + test, function (done) {
      const proc = child.spawn('node', ['./index.js'], {
        env: Object.assign({ OUTPUT_PATH: OUTPUT_FILE }, process.env),
        stdio: 'pipe',
      });

      proc.stdout.on('close', function () {
        const output = fs.readFileSync(OUTPUT_FILE, 'utf8');
        expect(output.trim()).to.eq(expectedOutput);
        done();
      });
      proc.stdin.write(input);
      proc.stdin.end();
    });

  }
});