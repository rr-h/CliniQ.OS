const config = {
    extends: [
        'kentcdodds',
        'kentcdodds/jest',
        'plugin:node-dependencies/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'valid-jsdoc': 'off',
        'max-len': 'off',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'import/no-import-module-exports': 'off',
        'arrow-parens': ['error', 'as-needed'],
        quotes: ['error', 'single', { avoidEscape: true }],
        'react/prop-types': 'off', // Assuming you use TypeScript for type checking
    },
    settings: {
        'import/ignore': ['node_modules', 'src'],
        react: {
            version: 'detect'
        }
    }
};

module.exports = config;