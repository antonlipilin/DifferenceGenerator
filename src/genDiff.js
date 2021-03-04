/* eslint-disable no-useless-concat */
import _ from 'lodash';

const genDiff = (data1, data2) => {
  const data1ToJson = JSON.parse(data1);
  const data2ToJson = JSON.parse(data2);
  const unionKeys = _.union(Object.keys(data1ToJson), Object.keys(data2ToJson));
  const keys = _.sortBy(unionKeys);
  const diffs = keys.reduce((acc, next) => {
    const key = next;
    const isInJson1 = _.has(data1ToJson, key);
    const isInJson2 = _.has(data2ToJson, key);
    if (isInJson1 && !isInJson2) {
      acc.push([`  - ${key}`, data1ToJson[key]]);
    } else if (!isInJson1 && isInJson2) {
      acc.push([`  + ${key}`, data2ToJson[key]]);
    } else if (isInJson1 && isInJson2 && data1ToJson[key] === data2ToJson[key]) {
      acc.push([`    ${key}`, data1ToJson[key]]);
    } else {
      acc.push([`  - ${key}`, data1ToJson[key]]);
      acc.push([`  + ${key}`, data2ToJson[key]]);
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