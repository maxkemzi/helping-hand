export interface IconProps {
	className?: string;
	width?: number;
	height?: number;
}

export interface Slide {
	id: number;
	title: string;
	text: string;
	buttonText?: string;
	buttonPath?: string;
}

export interface Theme {
	name: string;
	styles: {[key: string]: string};
}

export interface DropdownOption {
	id?: string;
	value: string;
	isActive?: boolean;
	text: string;
}

export type PrimaryColor = "" | "lighter" | "light";
