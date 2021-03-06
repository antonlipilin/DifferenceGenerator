/* eslint-disable no-useless-concat */
import _ from 'lodash';
import parsers from './parsers.js';

const genDiff = (path1, path2) => {
  const data1ToString = parsers(path1);
  const data2ToString = parsers(path2);
  const unionKeys = _.union(Object.keys(data1ToString), Object.keys(data2ToString));
  const keys = _.sortBy(unionKeys);
  const diffs = keys.reduce((acc, next) => {
    const key = next;
    const isInString1 = _.has(data1ToString, key);
    const isInString2 = _.has(data2ToString, key);
    if (isInString1 && !isInString2) {
      acc.push([`  - ${key}`, data1ToString[key]]);
    } else if (!isInString1 && isInString2) {
      acc.push([`  + ${key}`, data2ToString[key]]);
    } else if (isInString1 && isInString2 && data1ToString[key] === data2ToString[key]) {
      acc.push([`    ${key}`, data1ToString[key]]);
    } else {
      acc.push([`  - ${key}`, data1ToString[key]]);
      acc.push([`  + ${key}`, data2ToString[key]]);
    }
    return acc;
  }, []);
  const diffsToString = diffs.map((item) => {
    const [key, value] = item;
    return `${key}: ${value}`;
  }).join('\n');
  return `${'{' + '\n'}${diffsToString}\n` + '}';
};

export default genDiff;
