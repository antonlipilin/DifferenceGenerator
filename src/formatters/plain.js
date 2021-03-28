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
      if (type === 'added') {
        return [`Property ${getValue(anchestry)} was added with value: ${getValue(value)}`];
      }

      if (type === 'deleted') {
        return [`Property ${getValue(anchestry)} was removed`];
      }

      if (type === 'changed') {
        return [`Property ${getValue(anchestry)} was updated. From ${getValue(oldValue)} to ${getValue(newValue)}`];
      }

      if (type === 'unchanged') {
        return [];
      }

      return iter(value, `${anchestry}.`);
    });

    return lines.join('\n');
  };
  return iter(ast, '');
};

export default plain;
