<template>
	<section class="achievements-area">
		<div class="achievements-card">
			<div class="card__title"> Ваши достижения </div>
			<div class="card__content card-content">
				<img class="card-content__image" src="~assets/images/ach.png">
				<div class="card-content__description">
					<p class="points"> Вы накопили очков: {{ points }} </p>
					<p class="rank"> Ваш ранг: {{ rank }} </p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { store } from '../../store/index'

const points = store.state.points
const rank = store.getters.getRank

</script>

<style lang="scss" scoped>
.achievements-area {
	width: 100%;
	height: 100vh;
	display: inline-flex;
	justify-content: center;
	align-items: center;
}
.achievements-card {
	width: 1254px;
	box-sizing: border-box;
	border: 3px solid rgb(80, 124, 92);
	border-radius: $radius;
	background: rgb(255, 255, 255);
	padding: 125px 0px 0px 133px;
}

.card__title {
	position: absolute;
	margin-top: -83px;
	margin-left: -49px;
	font-size: 64px;
 	font-weight: 300;
 	line-height: 83px;
	color: rgb(95, 118, 102);
}

.card-content {
	display: inline-flex;
	gap: 80px;
	&__image {
		width: 478px;
		margin-bottom: 26px;
	}
	&__description {
		background-color: #D2F6D7;
		margin-top: -125px;
		width: 489px;
		display: inline-flex;
		flex-direction: column;
		padding-top: 218px;
		padding-left: 35px;
	}
}
.points {
	font-size: 32px;
	font-weight: 400;
	line-height: 42px;
}

.rank {
	font-size: 40px;
	font-weight: 500;
	line-height: 52px;
}
</style>