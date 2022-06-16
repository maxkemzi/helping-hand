module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json"
	},
	settings: {
		"import/resolver": "webpack",
		react: {
			version: "detect"
		}
	},
	extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "prettier"],
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": "error",
		"react/prop-types": "off",
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function"
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
		"no-param-reassign": "off"
	}
};
