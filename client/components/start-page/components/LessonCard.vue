<template>
	<div class="lesson-card">
		<p class="lesson-card__title"> {{ props.title }} </p>
		<div class="lesson-card__description-area">
			<img class="lesson-card__image" :src="`/lesson-cards/${props.image}.png`" alt="lesson-card" />
			<p class="lesson-card__description"> {{ props.description }} </p>
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
	&__image {
		width: 612px;
		height: 220px;
	}
}
</style>