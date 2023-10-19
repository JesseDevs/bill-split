<template>
	<output-block class="home">
		<form>
			<label for="dollars" class="level-two-voice">Enter Amount?</label>
			<input
				v-model="bill.amount"
				required
				min="1"
				type="number"
				name="dollars"
				inputmode="decimal"
				id="dollars"
			/>
			<span class="helper-sign">$</span>
		</form>

		<action-block>
			<button
				class="tip-btn"
				:disabled="disabledButton"
				@click="handleTipButtonClick(0.15)"
			>
				15%
			</button>

			<button
				class="tip-btn"
				:disabled="disabledButton"
				@click="handleTipButtonClick(0.2)"
			>
				20%
			</button>

			<button
				class="tip-btn custom-btn"
				@click="handleCustomFormRoute()"
				:disabled="disabledButton"
			>
				Custom Tip
			</button>

			<button
				id="no-tip"
				class="tip-btn custom-btn"
				:disabled="disabledButton"
				@click="handleTipButtonClick(0)"
			>
				No Tip
			</button>
		</action-block>
	</output-block>
</template>

<script setup>
	import { computed, onMounted, watch, ref, reactive } from 'vue';
	import { useBillStore } from '@/stores/bill';
	import { useShowStore } from '@/stores/show';
	const bill = useBillStore();
	const show = useShowStore();

	const handleTipButtonClick = (percentage) => {
		bill.calculateTip(bill.amount, percentage);
		show.showSplit();
	};

	const handleCustomFormRoute = () => {
		bill.updateAmount(bill.amount, 0);
		show.showCustom();
	};

	const disabledButton = ref(true);

	watch(
		() => bill.amount,
		(newValue) => {
			if (newValue !== '' && newValue !== null) {
				disabledButton.value = false;
			} else {
				disabledButton.value = true;
				bill.resetBill();
			}
		},
	);
</script>

<style lang="scss"></style>
