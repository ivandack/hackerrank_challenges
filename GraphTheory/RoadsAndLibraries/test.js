const path = require('path');
const fs = require('fs');
const expect = require('chai').expect;
const child = require('child_process');
const exec = 'node ./index.js';

// TODO: Rewrite tests
describe('Roads and Libraries', () => {

  it.only('should pass test1', function(done) {
    const proc = child.spawn(exec, {
      stdio: [fs.openSync('./testCases/test1', 'r'), 'pipe', 'pipe']
    });

    console.log(proc);
    proc.stdout.once('data', function(output) {
      expect(output.toString('utf-8')).to.eq('4\n12');
      done();
    });
  });
  it('should pass test2', function(done) {
    const proc = child.spawn(exec, {
      stdio: [fs.openSync('./testCases/test2'), 1, 2]
    });

    proc.stdout.once('data', function(output) {
      expect(output.toString('utf-8')).to.eq('12');
      done();
    });
  });
  it('should pass test3', function(done) {
    const proc = child.spawn(exec, {
      stdio: [fs.openSync('./testCases/test3'), 1, 2]
    });

    proc.stdout.once('data', function(output) {
      expect(output.toString('utf-8')).to.eq('15');
      done();
    });
  });
});
