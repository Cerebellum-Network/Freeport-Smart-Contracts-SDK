/** @type import('eslint').Linter.Config */
const config = {
  extends: ['./eslint.config.base'],
  // Project specific rules
  rules: {
    // TypeScript
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
  },
};

module.exports = config;
