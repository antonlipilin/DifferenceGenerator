import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { expect, test } from '@jest/globals';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('JSON simple object', () => {
  expect(genDiff(`${__dirname}/../__fixtures__/file1.json`, `${__dirname}/../__fixtures__/file2.json`))
    .toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});

test('YAML simple object', () => {
  expect(genDiff(`${__dirname}/../__fixtures__/file1.yml`, `${__dirname}/../__fixtures__/file2.yml`))
    .toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});
