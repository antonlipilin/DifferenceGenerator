import stylish from './stylish.js';
import plain from './plain.js';

export default (ast, formatName) => {
  if (formatName === 'stylish') {
    return stylish(ast);
  }
  if (formatName === 'plain') {
    return plain(ast);
  }

  return JSON.stringify(ast);
};
