<template>
  <CCardBody>
    <CDataTable
        :items="dateFilteredItems"
        :fields="fields"
        sorter
        column-filter
        hover
    >
      <template #registeredTimestamp-filter="{item}">
        From:
        <label>
          <input
              type="date"
              :value="new Date(startDate).toISOString().substr(0, 10)"
              @change="setDateFilter"
              class="mr-2"
          />
        </label>
        To:
        <label>
          <input
              type="date"
              :value="new Date(endDate).toISOString().substr(0, 10)"
              @change="e => setDateFilter(e, 'end')"
          />
        </label>
      </template>
      <template #registeredTimestamp="{item}">
        <td>
          {{ item.registeredDate }}
        </td>
      </template>
    </CDataTable>
  </CCardBody>
</template>

<script>

const items = [
  {
    username: 'Samppa Nori', registered: { date: '2012/01/01', timestamp: 1325376000000 }, role: 'Member', status: 'Active',
  },
  {
    username: 'Estavan Lykos', registered: { date: '2012/02/01', timestamp: 1328054400000 }, role: 'Staff', status: 'Banned',
  },
  {
    username: 'Chetan Mohamed', registered: { date: '2012/02/01', timestamp: 1328054400000 }, role: 'Admin', status: 'Inactive',
  },
  {
    username: 'Derick Maximinus', registered: { date: '2012/03/01', timestamp: 1330560000000 }, role: 'Member', status: 'Pending',
  },
  {
    username: 'Friderik Dávid', registered: { date: '2012/01/21', timestamp: 1327104000000 }, role: 'Staff', status: 'Active',
  },
];

const fields = [
  'username',
  { key: 'registeredTimestamp', label: 'Registered' },
  'role',
  'status',
];

export default {
  data() {
    return {
      fields,
      startDate: 1325376000000,
      endDate: 1330560000000,
    };
  },
  computed: {
    computedItems() {
      return items.map((item) => ({
        ...item,
        registeredTimestamp: item.registered.timestamp,
        registeredDate: item.registered.date,
      }));
    },
    dateFilteredItems() {
      return this.computedItems.filter((item) => {
        const date = item.registeredTimestamp;
        return date >= this.startDate && date <= this.endDate;
      });
    },
  },
  methods: {
    setDateFilter(e, end) {
      if (end) {
        this.endDate = new Date(e.target.value).getTime();
      } else {
        this.startDate = new Date(e.target.value).getTime();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
