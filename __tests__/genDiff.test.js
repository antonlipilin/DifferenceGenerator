import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { expect, test } from '@jest/globals';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('difference generator', () => {
  expect(genDiff(fs.readFileSync(`${__dirname}/../__fixtures__/file1.json`, 'utf-8'), fs.readFileSync(`${__dirname}/../__fixtures__/file2.json`, 'utf-8')))
    .toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});
