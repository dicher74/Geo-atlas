<script setup lang="ts">
import Logo from '../Logo.vue';
</script>

<template>
	<section class="start-banner">
		<p class="start-banner__title">
				<span style="font-weight: 700; font-style: italic;">Geo-</span>
				<span style="font-weight: 300;">атлас</span></p>
		<Logo :width="249" :height="234" class="animated-logo"/>
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
	height: auto;
	padding: 60px 0px;
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 35px;
	background-image: url('../../assets/images/start-banner.svg');
	background-size: cover;
	background-position: center;
	box-sizing: border-box;
	animation: show-background 0.7s;
	&__title {
		display: inline-flex;
		font-size: 64px;
		animation: fly-left 1s;
	}
	&__description {
		animation: fly-right 1s;
		white-space: pre-line;
		text-align: center;
		font-size: 32px;
		color: #507C5C;
		font-style: italic;
		font-weight: 400;
	}
}

.animated-logo {
	animation: show 1s;
}

@keyframes show {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes fly-right {
	0% {
		margin-left: 100%;
	}
	100% {
		margin-left: 0%;
	}
}

@keyframes fly-left {
	0% {
		margin-right: 100%;
	}
	100% {
		margin-right: 0%;
	}
}

@keyframes show-background {
	0% {
		background-size: 10%;
	}
	100% {
		background-size: 100vw;
	}
}
</style>