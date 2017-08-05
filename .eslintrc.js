module.exports = {
    env: {
        'es6': true,
        'jquery': true,
        'node': true
    },
    parserOptions: {
        'sourceType': 'module'
    },
    extends: ['eslint:recommended'],
    rules: {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};