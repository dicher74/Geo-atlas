<template>
	<div class="lesson-card" :style="`background-image: url(/lesson-cards/${props.image}.png); background-size: cover;`">
		<p class="lesson-card__title"> {{ props.title }} </p>
		<div class="description-area">
			<img class="description-area__image" src="~assets/images/list.svg"/>
			<p class="description-area__description"> {{ props.description }} </p>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	title: string
	image: string
	description: string
}>()
</script>

<style lang="scss" scoped>
.lesson-card {
	display: inline-flex;
	flex-direction: column;
	gap: 21px;
	padding-top: 20px;
	overflow: hidden;
	border: 3px solid rgb(124, 162, 135);
	border-radius: $radius;
	box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
	width: 612px;
	height: 220px;
	&__title {
		align-self: center;
		font-size: 36px;
		font-weight: 700;
		line-height: 47px;
	}
}

.description-area {
	width: 100%;
	display: inline-flex;
	align-items: center;
	gap: 42px;
	padding: 26px 0px 26px 86px;
	backdrop-filter: blur(4px);
	background: rgba(104, 105, 104, 0.7);
	&__image {
		width: 70px;
		height: 70px;
	}
	&__description {
		font-family: IBM Plex Mono;
		font-size: 18px;
		font-weight: 600;
		line-height: 23px;
		color: white;
		white-space: pre-line;
	}
}
</style>