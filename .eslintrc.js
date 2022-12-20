module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'globals': {
		'DEVELOPMENT': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'preact'
	],
	'overrides': [
		{
      'files': ['*.jsx', '*.js']
    }
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'ecmaFeatures': {
      'jsx': true
    }
	},
	'plugins': [
		'react',
		'prettier'
	],
	'rules': {
		'indent': [
			'error',
			2,
			{ 'SwitchCase': 1 }
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
		],
		"react/prop-types": 0
	}
};
