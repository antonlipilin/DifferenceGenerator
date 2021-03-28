import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

export default (pathToData) => {
  const data = fs.readFileSync(pathToData, 'utf-8');
  const extname = path.extname(pathToData);
  if (extname === '.json') {
    return JSON.parse(data);
  }

  return yaml.load(data);
};
