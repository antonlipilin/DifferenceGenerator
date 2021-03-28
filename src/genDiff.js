/* eslint-disable no-useless-concat */
import parsers from './parsers.js';
import buildAst from './buildAst.js';
import formatter from './formatters/index.js';

const genDiff = (path1, path2, formatName = 'stylish') => {
  const parsedData1 = parsers(path1);
  const parsedData2 = parsers(path2);
  const ast = buildAst(parsedData1, parsedData2);
  return formatter(ast, formatName);
};

export default genDiff;
