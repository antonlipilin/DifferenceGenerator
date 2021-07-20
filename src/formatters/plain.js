import _ from 'lodash';

const getValue = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }

  return (typeof data === 'string') ? `'${data}'` : data;
};

const plain = (ast) => {
  const iter = (node, depth) => {
    const lines = node.flatMap((item) => {
      const {
        type, name, value, oldValue, newValue,
      } = item;
      const anchestry = depth + name;
      switch (type) {
        case 'added':
          return [`Property ${getValue(anchestry)} was added with value: ${getValue(value)}`];
        case 'deleted':
          return [`Property ${getValue(anchestry)} was removed`];
        case 'changed':
          return [`Property ${getValue(anchestry)} was updated. From ${getValue(oldValue)} to ${getValue(newValue)}`];
        case 'unchanged':
          return [];
        default:
          return iter(value, `${anchestry}.`);
      }
    });

    return lines.join('\n');
  };
  return iter(ast, '');
};

export default plain;
