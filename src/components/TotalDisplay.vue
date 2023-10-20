<template>
	<output-block>
		<div class="go-home">
			<button @click="goHome()">
				<SvgIcon icon="angle-left" />
				Go Home
			</button>
		</div>

		<div class="total">
			<p class="result level-one-voice">Total Per Person</p>
			<p class="level-four-voice">${{ bill.perPersonSum }}</p>
		</div>
	</output-block>
</template>

<script setup>
	import SvgIcon from '@/components/SvgIcon.vue';
	import { useBillStore } from '@/stores/bill';
	import { useShowStore } from '@/stores/show';
	import { computed, onMounted, watch, ref, reactive } from 'vue';
	const bill = useBillStore();
	const show = useShowStore();

	const goHome = () => {
		show.showBill();
		bill.resetBill();
	};
</script>

<style lang="scss" scoped>
	div.total {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 90%;

		margin: 0 auto;
		margin-top: 2rem;

		padding: 1rem;

		&:before {
			bottom: 0rem;
			left: 0;
			content: '';
			position: absolute;
			width: 100%;
			height: 3px;
			border-bottom: var(--thick) dotted var(--color-third);
		}

		&:after {
			top: 0rem;
			left: 0;
			content: '';
			position: absolute;
			width: 100%;
			height: 3px;
			border-bottom: var(--thick) dotted var(--color-third);
		}

		p {
			font-weight: 600;
			font-family: monospace;
		}

		p.result {
			font-family: monospace;
			font-weight: 500;
			letter-spacing: 0.02em;
		}
	}
</style>
