<template>
  <table style="display:inline-block;">
    <thead>
      <tr>
        <th v-for="(key, index) in columns" :key="index">
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Maya Chu</td><td><input type="text" v-model="bindAaccounts[0]" /></td></tr>
      <tr><td>梅平強</td><td><input type="text" v-model="bindAaccounts[1]" /></td></tr>
      <tr><td>邱宏德</td><td><input type="text" v-model="bindAaccounts[2]" /></td></tr>
      <tr><td>Sam</td><td><input type="text" v-model="bindAaccounts[3]" /></td></tr>
      <tr><td></td><td><input type="button" value="帳號綁定"  @click="accountBinding" /></td></tr>
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
        { Name: '本人', Rate: '40%' },
        { Name: '梅平強', Rate: '30%' },
        { Name: '邱宏德', Rate: '10%' },
        { Name: 'Sam', Rate: '20%' }
      ]
    },
    columns: {
      type: Array,
      default: () => ['Name', 'Rate']
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
      bindAaccounts: [
        '3574159795175317',
        '1234567885479874',
        '8527419635149514',
        '9639571498357561'
      ],
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
    },
    accountBinding: () => {
      alert('帳號綁定完成')
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