import {AxiosError} from "axios";

interface ServerError {
	error: {
		ok: boolean;
		message: string;
	};
}

type APIError = AxiosError<ServerError>;

export default APIError;
