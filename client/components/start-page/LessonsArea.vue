<script setup lang="ts">
import LessonCard from './components/LessonCard.vue';

interface lessonCard {
	title: string,
	image: string,
	description: string
}

const lessonCards: Array<lessonCard> = [
	{
		title: 'Флаги',
		description: `Упражняйтесь в знании 
					флагов различных государств`,
		image: 'card_1'
	},
	{
		title: 'Валюта',
		description: `Подтяните знание 
					национальных валют разных 
					стран`,
		image: 'card_2'
	},
	{
		title: 'Столицы',
		description: `Квиз, который поможет вам 
					выучить названия столиц 
					различных государств.`,
		image: 'card_3'
	},
	{
		title: 'Языки',
		description: `Укажите государственный 
					язык страны в списке 
					предложенных`,
		image: 'card_4'
	}
]
</script>

<template>
	<section class="lessons-area">
		<h1 class="lessons-area__title">Темы к изучению</h1>
		<div class="lessons-area__lessons">
			<LessonCard
				v-for="lessonCard, cardNum in lessonCards" :key="`lesson-card_num-${cardNum}`"
				:title="lessonCard.title"
				:description="lessonCard.description"
				:image="lessonCard.image" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.lessons-area {
	width: 100%;
	background-color: white;
	align-self: center;
	display: inline-flex;
	flex-direction: column;
	gap: 65px;
	padding-top: 10px;
	padding-bottom: 94px;
	padding-left: 92px;

	&__title {
		color: rgb(95, 118, 102);
		font-weight: 300;
		font-size: 64px;
		position: relative;
		left: 62px;
	}

	&__lessons {
		display: inline-grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 40px;
		row-gap: 34px;
		width: 100%;
	}
}
</style>