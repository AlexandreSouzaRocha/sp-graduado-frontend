module.exports = {
	singleQuote: true,
	trailingComma: 'all',
	useTabs: false,
	tabWidth: 2,
	printWidth: 120,
	overrides: [
		{
			files: ['*.ts', '.tsx'],
			options: {
				parser: 'typescript',
			},
		},
	],
};
