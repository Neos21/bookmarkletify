import childProcess from 'node:child_process';
import fs from 'node:fs';

import { expect } from 'expect';

import { bookmarkletify } from '../index.js';

describe('CLI usage', () => {
  it('input-1.js.txt : No javascript: protocol, No IIFE', (done) => {
    childProcess.exec('node ./cli.js --input ./test/input-1.js.txt', (error, stdout, _stderr) => {
      expect(error).toBeNull();
      expect(stdout.trim()).toMatch('javascript:(');
      done();
      console.log('          ', stdout.trim());
    });
  });
  
  it('input-2.js.txt : No javascript: protocol, Use IIFE but will be removed', (done) => {
    childProcess.exec('node ./cli.js --input ./test/input-2.js.txt', (error, stdout, _stderr) => {
      expect(error).toBeNull();
      expect(stdout.trim()).toMatch('javascript:(');
      done();
      console.log('          ', stdout.trim());
    });
  });
  
  it('input-3.js.txt : With javascript: protocol, Use IIFE but will be removed', (done) => {
    childProcess.exec('node ./cli.js --input ./test/input-3.js.txt', (error, stdout, _stderr) => {
      expect(error).toBeNull();
      expect(stdout.trim()).toMatch('javascript:(');
      done();
      console.log('          ', stdout.trim());
    });
  });
});

describe('API usage', () => {
  it('input-1.js.txt : No javascript: protocol, No IIFE', () => {
    const input = fs.readFileSync('./test/input-1.js.txt', 'utf-8');
    const result = bookmarkletify(input);
    expect(result).toMatch('javascript:(');
    console.log('          ', result);
  });
  
  it('input-2.js.txt : No javascript: protocol, Use IIFE but will be removed', () => {
    const input = fs.readFileSync('./test/input-2.js.txt', 'utf-8');
    const result = bookmarkletify(input);
    expect(result).toMatch('javascript:(');
    console.log('          ', result);
  });
  
  it('input-3.js.txt : With javascript: protocol, Use IIFE but will be removed', () => {
    const input = fs.readFileSync('./test/input-3.js.txt', 'utf-8');
    const result = bookmarkletify(input);
    expect(result).toMatch('javascript:(');
    console.log('          ', result);
  });
});
