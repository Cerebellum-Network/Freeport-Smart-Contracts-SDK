/** @type import('eslint').Linter.Config */
const config = {
  extends: ['./eslint.config.base'],
  // File specific rules
  overrides: [
    // abi-types
    {
      files: ['src/abi-types/**/*.ts'],
      rules: {
        '@typescript-eslint/ban-tslint-comment': 'off',
        'unicorn/no-abusive-eslint-disable': 'off',
        'unicorn/filename-case': 'off',
      },
    },
  ],
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
