<script setup>
	defineProps(['icon']);
</script>
<template>
	<div class="contains-svg">
		<svg :class="icon"><use :xlink:href="`#icon-${icon}`"></use></svg>
	</div>
</template>

<style lang="scss" scoped>
	div.contains-svg {
		width: 30px;
		height: 30px;

		svg {
			width: 30px;
			height: 30px;
		}

		svg * {
			fill: var(--color-third);
			transition: fill 0.1s ease-in-out;
		}
	}

	*:hover > div.contains-svg {
		width: 30px;
		height: 30px;

		svg {
			fill: var(--white);
		}

		svg * {
			fill: var(--white);
		}
	}
</style>
