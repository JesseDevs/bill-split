<template>
	<main>
		<section>
			<TransitionGroup name="list" tag="inner-column" class="landing">
				<li key="form">
					<BillForm v-if="show.showBillForm" />
					<SplitForm v-else-if="show.showSplitForm" />
					<CustomForm v-else-if="show.showCustomForm" />
				</li>

				<li key="receipt">
					<ReceiptBlock />
				</li>
			</TransitionGroup>
		</section>
	</main>
</template>

<script setup>
	import ReceiptBlock from '@/components/ReceiptBlock.vue';
	import BillForm from '@/components/BillForm.vue';
	import SplitForm from '@/components/SplitForm.vue';
	import CustomForm from '@/components/CustomForm.vue';

	import { useShowStore } from '@/stores/show';
	const show = useShowStore();
</script>

<style lang="scss">
	inner-column.landing {
		display: flex;
		flex-direction: column;
		gap: 4rem;

		@media (min-width: 768px) {
			gap: 2.5rem;
			flex-direction: row;
		}
	}

	div.go-home {
		button {
			display: flex;
			padding: 0.4rem 1.2rem;
			gap: 10px;
			align-items: center;
		}

		&:hover {
			button svg {
				fill: white;
			}
		}

		svg {
			fill: var(--color-third);
		}
	}
	action-block {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;

		button.custom-btn {
			grid-column: span 2;
		}
	}

	.list-move,
	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}

	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}

	output-block {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 20px;

		form {
			display: block;
			width: 100%;
			position: relative;

			.helper-sign {
				position: absolute;
				bottom: 5px;
				left: 10px;
				font-size: 40px;
				opacity: 0.9;
			}
		}

		input[type='number'],
		label,
		span {
			padding-top: 5px;
			padding-bottom: 5px;
			border: none;
			font-size: 22px;
		}

		label {
			color: var(--color-secondary);
			line-height: 1.4;
			padding-bottom: 1rem;
			display: block;
			font-weight: 600;
		}

		input[type='number']:focus {
			border-color: var(--color-secondary);
			outline: 0;
		}

		input[type='number'] {
			font-size: 48px;
			color: var(--ink);
			font-weight: 300;
			border-radius: 2px;
			padding: 10px;
			margin: 0;
			border: none;
			border: 2px solid var(--color-secondary-40);
			border-radius: 5px;
			background: rgba(0, 0, 0, 0.182);
			transition: border-color 0.2s ease, margin-top 0.2s ease;
			padding-left: 42px;

			overflow-x: hidden;
		}
	}
</style>
