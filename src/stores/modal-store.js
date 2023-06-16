import { useTableStore } from '@/stores/table-store.js';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modalStore', () => {
    const tableStore = useTableStore();

    // Состояние модалок
    const modalState = ref([
      { name: 'tableEntryEditModal', isOpen: false, data: {} },
    ]);

    // Состояние количества открытых модалок
    const countOpenModals = ref(0);

    // Данные для рендеринга модалки редактирования
    const editModalData = {
      tableEntryEditModal: {
        heading: 'Table entry edit',
        firstName: 'Имя',
        lastName: 'Фамилия',
        experience: 'Стаж',
        age: 'Возраст',
        address: 'Адрес',
      },
    };

    const setModalState = ({ name, isOpen, data }) => {
      modalState.value = modalState.value.map(modal => {
        if (name === modal.name) {
          return { name, isOpen, data };
        }
        return modal;
      });

      // При закрытии модалки и наличии данных делаем запись данных в таблицу
      if (isOpen === false && Object.keys(data).length) {
        switch (name) {
          case 'tableEntryEditModal':
            tableStore.setTableData(data);
        }
      }

      // Если открытие модалки, то повышаем счетчик, иначе понижаем
      isOpen ? ++countOpenModals.value : --countOpenModals.value;
    };

    return {
      editModalData,
      modalState,
      countOpenModals,
      setModalState,
    };
  },
);
