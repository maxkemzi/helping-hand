import {AuthSliceState} from "@store/auth/auth.types";
import reducer, {
	initialState,
	setIsAuth,
	setIsFetching,
	setUser
} from "./auth.slice";

describe("auth reducer should work properly", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {type: undefined})).toEqual(initialState);
	});

	test("should set an isAuth flag to true", () => {
		const previousState: AuthSliceState = {...initialState, isAuth: false};
		expect(reducer(previousState, setIsAuth(true))).toEqual({
			...previousState,
			isAuth: true
		});
	});

	test("should set the user object", () => {
		const previousState: AuthSliceState = {
			...initialState,
			user: {username: "", photo: "", description: "", uuid: ""}
		};
		expect(
			reducer(
				previousState,
				setUser({username: "Max", photo: "img", description: "", uuid: ""})
			)
		).toEqual({
			...previousState,
			user: {username: "Max", avatar: "img"}
		});
	});

	test("should set an isFetching flag to true", () => {
		const previousState: AuthSliceState = {...initialState, isFetching: false};
		expect(reducer(previousState, setIsFetching(true))).toEqual({
			...previousState,
			isFetching: true
		});
	});
});
