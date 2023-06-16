<script setup>
import Table from '@/components/elements/Table.vue';
import { storeToRefs } from 'pinia';
import { useTableStore } from '@/stores/table-store.js';
import { useModalStore } from '@/stores/modal-store';

const tableStore = useTableStore();
const modalStore = useModalStore();
const { tableData } = storeToRefs(tableStore);

// По клику на строку таблицы записываем в стор состояние модалки редактирования записей таблицы
const onEdit = id => {
  const data = tableData.value.find(item => item.id === id);
  modalStore.setModalState({name: 'tableEntryEditModal', isOpen: true, data });

  // Скрываем скролл основного окна
  document.body.style.overflow = "hidden";
};

</script>

<template>
	<Table :data="tableData" @edit="onEdit" />
</template>

<style lang="scss" scoped>

</style>
