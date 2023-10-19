import { computed, onMounted, watch, ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import _ from 'lodash';

export const useShowStore = defineStore('show', function () {
	const showBillForm = ref(true);
	const showSplitForm = ref(false);
	const showCustomForm = ref(false);

	const showSplit = () => {
		showBillForm.value = false;
		showSplitForm.value = true;
		showCustomForm.value = false;
	};

	const showBill = () => {
		showBillForm.value = true;
		showSplitForm.value = false;
		showCustomForm.value = false;
	};

	const showCustom = () => {
		showBillForm.value = false;
		showSplitForm.value = false;
		showCustomForm.value = true;
	};

	return {
		showBillForm,
		showSplitForm,
		showCustomForm,
		showSplit,
		showBill,
		showCustom,
	};
});
