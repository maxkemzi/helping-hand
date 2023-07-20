import User from "@customTypes/entities/user";

interface AuthResponse {
	token: string;
	user: User;
}

export default AuthResponse;
