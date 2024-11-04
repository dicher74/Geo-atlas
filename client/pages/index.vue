<template>
  <div class="start-page-wrapper">
		<StartPageStartBanner class="start-page-section" />
		<StartPageStartInfo class="start-page-section" />
		<StartPageLessonsArea class="start-page-section" />
		<StartPageAchievementsArea class="start-page-section" />
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default'
})
</script>

<style lang="scss" scoped>
.start-page-wrapper {
	width: 100%;
	display: inline-flex;
	flex-direction: column;
	gap: 350px;
}
</style>