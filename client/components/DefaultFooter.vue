<script setup lang="ts">
import FullLogo from './FullLogo.vue';
</script>

<template>
	<footer class="default-footer">
		<FullLogo />
		<div class="default-footer__contacts">
			<p class="contacts__title">Наши контакты</p>
			<div class="contacts__content">
				<p class="contact contact_email">test@mail.com</p>
				<p class="contact contact_telegram">@telegramNick</p>
				<p class="contact contact_phone">+7(777)777-77-77</p>
			</div>
		</div>
		<p class="default-footer__company-info">© ООО “ГеоАтлас”, 2024</p>
	</footer>
</template>

<style lang="scss" scoped>
.default-footer {
	width: 100%;
	margin-top: 350px;
	display: inline-flex;
	align-items: flex-start;
	padding: 30px 0px 30px 69px;
	box-sizing: border-box;
	background-color: #D2F6D7;
	&__contacts {
		margin-left: 293px;
		display: inline-flex;
		flex-direction: column;
		gap: 35px;
	}
	&__company-info {
		margin-left: 233px;
		font-size: 20px;
		font-weight: 300;
		line-height: 16px;
	}
}

.contacts {
	&__title {
		font-size: 24px;
		font-weight: 300;
		line-height: 16px;
	}
	&__content {
		display: inline-flex;
		flex-direction: column;
		gap: 15px;
	}
}

.contact {
	font-size: 20px;
	font-weight: 600;
	line-height: 16px;
	text-decoration-line: underline;
}
</style>