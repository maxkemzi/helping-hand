interface AuthResponse {
	result: {
		session: {
			access_token: string;
			refresh_token: string;
		};
		user: {profile: {username: string; photo: string}};
	};
	error: {
		ok: boolean;
		message: string;
	};
}

export default AuthResponse;
