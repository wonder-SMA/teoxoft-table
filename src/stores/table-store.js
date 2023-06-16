import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTableStore = defineStore('tableStore', () => {

    const tableData = ref([
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        experience: '5',
        age: '30',
        address: '123 Main St',
      },
      {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        experience: '8',
        age: '42',
        address: '456 Elm St',
      },
      {
        id: '3',
        firstName: 'David',
        lastName: 'Johnson',
        experience: '3',
        age: '25',
        address: '789 Oak St',
      },
      {
        id: '4',
        firstName: 'Sarah',
        lastName: 'Williams',
        experience: '10',
        age: '35',
        address: '321 Pine St',
      },
      {
        id: '5',
        firstName: 'Michael',
        lastName: 'Brown',
        experience: '6',
        age: '28',
        address: '654 Cedar St',
      },
      {
        id: '6',
        firstName: 'Emily',
        lastName: 'Davis',
        experience: '2',
        age: '22',
        address: '987 Maple St',
      },
      {
        id: '7',
        firstName: 'Daniel',
        lastName: 'Miller',
        experience: '4',
        age: '27',
        address: '159 Birch St',
      },
      {
        id: '8',
        firstName: 'Olivia',
        lastName: 'Wilson',
        experience: '7',
        age: '31',
        address: '852 Walnut St',
      },
      {
        id: '9',
        firstName: 'William',
        lastName: 'Taylor',
        experience: '9',
        age: '38',
        address: '753 Spruce St',
      },
      {
        id: '10',
        firstName: 'Ava',
        lastName: 'Anderson',
        experience: '1',
        age: '20',
        address: '369 Pineapple St',
      },
      {
        id: '11',
        firstName: 'James',
        lastName: 'Moore',
        experience: '12',
        age: '45',
        address: '468 Cherry St',
      },
      {
        id: '12',
        firstName: 'Sophia',
        lastName: 'Clark',
        experience: '6',
        age: '29',
        address: '753 Orange St',
      },
      {
        id: '13',
        firstName: 'Benjamin',
        lastName: 'Lewis',
        experience: '3',
        age: '24',
        address: '951 Grape St',
      },
      {
        id: '14',
        firstName: 'Mia',
        lastName: 'Young',
        experience: '11',
        age: '40',
        address: '159 Lemon St',
      },
      {
        id: '15',
        firstName: 'Logan',
        lastName: 'Hall',
        experience: '8',
        age: '34',
        address: '753 Mango St',
      },
      {
        id: '16',
        firstName: 'Charlotte',
        lastName: 'Lee',
        experience: '5',
        age: '26',
        address: '852 Lime St',
      },
      {
        id: '17',
        firstName: 'Jacob',
        lastName: 'Wilson',
        experience: '7',
        age: '31',
        address: '753 Walnut St',
      },
      {
        id: '18',
        firstName: 'Sophia',
        lastName: 'Thomas',
        experience: '4',
        age: '27',
        address: '852 Berry St',
      },
      {
        id: '19',
        firstName: 'Emma',
        lastName: 'Robinson',
        experience: '9',
        age: '38',
        address: '753 Plum St',
      },
      {
        id: '20',
        firstName: 'Ethan',
        lastName: 'Johnson',
        experience: '2',
        age: '22',
        address: '159 Peach St',
      },
    ]);

    const setTableData = data => {
      tableData.value = tableData.value.map(item => {
        if (item.id === data.value.id) {
          return data.value;
        }
        return item;
      });
    };

    return {
      tableData,
      setTableData,
    };
  },
);
