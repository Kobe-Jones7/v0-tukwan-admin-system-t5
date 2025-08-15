import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatCurrency = (
	amount: number,
	locale: Intl.LocalesArgument = "en-GH"
) => {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: "GHS"
	}).format(amount);
};

export function base64ToBlob(base64: string, contentType: string = "") {
	const byteCharacters = atob(base64);
	const byteNumbers = new Array(byteCharacters.length);
	for (let i = 0; i < byteCharacters.length; i++) {
		byteNumbers[i] = byteCharacters.charCodeAt(i);
	}
	const byteArray = new Uint8Array(byteNumbers);
	return new Blob([byteArray], { type: contentType });
}

export function arrayToJson(arr: any[]) {
	const obj = { [arr[0]]: arr[1] };
	return obj;
}
