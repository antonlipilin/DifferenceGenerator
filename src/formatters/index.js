import stylish from './stylish.js';
import plain from './plain.js';

export default (ast, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(ast);

    case 'plain':
      return plain(ast);

    case 'json':
      return JSON.stringify(ast);

    default:
      throw new Error('unsupported format');
  }
};
