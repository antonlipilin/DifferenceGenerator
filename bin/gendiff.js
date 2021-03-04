#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import * as fs from 'fs';
import genDiff from '../src/genDiff.js';

const program = new Command();
program.version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const data1 = fs.readFileSync(`${filepath1}`, 'utf-8');
    const data2 = fs.readFileSync(`${filepath2}`, 'utf-8');
    console.log(genDiff(data1, data2));
  });

program.parse(process.argv);