<template>
  <div class="start-page-wrapper">
		<StartPageStartBanner class="start-page-section" />
		<StartPageStartInfo class="start-page-section" />
		<StartPageLessonsArea class="start-page-section" />
		<StartPageAchievementsArea class="start-page-section" />
	</div>
</template>

<style lang="scss" scoped>
.start-page-wrapper {
	width: 100%;
	height: 100vh;
	display: inline-flex;
	flex-direction: column;
	gap: 350px;
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
}

.start-page-section {
	scroll-snap-align: center;
}
</style>