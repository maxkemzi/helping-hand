import {ServerError} from "@customTypes/APIs/error";

export interface Tag {
	text: string;
	category: string;
	uuid: string;
}

export interface Tags {
	courses: Tag[];
	general_categories: Tag[];
	subjects: Tag[];
}

export interface TagsResponse {
	result: {
		tags: Tags;
	};
	error: ServerError;
}
