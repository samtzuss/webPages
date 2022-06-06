<template>
  <table style="display:inline-block;">
    <thead>
      <tr>
        <th v-for="(key, index) in columns" :key="index" :class="{ active: sortKey == key }" @click="sortBy(key)">
          {{ key }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"> </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, heroesIndex) in filteredHeroes" :key="heroesIndex">
        <td v-for="(key, columnIndex) in columns" :key="columnIndex">
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  props: {
    heroes: {
      type: Array,
      default: () => [
        { Name: 'Chuck Norris', Bank: '第一銀行', Account: '12345678****9874', Active:'2021-11-25' },
        { Name: '梅平強', Bank: '越南銀行', Account: '54126528****3178', Active:'2021-10-06' },
        { Name: '邱宏德', Bank: '胡志明銀行', Account: '85274196****9514', Active:'2021-11-25' },
        { Name: 'Sam', Bank: '玉山銀行', Account: '96395714****7561', Active:'2022-01-07' },
        { Name: 'Maya', Bank: '湄公河銀行', Account: '35741597****5317', Active:'2021-06-30' }
      ]
    },
    columns: {
      type: Array,
      default: () => ['Name', 'Bank', 'Account', 'Active']
    },
    filterKey: {
      type: String,
      default: ''
    }
  },
  data: function () {
    const sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredHeroes: function () {
      const sortKey = this.sortKey
      const filterKey = this.filterKey && this.filterKey.toLowerCase()
      const order = this.sortOrders[sortKey] || 1
      let heroes = this.heroes
      if (filterKey) {
        heroes = heroes.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        heroes = heroes.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return heroes
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
}
</script>
<style scoped>
table {
  margin: 0px;
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}
th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
td {
  background-color: #f9f9f9;
}
th,
td {
  padding: 10px 20px;
}
th.active {
  color: #fff;
}
th.active .arrow {
  opacity: 1;
}
.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}
.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}
.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>