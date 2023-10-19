<template>
	<receipt-block>
		<h2 class="level-three-voice">Receipt</h2>

		<receipt-box class="level-two-voice">
			<h4>Sub Total</h4>
			<p>${{ bill.subTotal }}</p>
		</receipt-box>
		<receipt-box class="level-two-voice">
			<h4>Tip Amount</h4>
			<p>${{ bill.tipAmount }}</p>
		</receipt-box>
		<receipt-box class="level-two-voice">
			<h4>Total</h4>
			<p>${{ bill.total }}</p>
		</receipt-box>
		<receipt-box class="level-two-voice">
			<h4>People</h4>
			<p>{{ bill.people }}</p>
		</receipt-box>
		<receipt-box class="level-two-voice">
			<h4>Per Person</h4>
			<p>${{ bill.perPersonSum }}</p>
		</receipt-box>
	</receipt-block>
</template>

<script setup>
	import { computed, onMounted, watch, ref, reactive } from 'vue';
	import { useBillStore } from '@/stores/bill';
	const bill = useBillStore();
</script>

<style lang="scss" scoped>
	.receipt {
		display: block;
	}

	receipt-block {
		display: flex;
		flex-direction: column;
		gap: 20px;
		position: relative;

		background-color: var(--background-light);
		color: var(--black-text);
		font-family: 'VT323', monospace;

		padding: 1rem;
		padding-bottom: 4rem;
		padding-top: 2rem;

		border-bottom: 5px inset var(--color-black-30);
		border-top: 5px inset var(--color-black-30);

		h2 {
			text-align: center;
			text-transform: uppercase;
			letter-spacing: 1.5px;
			font-weight: 800;
		}

		h4:after {
			bottom: -0.2rem;
			left: 0;

			content: '';
			position: absolute;
			width: 100%;
			height: 3px;
			border-bottom: 3px dotted black;
		}
	}

	receipt-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;

		&:nth-of-type(4) {
			margin-top: 20px;
		}

		p {
			min-height: 30px;
			text-align: right;
			width: 50%;
		}

		> * {
			font-size: inherit;
		}
	}
</style>
