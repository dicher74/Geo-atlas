export type difficulty = undefined | 'start' | 'middle' | 'hard' | 'extrim'
export type theme = undefined | 'capitals' | 'languages' | 'flags' | 'money'
export type cardOption = difficulty | theme

export function difficultyInfo(difficulty: cardOption) {
	switch(difficulty) {
		case 'start':
			return {title: "Начальный", questionAmount: 10, points: 5};
		case 'middle':
			return {title: "Средний", questionAmount: 15, points: 20};
		case 'hard':
			return {title: "Сложный", questionAmount: 20, points: 50};
		case 'extrim':
			return {title: "Экстрим", questionAmount: 25, points: 100};
	}
}

export function themeTranslate(theme: cardOption) {
	switch(theme) {
		case 'capitals':
			return "Столицы";
		case 'flags':
			return "Флаги";
		case 'languages':
			return "Языки";
		case 'money':
			return "Валюта"
	}
}

export interface Lesson {
	type: undefined | 'level' | 'queez',
	difficulty: difficulty,
	theme: theme,
	questionAmount: undefined | number,
	points: undefined | 0 | 5 | 20 | 50 | 100,
}

export interface cardOptions {
	id: 'difficulty' | 'theme',
	values: Array<cardOption>
}

type LessonType = Lesson["type"] 

export function translateLessonType(LessonType: LessonType) {
	switch(LessonType) {
		case 'level':
			return 'уровень';
		case 'queez':
			return 'квиз';
	}
}

export function getCardsOptions(LessonType: LessonType) : cardOptions | undefined{
	switch(LessonType) {
		case 'level':
			return {
				id: 'difficulty',
				values: ['start', 'middle', 'hard', 'extrim']
			}
		case 'queez':
			return {
				id: 'theme',
				values: ['capitals', 'languages', 'flags', 'money']
			}
	}
}