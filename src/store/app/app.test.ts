import {AppSliceState} from "@store/app/app.types";
import reducer, {initialState, setIsInitializing, setTheme} from "./app.slice";

describe("app reducer should work properly", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {type: undefined})).toEqual(initialState);
	});

	test("should set an isInitializing flag to true", () => {
		const previousState: AppSliceState = {
			...initialState,
			isInitializing: false
		};
		expect(reducer(previousState, setIsInitializing(true))).toEqual({
			...previousState,
			isInitializing: true
		});
	});

	// todo: Add localStorage tests
	test("should set the theme object", () => {
		const previousState: AppSliceState = {
			...initialState,
			theme: {name: "", styles: {}}
		};
		expect(
			reducer(previousState, setTheme({name: "red", styles: {color: "red"}}))
		).toEqual({
			...previousState,
			theme: {name: "red", styles: {color: "red"}}
		});
	});
});
