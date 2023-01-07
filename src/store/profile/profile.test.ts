import {ProfileSliceState} from "@store/profile/profile.types";
import reducer, {
	initialState,
	setIsFetching,
	setProfile
} from "./profile.slice";

describe("profile reducer should work properly", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {type: undefined})).toEqual(initialState);
	});

	test("should set an isFetching flag to true", () => {
		const previousState: ProfileSliceState = {
			...initialState,
			isFetching: false
		};
		expect(reducer(previousState, setIsFetching(true))).toEqual({
			...previousState,
			isFetching: true
		});
	});

	test("should set the profile object", () => {
		const previousState: ProfileSliceState = {
			...initialState,
			profile: {username: "", photo: "", description: "", uuid: ""}
		};
		expect(
			reducer(
				previousState,
				setProfile({
					username: "Max",
					photo: "avatar",
					description: "",
					uuid: ""
				})
			)
		).toEqual({
			...previousState,
			profile: {username: "Max", avatar: "avatar"}
		});
	});
});
