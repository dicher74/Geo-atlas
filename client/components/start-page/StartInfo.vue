<script setup lang="ts">
import ModeCard from './components/ModeCard.vue';

interface modeCard {
	title: string,
	description: string,
	image: string
}

const modeCards: Array<modeCard> = [
	{
		title: 'Режим приключения',
		description: `Зарабатывайте очки, проходя
					уровни разной сложности!`,
		image: 'chest 1'
	},
	{
		title: 'Классический режим',
		description: `Выполняй квизы на различные 
						географические темы!`,
		image: 'cubs 1'
	}
]
</script>

<template>
	<section class="start-info">
		<div class="start-info__main">
			<img class="captain-image" src="~assets/images/captain.png" alt="captain-image" />
			<div class="green-section">
				<p class="green-section__description">
					{{`Приветствую, юнга!
					
					Я капитан Громов, опытный морской волк! 
					Если тебе нужно в краткие сроки улучшить свои
					географические знания - ты по адресу!
					
					Выполняй мои задания-квизы, чтобы стать настоящим
					географическим асом. 
					
					Вперёд, к новым знаниям!`}}
				</p>
			</div>
		</div>
		<div class="start-info__cards">
			<ModeCard 
				v-for="card, cardNum in modeCards" :key="`mode-card_num-${cardNum}`"
				:title="card.title"
				:description="card.description"
				:image="card.image">
			</ModeCard>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.start-info {
	width: 1254px;
	display: inline-flex;
	flex-direction: column;
	gap: 30px;
	margin: 0 auto;

	&__main {
		width: 100%;
		height: 419px;
		display: inline-flex;
		gap: 157px;
		padding-left: 42px;
		border: 3px	solid #5F7666;
		border-radius: $radius;
		background-color: white;
	}

	&__cards {
		display: inline-grid;
		grid-template-columns: 1fr 1fr;
		gap: 54px;
	}
}

.green-section {
	width: 581px;
	padding-top: 106px;
	padding-left: 28px;
	background-color: #D2F6D7;

	&__description {
		white-space: pre-line;
		font-size: 18px;
	}
}

.captain-image {
	width: 350px;
	height: 350px;
	align-self: center;
}
</style>