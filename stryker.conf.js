/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  $schema: './node_modules/@stryker-mutator/core/schema/stryker-schema.json',
  packageManager: 'yarn',
  mutate: [
    'src/**/*.ts',
    '!src/main/**',
  ],
  reporters: [
    'html',
    'clear-text',
    'progress',
    'dashboard',
  ],
  htmlReporter: { baseDir: 'tests/coverage/mutation' },
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  commandRunner: { command: 'yarn test' },
  checkers: ['typescript'],
  tsconfigFile: 'tsconfig.json',
  dashboard: {
    project: 'github.com/DanielGoncalvesL/budget_buddy_api',
    version: process.env.BRANCH,
  },
};
