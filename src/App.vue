<script setup>
import { storeToRefs } from 'pinia';
import ModalManager from '@/components/elements/ModalManager.vue';
import TablePage from '@/pages/TablePage.vue';
import { useModalStore } from '@/stores/modal-store.js';

const modalStore = useModalStore();
const { countOpenModals } = storeToRefs(modalStore);
</script>

<template>
	<TablePage />
	<ModalManager v-if="countOpenModals" />
</template>

<style lang="scss">
@import "./styles/global.scss";
</style>
