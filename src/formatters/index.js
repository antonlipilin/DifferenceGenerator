import stylish from './stylish.js';
import plain from './plain.js';

export default (ast, formatName) => {
  let result;
  if (formatName === 'stylish') {
    result = stylish(ast);
  } else if (formatName === 'plain') {
    result = plain(ast);
  }
  return result;
};
