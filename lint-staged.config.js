const micromatch = require('micromatch');

const codePattern = '**/*.{js,jsx,ts,tsx}';

/** @type Object.<string, function(string[]): string | string[]> */
module.exports = {
  '*': (files) => {
    const all = files.join(' ');
    const code = micromatch(files, codePattern).join(' ');

    return [
      code && 'tsc -p tsconfig.json',
      code && `eslint --fix --quiet ${code}`,
      all && `prettier --write --ignore-unknown --loglevel warn ${all}`,
      code && `yarn test --bail --ci --cache --findRelatedTests ${code}`,
    ].filter(Boolean);
  },
};
