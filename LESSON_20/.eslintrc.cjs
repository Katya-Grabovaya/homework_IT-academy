module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "commonjs": true,
    },
    "extends": [
        "eslint:recommended",
        'airbnb-base',
        'prettier'],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        'no-restricted-syntax': 0,
    'no-await-in-loop': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'off',
    'lines-between-class-members': 0,
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'import/no-cycle': 0,
    'camelcase': 'off',
    'no-useless-constructor': 0,
    'guard-for-in': 'off',
    'max-classes': 0,
    'max-len': 'off', 
    'no-multi-spaces': [
        'error',
        {
            'ignoreEOLComments': true
        }
    ],
    'no-console': 'off',
    //     'error',
    //     {
    //         'allow': [
    //             'warn',
    //             'error',
    //             'info'
    //         ]
    //     }
    // ],
    "max-classes-per-file": [ "error", { "ignoreExpressions": true, "max": 10 } ],
    'no-shadow': 'off',
    'no-empty-function': ['error', { 'allow': ['constructors'] }],
    'prefer-destructuring': ['error', {'object': false, 'array': false}],
    'no-undefined': 0,
    'no-undef':0,
    'no-unused-vars': 0,
    'object-shorthand':0,
    'no-plusplus': 'off',
    'newline-per-chained-call': [
        'error',
        {
            'ignoreChainWithDepth': 8}
    ],
    'linebreak-style': [
        'off'
    ],
    'arrow-parens': 'off',
    'func-names': [
        'off'
    ],
    'no-param-reassign': [
        'off'
    ],
    // 'quotes': [
    //     'error',
    //     'single',
    //     {
    //         'allowTemplateLiterals': true,
    //         'avoidEscape': true
    //     }
    // ],
    'prefer-arrow-callback': [
        'off'
    ],
    'dot-notation': [
        'error',
        {
            'allowPattern': '[a-zA-Z]'
        }
    ],
    'no-underscore-dangle': [
        'error',
        {
            'allow': [
                '___initialData___',
                '_request',
                '_method',
                '_baseSelector',
                '_bodenPoint',
                '_baseSelectorCity'
            ]
        }
    ]
    },

    'plugins': [
        'prettier',
        'import'
    ],
}
