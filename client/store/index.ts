import { createStore } from "vuex"
import VuexPersistence from "vuex-persist"
import { type Lesson } from "~/custom-types/lesson"
import type { Question } from "~/custom-types/question";

interface State {
	points: number,
	ranks: {[key: number]: string},
	lesson: Lesson,
	currentQuestions: Array<Question>
}

let vuexLocalStorage = null;
if (process.browser) {
	vuexLocalStorage = new VuexPersistence({
		key: 'vuex', // The key to store the state on in the storage provider.
		storage: window.localStorage, // or window.sessionStorage or localForage
	})
}

export const store = createStore<State> ({
	state: {
		points: 0,
		ranks: {0: 'Юнга', 1: 'Боцман'},
		lesson: {
			type: undefined,
			difficulty: undefined,
			theme: undefined,
			points: undefined,
			questionAmount: undefined,
		},
		currentQuestions: [],
	},
	mutations: {
		setLessonType(state, newLessonType) {
			console.log('set lesson type: ', newLessonType)
			state.lesson.type = newLessonType
		},
		setDifficulty(state, difficulty) {
			console.log('set difficulty: ', difficulty)
			state.lesson.difficulty = difficulty
		},
		setTheme(state, theme) {
			console.log('set theme: ', theme)
			state.lesson.theme = theme
		},
		setPoins(state, points) {
			console.log('set points: ', points)
			state.lesson.points = points
		}
	},
	getters: {
		getRank: ({ranks, points}) => ranks[points],
	},
	plugins: process.browser ? [vuexLocalStorage.plugin] : [],
})