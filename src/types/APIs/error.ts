import {AxiosError} from "axios";

export interface ServerError {
	error: {
		ok: boolean;
		message: string;
	};
}

type APIError = AxiosError<ServerError>;

export default APIError;
