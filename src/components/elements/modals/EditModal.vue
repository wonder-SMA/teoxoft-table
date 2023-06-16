<script setup>
import { ref } from 'vue';
import Button from '@/components/elements/ui/Button.vue';
import Input from '@/components/elements/ui/Input.vue';
import Form from '@/components/layouts/Form.vue';
import Modal from '@/components/layouts/Modal.vue';
import { useModalStore } from '@/stores/modal-store.js';

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(['close']);

const modalStore = useModalStore();
const { editModalData, modalState } = modalStore;

const data = ref({ ...modalState[props.index].data });
const formRef = ref(null);

const onSubmit = () => {
  const isValid = formRef.value.$el.checkValidity();

  if (isValid) {
    emit('close', props.name, data);
  }
};
</script>

<template>
	<Modal
		v-if="modalState[index].isOpen"
		class="edit-modal"
		name="edit-modal"
		:heading="editModalData[name].heading"
		isFooter
		@close="emit('close', name)"
	>
		<template #content>
			<Form ref="formRef">
				<template v-for="(_, key, idx) in modalState[index].data">
					<Input
						v-if="idx !== 0"
						:key="key"
						:id="key"
						:name="key"
						:type="['tel', 'email', 'password'].includes(key) ? key : 'text'"
						:heading="editModalData[name][key]"
						v-model="data[key]"
					/>
				</template>
			</Form>
		</template>
		<template #footer>
			<Button
				id="al"
				aria-label="Применить изменения"
				@click="onSubmit"
			>
				Применить
			</Button>
		</template>
	</Modal>
</template>

<style lang="scss" scoped>
.form {
	width: 100%;
	height: 100%;
	padding: 0.6rem;
	gap: 1.2rem;
	display: flex;
	flex-direction: column;
}
</style>
