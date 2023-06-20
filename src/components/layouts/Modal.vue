<script setup>
import { ref, onMounted } from 'vue';
import CloseIconButton from '@/components/elements/ui/CloseIconButton.vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  isFooter: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const emit = defineEmits(['close']);

// Фокусируемся на модалке после монтирования
const modalRef = ref(null);
onMounted(() => modalRef.value.focus());

const onClick = event => {
  const isClickOutside = event.target.classList.contains('edit-modal');

  // Если клик вне модального окна, то закрываем модалку
  if (isClickOutside) {
    emit('close');
  }
};

// Если нажатие клавиши Escape, то закрываем модалку
const onKeyDown = (event) => {
  if (event.key === 'Escape') {
    emit('close');
  }
};
</script>

<template>
	<div ref="modalRef" tabindex="-1" class="modal" @click="onClick" @keydown="onKeyDown">
		<div class="modal__container" :class="`modal__container-${name}`">
			<header class="modal__header">
				<h3 class="modal__heading">{{ heading }}</h3>
				<CloseIconButton :width="26" :height="26" @click="emit('close')" />
			</header>
			<div class="modal__content">
				<slot name="content" />
			</div>
			<div class="modal__footer" v-if="isFooter">
				<slot name="footer" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.modal {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 200;
	display: flex;
	background: rgba(0, 0, 0, .8);

	.modal__container {
		position: relative;
		height: 100%;
		max-height: 800px;
		width: 100%;
		max-width: 800px;
		margin: auto;
		display: flex;
		flex-direction: column;
		border-radius: 8px;
		background: white;

		@media (min-width: 375px) {
			& {
				width: 95%;
			}
		}

		@media (min-height: 375px) {
			& {
				height: 95%;
			}
		}

		@media (min-width: 768px) {
			& {
				width: 80%;
			}
		}

		@media (min-height: 768px) {
			& {
				height: 80%;
			}
		}

		.modal__header {
			border-bottom: 1px solid #d1d5db;
			padding: 1rem 1.4rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.modal__heading {
				font-size: 1.25rem;
				font-weight: 600;
				color: #374151;
			}
		}

		.modal__content {
			width: 100%;
			height: 100%;
			padding: 0.8rem 1.2rem;
			display: flex;
			flex-direction: column;
			overflow: auto;
		}

		.modal__footer {
			padding: 1.0rem 1.4rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
}
</style>
