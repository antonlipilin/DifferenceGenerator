/* eslint-disable no-useless-concat */
import parsers from './parsers.js';
import buildAst from './buildAst.js';
import stylish from './stylish.js';

const genDiff = (path1, path2, formatter = stylish) => {
  const parsedData1 = parsers(path1);
  const parsedData2 = parsers(path2);
  const ast = buildAst(parsedData1, parsedData2);
  return formatter(ast);
};

export default genDiff;
