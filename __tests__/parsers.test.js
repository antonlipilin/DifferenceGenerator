import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { expect, test } from '@jest/globals';
import parsers from '../src/parsers.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('parsing files', () => {
  expect(parsers(`${__dirname}/../__fixtures__/file1.json`)).toEqual({ host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false });
  expect(parsers(`${__dirname}/../__fixtures__/file1.yml`)).toEqual({ host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false });
});
