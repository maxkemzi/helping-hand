module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json"]
	},
	settings: {
		"import/resolver": "webpack",
		react: {
			version: "detect"
		}
	},
	extends: [
		"airbnb",
		"airbnb-typescript",
		"airbnb/hooks",
		"plugin:@typescript-eslint/recommended",
		"prettier"
	],
	plugins: ["@typescript-eslint", "prettier"],
	rules: {
		"prettier/prettier": ["error", {endOfLine: "auto"}],
		"react/prop-types": "off",
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function"
			}
		],
		"no-console": "off",
		"react/jsx-props-no-spreading": "off",
		"react/react-in-jsx-scope": "off",
		"jsx-a11y/label-has-associated-control": [
			2,
			{
				assert: "either"
			}
		],
		"react/require-default-props": "off",
		"no-param-reassign": "off",
		"react/jsx-no-useless-fragment": ["error", {allowExpressions: true}],
		"@typescript-eslint/no-non-null-assertion": "off"
	}
};
