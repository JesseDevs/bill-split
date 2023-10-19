<template>
	<output-block>
		<div class="go-home">
			<button @click="goHome()">
				<SvgIcon icon="angle-left" />
				Go Back
			</button>
		</div>
		<Transition name="fade" mode="out-in">
			<form v-if="!percentage">
				<label for="directTip" class="level-two-voice">How much tip?</label>
				<input
					name="directTip"
					id="directTip"
					required
					type="number"
					inputmode="decimal"
					v-model="bill.tipAmount"
				/>
				<span class="helper-sign">$</span>
			</form>
			<form class="range-container" v-else-if="percentage">
				<label for="" class="level-two-voice">How much tip?</label>
				<div class="percentage">
					<p>15</p>
				</div>
				<input id="tip" required type="range" min="0" max="30" value="15" />
			</form>
		</Transition>

		<action-block>
			<button id="calculateTotal" data-route="total">Total</button>
			<button @click="show.showSplit">Split It</button>
			<button @click="togglePercetage()">Prefer a Percentage?</button>
		</action-block>
	</output-block>
	{{ percentage }}
</template>

<script setup>
	import SvgIcon from '@/components/SvgIcon.vue';
	import { useBillStore } from '@/stores/bill';
	import { useShowStore } from '@/stores/show';
	import { ref } from 'vue';
	const bill = useBillStore();
	const show = useShowStore();

	const goHome = () => {
		show.showBill();
		bill.resetBill();
	};

	const percentage = ref(false);

	const togglePercetage = () => {
		percentage.value = !percentage.value;
	};
</script>

<style lang="scss" scoped>
	action-block {
		button:last-of-type {
			grid-column: 1/-1;
		}
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	form {
		min-height: 140px;
	}
</style>
