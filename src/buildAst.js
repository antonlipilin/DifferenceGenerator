import _ from 'lodash';

const buildAst = (obj1, obj2) => {
  const unionKeys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.sortBy(unionKeys);
  return sortedKeys.map((key) => {
    let result;

    if (!_.has(obj1, key)) {
      result = { name: key, value: obj2[key], type: 'added' };
    }

    if (!_.has(obj2, key)) {
      result = { name: key, value: obj1[key], type: 'deleted' };
    }

    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      result = { name: key, value: buildAst(obj1[key], obj2[key]), type: 'nested' };
    }

    if (obj1[key] !== obj2[key]) {
      result = {
        name: key, oldValue: obj1[key], newValue: obj2[key], type: 'changed',
      };
    }

    result = { name: key, value: obj1[key], type: 'unchanged' };
    return result;
  });
};

export default buildAst;
