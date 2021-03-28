import _ from 'lodash';

const stringify = (value, outerIndent) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }
    const replacer = ' ';
    const spacesCount = 4;
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize) + outerIndent;
    const bracketIndent = replacer.repeat(indentSize - spacesCount) + outerIndent;
    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 1)}`);
    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(value, 2);
};

const stylish = (ast) => {
  const iter = (node, depth) => {
    const indent = ' ';
    const currentIndent = indent.repeat(depth);

    const lines = node.flatMap((item) => {
      const {
        type, name, value, oldValue, newValue,
      } = item;
      if (type === 'added') {
        return `${currentIndent}  + ${name}: ${stringify(value, currentIndent)}`;
      }

      if (type === 'deleted') {
        return `${currentIndent}  - ${name}: ${stringify(value, currentIndent)}`;
      }

      if (type === 'unchanged') {
        return `${currentIndent}    ${name}: ${stringify(value, currentIndent)}`;
      }

      if (type === 'changed') {
        return [`${currentIndent}  - ${name}: ${stringify(oldValue, currentIndent)}`, `${currentIndent}  + ${name}: ${stringify(newValue, currentIndent)}`];
      }

      return `${currentIndent}    ${name}: ${iter(value, depth + 4)}`;
    });
    return ['{', ...lines, `${currentIndent}}`].join('\n');
  };
  return iter(ast, 0);
};

export default stylish;
