<template>
	<div class="mode-card">
		<img class="mode-card__image" :src="`/icons/${props.image}.svg`" />
		<div class="mode-card__description description">
			<p class="description__title"> {{ props.title }} </p>
			<p class="description__main"> {{ props.description }} </p>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	image: string
	title: string
	description: string
}>()

</script>

<style lang="scss" scoped>
.mode-card {
	display: inline-flex;
	gap: 32px;
	padding-left: 58px;
	padding-top: 10px;
	background-color: #D2F6D7;
	height: 156px;

	&__image {
		width: 90px;
		height: 90px;
		align-self: center;
	}

	&__description {
		display: inline-flex;
		flex-direction: column;
		gap: 20px;
	}
}

.description {
	&__main {
		font-size: 18px;
		white-space: pre-line;
	}
	&__title {
		white-space: nowrap;
		font-size: 24px;
	}
}
</style>