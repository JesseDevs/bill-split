<template>
	<header class="site-header">
		<inner-column>
			<h1 class="level-four-voice" data-route="home">
				Bill <span>/</span> <span>Split</span>
			</h1>
		</inner-column>
	</header>
</template>

<script setup></script>

<style lang="scss" scoped>
	header {
		inner-column {
			display: grid;
			grid-template-columns: 1fr;
			gap: 10px;

			padding: 10px;
		}

		h1 {
			text-align: center;
			max-width: fit-content;
			margin: 0 auto;
			padding-left: 20px;
			padding-right: 20px;

			font-family: 'Lobster', serif;
			font-weight: 800;
			letter-spacing: 2px;
			cursor: pointer;

			transition: transform 1s;

			span {
				pointer-events: none;
			}
		}

		span:nth-of-type(1) {
			display: inline-block;
			animation: drop-in 0.7s ease-in-out;
		}

		span:nth-of-type(2) {
			display: inline-block;
			animation: slide-in-right 1s ease-in-out;
			animation-delay: 200ms;
		}
	}
</style>
