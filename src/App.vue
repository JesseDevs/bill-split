<script setup>
	import SpriteSheet from '@/components/SpriteSheet.vue';
	import { RouterView } from 'vue-router';
	import SiteHeader from '@/components/site/SiteHeader.vue';
</script>

<template>
	<SpriteSheet />
	<SiteHeader />

	<RouterView />

	<footer></footer>
</template>

<style scoped></style>
