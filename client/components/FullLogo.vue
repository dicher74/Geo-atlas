<template>
	<div class="full-logo">
		<Logo :width="51" :height="51" />
		<p class="full-logo__text">
			<span class="full-logo__text_part-1">Geo</span> <br/>
			<span class="full-logo__text_part-2">атлас</span>
		</p>
	</div>
</template>

<style lang="scss" scoped>
.full-logo {
	display: inline-flex;
	gap: 8px;
	align-items: center;
	&__text {
		line-height: 20px;
		font-size: 20px;
	}
	&__text_part-1 {
		font-style: italic;
		font-weight: 500;
	}
	&__text_part-2 {
		font-weight: 200;
	}
}
</style>