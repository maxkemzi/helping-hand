import {ReactNode} from "react";

export interface ITask {
	title: string;
	tags: ITag[];
	description: string;
	creator: IUser;
	id: string;
	date: string;
	isActive: boolean;
}

export interface IAchieve {
	id: string;
	description: string;
}

export interface IUser {
	username: string;
	avatar: string;
}

export interface ITag {
	id?: string;
	text: string;
}

export interface IStat {
	value: number | string;
	title: string;
}

export interface IconProps {
	className?: string;
	width?: number;
	height?: number;
}

export interface ISlide {
	id: number;
	title: string;
	text: ReactNode;
	buttonText?: string;
	buttonPath?: string;
}

export interface Theme {
	name: string;
	styles: {[key: string]: string};
}

export type Language = "en" | "ru" | "ua";

export type PrimaryColor = "" | "lighter" | "light";
