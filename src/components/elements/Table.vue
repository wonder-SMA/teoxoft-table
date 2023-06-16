<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: false,
    default: [],
  },
});
const emit = defineEmits(['edit']);

// Если строка в фокусе, то по Enter открываем модалку редактирования
const onKeyDown = (event, id) => {
  if (event.key === 'Enter') {
    emit('edit', id);
  }
};
</script>

<template>
	<table class="table">
		<thead>
		<tr>
			<th>
				Имя
			</th>
			<th>
				Фамилия
			</th>
			<th>
				Стаж
			</th>
			<th>
				Возраст
			</th>
			<th>
				Адрес
			</th>
		</tr>
		</thead>
		<tbody>
		<template v-for="item in data">
			<tr
				v-if="Object.values(item).join('').length > 1"
				tabindex="0"
				title="Редактировать"
				:key="item.id"
				@click="emit('edit', item.id)"
				@keydown="onKeyDown($event, item.id)"
			>
				<td>{{ item.firstName }}</td>
				<td>{{ item.lastName }}</td>
				<td>{{ item.experience }}</td>
				<td>{{ item.age }}</td>
				<td>{{ item.address }}</td>
			</tr>
		</template>
		</tbody>
	</table>
</template>

<style lang="scss" scoped>
.table {
	position: relative;
	height: 100%;
	margin: 0 auto;
	border-collapse: collapse;

	thead {
		position: sticky;
		top: 0;
		border: 1px solid #d1d5db;
		background-color: #f3f4f6;
	}

	tbody {
		tr {
			border: 1px solid #d1d5db;
			cursor: pointer;
			transition: all 0.05s;

			&:focus-visible, &:active {
				outline: 2px solid #2563eb;;
				outline-offset: -2px;
			}
		}
	}

	tr {
		font-size: 1.125rem;
		text-align: center;
		white-space: nowrap;

		th, td {
			padding: 0.5rem;
		}

		th {
			color: #374151;
			font-weight: 500;
		}
	}
}
</style>
