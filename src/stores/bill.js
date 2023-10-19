import { computed, onMounted, watch, ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import _ from 'lodash';

export const useBillStore = defineStore('bill', function () {
	// _.round( aomount, number of digits 2 for example);

	const amount = ref(null);
	const subTotal = ref(0);

	const tipAmount = ref(0);
	const total = computed(() => subTotal.value + tipAmount.value);

	const currentAmount = ref(0);
	const people = ref(1);
	const perPersonSum = computed(() => {
		const value = _.round(total.value / Math.max(people.value, 1), 2);
		return isFinite(value) ? value : 0;
	});

	function updateAmount(amount) {
		currentAmount.value = amount;
		subTotal.value = amount;
	}

	function calculateTip(amount, tip) {
		currentAmount.value = amount;
		subTotal.value = amount;

		var rawTip = amount * parseFloat(tip);
		var roundedTip = _.round(rawTip, 2);

		tipAmount.value = roundedTip;
	}

	function resetBill() {
		subTotal.value = 0;
		tipAmount.value = 0;
		amount.value = '';
	}

	return {
		amount,
		currentAmount,
		people,
		perPersonSum,
		subTotal,
		tipAmount,
		total,

		// functions
		updateAmount,
		calculateTip,
		resetBill,
	};
});
