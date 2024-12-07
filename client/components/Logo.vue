<template>
	<img class="logo" src="~assets/images/logo.svg" :style="`width: ${props.width}px; height: ${props.height}px`"/>
</template>

<script setup lang="ts">
const props = defineProps<{
	width: number
	height: number
}>()
</script>