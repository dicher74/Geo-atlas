<script setup lang="ts">
import Logo from '../Logo.vue';
</script>

<template>
	<section class="start-banner">
		<p class="start-banner__title">
				<span style="font-weight: 700; font-style: italic;">Geo-</span>
				<span style="font-weight: 300;">атлас</span></p>
		<Logo :width="249" :height="234" />
		<p class="start-banner__description">
			{{`Прокачивай знания с 
			нашим географическим 
			тренажёром!`}}
		</p>
	</section>
</template>

<style lang="scss" scoped>
.start-banner {
	width: 100%;
	min-height: 100vh;
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 35px;
	background-image: url('../../assets/images/start-banner.svg');
	background-size: cover;
	&__image {
		position: absolute;
		width: 100%;
		z-index: -1;
	}
	&__title {
		font-size: 64px;
	}
	&__description {
		white-space: pre-line;
		text-align: center;
		font-size: 32px;
		color: #507C5C;
		font-style: italic;
		font-weight: 400;
	}
}

</style>