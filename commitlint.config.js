/** @type {import('@commitlint/types').UserConfig} */
const CommitLintConfiguration = {
    extends: ['@commitlint/config-conventional'],
    // add your own scope here if needed
    'scope-case': [2, 'always', 'kebab-case'],
};

module.exports = CommitLintConfiguration;
