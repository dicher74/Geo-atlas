<template>
  <div class="start-page-wrapper">
		<StartPageStartBanner class="start-page-section" />
		<StartPageStartInfo class="start-page-section" id="lessons" />
		<StartPageLessonsArea class="start-page-section" id="queez" />
		<StartPageAchievementsArea class="start-page-section" id="rank" />
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'start-page'
})
</script>

<style lang="scss" scoped>
.start-page-wrapper {
	width: 100%;
	display: inline-flex;
	flex-direction: column;
	gap: 350px;
	padding-top: 90px;
}
</style>