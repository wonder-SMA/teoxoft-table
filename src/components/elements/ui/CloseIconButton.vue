<script setup>
import IconButton from '@/components/layouts/ui/IconButton.vue';

const props = defineProps({
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
});
</script>

<template>
	<IconButton
		class="close-icon-button"
		id="al"
		aria-label="Закрыть модальное окно"
		name="close"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 26 26"
			:style="`width: ${width}px; height: ${height}px`"
			stroke-width="2"
			fill="none"
			stroke="#374151"
			class="icon"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>

	</IconButton>
</template>

<style lang="scss" scoped>
.close-icon-button {

	&:active {
		transform: rotate(90deg);
	}
}
</style>

