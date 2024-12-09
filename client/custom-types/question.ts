import type { difficulty, theme } from "./lesson";

export interface Question {
	theme: theme,
	difficlty: difficulty,
	img: undefined | string,
	options: Array<string>,
	correctOptionInex: number
}