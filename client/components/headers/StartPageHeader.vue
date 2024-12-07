<template>
	<header class="header header_start-page">
		<FullLogo />
		<nav class="header__navigation navigation">

			<NuxtLink
				v-for="button, buttonNum in navigationButtons" 
				:key="`navigation-button_num-${buttonNum}`"
				:to="button.target"
				class="navigation__button">
				<div> {{ button.title }} </div>
		</NuxtLink>
		</nav>
	</header>
</template>

<script setup lang="ts">
interface NavigationButton {
	title: string,
	target: string,
}

const navigationButtons: Array<NavigationButton> = [
	{title: 'Режимы', target: '#lessons'},
	{title: 'Квизы', target: '#queez'},
	{title: 'Рейтинг', target: '#rank'},
	{title: 'Контакты', target: '#contacts'}
]
</script>

<style scoped lang="scss">
.header {
	position: fixed;
	z-index: 2;
	width: 100%;
	display: inline-flex;
	height: 90px;
	padding-left: 44px;
	gap: 190px;
	align-items: center;
	background-color: #B2F7C7;
	box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.25);

	&__navigation {
		display: inline-flex;
		gap: 36px;
		height: 55px;
	}
}

.navigation {
	&__button {
		width: 156px;
		height: 100%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		font-weight: 500;
		border-radius: 19px;
		box-shadow: inset 0px -2px 1px 0px rgba(0, 0, 0, 0.25);
		background: rgb(255, 255, 255);
		transition: 0.3s all;
		cursor: pointer;
	}
}

@media screen and (hover: hover) {
	.navigation__button:hover {
		background: rgba(0, 0, 0, 0.25);
		color: white;
	}
}
</style>