const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');
const postcssDiscardComments = require('postcss-discard-comments');

module.exports = {
  plugins: [
    postcssImport(),
    postcssPresetEnv(),
    postcssNested(),
    postcssDiscardComments(),
  ],
};
