import User from "@customTypes/entities/user";

interface AuthResponse {
	result: {
		session: {
			access_token: string;
			refresh_token: string;
		};
		user: {profile: User};
	};
	error: {
		ok: boolean;
		message: string;
	};
}

export default AuthResponse;
