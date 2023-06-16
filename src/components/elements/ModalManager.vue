<script setup>
import modals from './modals';
import { useModalStore } from '@/stores/modal-store.js';

const modalStore = useModalStore();
const { modalState } = modalStore;

const onClose = (name, data = {}) => {
  modalStore.setModalState({ name, isOpen: false, data });

  // Возвращаем скролл основного окна
  document.body.style.overflow = "auto";
};

</script>

<template>
	<component
		v-for="(modal, index) in modalState"
		key="key"
		:is="modals[modal.name]"
		:index="index"
		:name="modal.name"
		@close="onClose"
	/>
</template>

<style lang="scss" scoped>

</style>
