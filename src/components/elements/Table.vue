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
	<div class="table-container">
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
			<tr
				tabindex="0"
				title="Редактировать"
				v-for="item in data"
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
			</tbody>
		</table>
	</div>
</template>

<style lang="scss" scoped>
.table-container {
	margin: 0 auto;
	overflow: auto;
}

.table {
	position: relative;
	border-right: 1px solid #d1d5db;
	border-bottom: 1px solid #d1d5db;
	border-left: 1px solid #d1d5db;
	border-collapse: separate;
	border-spacing: 0;
	margin: 8px;

	thead {
		position: sticky;
		top: 0;
		background-color: #f3f4f6;
	}

	tbody {
		tr {
			cursor: pointer;
			transition: all 0.05s;

			&:hover, &:active, &:focus-visible {
				outline-offset: -2px;
			}

			&:hover {
				outline: 2px solid #3b82f6;
			}

			&:active {
				outline: 2px solid #1d4ed8;
			}

			&:focus-visible {
				outline: 2px solid #2563eb;
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
			border-top: 1px solid #d1d5db;
			border-bottom: 1px solid #d1d5db;
			color: #374151;
			font-weight: 500;
		}
	}
}
</style>
