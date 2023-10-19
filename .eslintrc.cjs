/* eslint-env node */
module.exports = {
	root: true,
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
	rules: {
		'no-unused-vars': 'off',
		'no-undef': 'off',
	},
	parserOptions: {
		ecmaVersion: 'latest',
	},
	globals: {
		vue: true,
	},
};
