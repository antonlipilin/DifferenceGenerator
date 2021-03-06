import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

export default (pathToData) => {
  const data = fs.readFileSync(pathToData, 'utf-8');
  const extname = path.extname(pathToData);
  let parser;
  if (extname === '.json') {
    parser = JSON.parse(data);
  } else if (extname === '.yml') {
    parser = yaml.load(data);
  }
  return parser;
};
