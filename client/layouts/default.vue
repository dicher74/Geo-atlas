<script setup lang="ts">
import { onMounted, ref } from 'vue'
import DefaultFooter from '~/components/DefaultFooter.vue';

let fullHeight = ref(0)
onMounted(() => fullHeight.value = document.documentElement.scrollHeight)
</script>

<template>
	<div class="default-layout">
		<div class="default-layout__inner-background" :style="`height: ${fullHeight}px;`"></div>
		<div style="z-index: 1;">
			<slot></slot>
			<DefaultFooter/>
		</div>
	</div>
</template>


<style lang="scss" scoped>
.default-layout {
	width: 100%;
	height: 100%;
	display: inline-flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: #5F7666;
	&__inner-background {
		background-color: #7CA287;
		position: absolute;
		align-self: center;
		width: calc(100% - 96px)
	}
}
</style>