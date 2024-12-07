<template>
	<div class="lesson-card" @click="chooseOption">
		<p v-if="props.type === 'theme'" class="lesson-card__title"> {{ cardTitle }} </p>
		<div v-else-if="props.type === 'difficulty'" class="lesson-card__title lesson-card__title_difficulty">
			<p style="font-size: 40px; line-height: 45px; font-weight: 300;"> {{ cardTitle }} </p>
			<p style="font-size: 24px; font-weight: 300;"> ({{points}} очков)</p>
		</div>
		<label for="questions" 
			style="margin-left: auto; 
				margin-right: 21px; 
				white-space: pre-line; 
				letter-spacing: 0%; 
				line-height: 16px;
				font-weight: 500;
				font-size: 20px;">
			{{`число
			вопросов:`}}
		</label>
		<input 
			v-if="props.type === 'theme'" 
			v-model="questionAmount" 
			name="questions" class="lesson-card__questions" />
		<div v-else-if="props.type === 'difficulty'" 
			class="lesson-card__questions lesson-card__questions_readonly">
			{{ questionAmount }} 
		</div>
	</div>
</template>

<script setup lang="ts">
import { difficultyInfo, themeTranslate, type cardOption } from '~/custom-types/lesson';
import { store } from '~/store';

const props = defineProps<{
	type: 'difficulty' | 'theme' | undefined,
	option: cardOption
}>()

let questionAmount: Number | undefined = props.type === 'difficulty' ? difficultyInfo(props.option)?.questionAmount : 5;
const cardTitle = props.type === 'difficulty' ? difficultyInfo(props.option)?.title : themeTranslate(props.option)
const points = props.type === 'difficulty' ? difficultyInfo(props.option)?.points : 0

function chooseOption() {
	switch (props.type) {
		case 'difficulty':
			store.commit('setDifficulty', props.option)
			break;
		case 'theme':
			store.commit('setTheme', props.type)
			store.commit('setQuestionAmount', questionAmount)
			break;
	}
}
</script>

<style lang="scss" scoped>
.lesson-card {
	box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 0.25);
	background: rgb(210, 246, 215);
	border-radius: $radius;
	width: 768px;
	height: 108px;
	display: inline-flex;
	align-items: center;
	padding-left: 100px;
	padding-right: 33px;
	justify-content: space-between;
	cursor: pointer;

	&__title {
		font-size: 40px;
		font-weight: 300;

		&_difficulty {
			white-space: pre-line;
		}
	}

	&__questions {
		width: 36px;
		height: 36px;
		font-size: 20px;
		box-sizing: border-box;
		border: 1px solid rgb(95, 118, 102);
		background: rgb(255, 255, 255);
		text-align: center;

		&_readonly {
			background: #5F7666; 
			color: white; 
			align-items: center; 
			display: flex; 
			justify-content: center;
		}
	}
}
</style>