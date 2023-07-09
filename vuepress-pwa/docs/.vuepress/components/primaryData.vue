<template>
  <table style="display:inline-block;">
    <tbody>
      <tr>
        <td>
          {{ $t('name') }}<br />
          <input type="text" :placeholder="$t('input_name')" v-model="name" />
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('hand_phone') }}<br />
          <input type="text" :placeholder="$t('phone_no')" v-model="phoneNumber" />
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('account_no') }}<br /><br />
          <input type="text" :placeholder="$t('input_account')" v-model="account" />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" :value="$t('modify')"  @click="modify" />
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
    this.name = this.$t('name_maya')
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  props: {
    heroes: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
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
      name: '',
      phoneNumber: '+886928951753',
      account: '1234567895739874',
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
    modify: function() {
      let updateTime = new Date()

      const url = 'https://api.telegram.org/bot5042646314:AAEYedlfShx3lj_vO3pr2ydQEn6kbFaNlBQ/sendMessage'
      const users = {
        may: { name: this.$t('name_may'), tgId: '6054863900'},
        timmy: { name: this.$t('name_timmy'), tgId: '5062449675' },
        tim: { name: this.$t('name_tim'), tgId: '1350630761' },
        sam: { name: this.$t('name_sam'), tgId: '1330056967' },
        fu: { name: this.$t('name_fu'), tgId: '5017176344' },
        maya: { name: this.$t('name_maya'), tgId: '5082311706' }
      }
      fetch(url, {
        body: JSON.stringify({
          chat_id: '6054863900',
          text: $t('fintech_notice_update') + ": " + $t('name_sam') + $t('has_already') + updateTime.toLocaleString() + " " + $t('updated'),
          parse_mode: 'HTML',
          disable_web_page_preview: true
        }),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })

      fetch(url, {
        body: JSON.stringify({
          chat_id: '1350630761',
          text: $t('fintech_notice_update') + ": " + $t('name_sam') + $t('has_already') + updateTime.toLocaleString() + " " + $t('updated'),
          parse_mode: 'HTML',
          disable_web_page_preview: true
        }),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })

      fetch(url, {
        body: JSON.stringify({
          chat_id: '1330056967',
          text: $t('fintech_notice_update') + ": " + $t('name_sam') + $t('has_already') + updateTime.toLocaleString() + " " + $t('updated'),
          parse_mode: 'HTML',
          disable_web_page_preview: true
        }),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })

      alert($t('done'))
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