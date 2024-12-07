export interface Lesson {
	type: undefined | 'level' | 'queez',
	difficulty: undefined | 'start' | 'middle' | 'hard' | 'extrim',
	questionAmount: undefined | number,
	points: undefined | 0 | 5 | 20 | 50 | 100,
}