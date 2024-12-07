<template>
	<section class="lesson-page">
		<div class="content-wrapper">
			<h1 class="lesson-page__header"> Выберите {{ lessonTypeTranslation }} </h1>
			<div class="lesson-page__content">
				<img class="lesson-page__image" alt="decorative image" src="~assets/images/thinking.png" />
				<div class="lesson-page__cards">
					<LessonPageLessonDifficultyCard
						v-for="option, optionNum in cardsOptions?.values"
						:key="`option_num-${optionNum}`" 
						:type="cardsOptions?.id"
						:option="option" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { getCardsOptions, translateLessonType } from '~/custom-types/lesson';
import { store } from '~/store';

definePageMeta({
  layout: 'default'
})

const lessonType = store.state.lesson.type

const lessonTypeTranslation = translateLessonType(lessonType)
const cardsOptions = getCardsOptions(lessonType)
</script>

<style lang="scss" scoped>
.lesson-page {
	width: 100%;
	margin-top: 120px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	&__header {
		color: rgb(255, 255, 255);
		font-size: 40px;
		font-weight: 500;
		font-style: italic;
		margin-bottom: 30px;
	}

	&__content {
		display: inline-flex;
		gap: 56px;
	}

	&__image {
		width: 399px;
		height: 483px;
		border-radius: 73px;
	}

	&__cards {
		display: inline-flex;
		flex-direction: column;
		gap: 17px;
	}
}
</style>