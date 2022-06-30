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
import { stores } from "../store/index.js"
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const store = stores()
    const { t, locale } = useI18n();
    return {
      t, locale,
      store
    }
  },
  mounted() {
    this.$i18n.locale = this.$lang;
    this.list_data = [
      { From: this.$t('xrate_usd'), To: this.$t('xrate_twd'), Rate: '1 : 27.5' },
      { From: this.$t('xrate_usd'), To: this.$t('xrate_vnd'), Rate: '1 : 20118.705' },
      { From: this.$t('xrate_twd'), To: this.$t('xrate_vnd'), Rate: '1 : 719.4245' }
    ]
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  props: {
    heroes: {
      type: Array,
      default: () => [
        { From: '美金', To: '台幣', Rate: '1 : 27.5' },
        { From: '美金', To: '越南盾', Rate: '1 : 20118.705' },
        { From: '台幣', To: '越南盾', Rate: '1 : 719.4245' }
      ]
    },
    columns: {
      type: Array,
      default: () => ['From', 'To', 'Rate']
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
      sortOrders: sortOrders,
      list_data: []
    }
  },
  computed: {
    filteredHeroes: function () {
      const sortKey = this.sortKey
      const filterKey = this.filterKey && this.filterKey.toLowerCase()
      const order = this.sortOrders[sortKey] || 1
      let heroes = this.list_data
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
})
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