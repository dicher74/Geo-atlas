import { createStore } from "vuex"


interface State {
	points: number,
	ranks: {[key: number]: string}
}

export const store = createStore<State> ({
	state: {
		points: 0,
		ranks: {0: 'Юнга', 1: 'Боцман'}
	},
	getters: {
		getRank: ({ranks, points}) => ranks[points],
	},
})