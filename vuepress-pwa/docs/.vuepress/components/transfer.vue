<template>
  <table style="display:inline-block;">
    <tbody>
      <tr>
        <td>
          {{ $t('available_amt') }}: <span style="font-weight:bold;color:blue;font-size:200%;">{{ balance }}</span>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('name_may') }}: 12345678****9874<br /><br />
          <input type="text" :placeholder="$t('enter_amount')" v-model="tx_may" />
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('name_timmy') }}: 54126528****3178<br /><br />
          <input type="text" :placeholder="$t('enter_amount')" v-model="tx_timmy" />
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('name_tim') }}: 85274196****9514<br /><br />
          <input type="text" :placeholder="$t('enter_amount')" v-model="tx_tim" />
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('name_sam') }}: 96395714****7561<br /><br />
          <input type="text" :placeholder="$t('enter_amount')" v-model="tx_sam" />
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('name_fu') }}: 96395714****7561<br /><br />
          <input type="text" :placeholder="$t('enter_amount')" v-model="tx_fu" />
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('fill_phone') }}<br /><br />
          <input type="text" :placeholder="$t('enter_phone')" v-model="tx_phone" /><br />
          <input type="text" :placeholder="$t('enter_amount')" v-model="tx_maya" />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" :value="$t('Confirm_tx')"  @click="txGo" />
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
  mounted() {
    this.$i18n.locale = this.$lang;
    // console.log(this.$lang)
    // console.log(this.$t('name_sam'))
    // console.log('state', this.$store.state)
  },
  data: function () {
    const sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      balance: 9836,
      tx_may: '',
      tx_timmy: '',
      tx_tim: '',
      tx_sam: '',
      tx_fu: '',
      tx_maya: '',
      tx_phone: '',
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
    txGo: function() {
      const balance_keep = this.balance
      let tg_notice = []
      let tot_amt = 0
      let tx_amt
      const url = 'https://api.telegram.org/bot5042646314:AAEYedlfShx3lj_vO3pr2ydQEn6kbFaNlBQ/sendMessage'
      const users = {
        may: { name: this.$t('name_may'), tgId: '5099912694'},
        timmy: { name: this.$t('name_timmy'), tgId: '5062449675' },
        tim: { name: this.$t('name_tim'), tgId: '1350630761' },
        sam: { name: this.$t('name_sam'), tgId: '1330056967' },
        fu: { name: this.$t('name_fu'), tgId: '5017176344' },
        maya: { name: this.$t('name_maya'), tgId: '5082311706' }
      }
      const phone_chatid = {
        '886958573736': { name: this.$t('name_tim'), tg_id: '1350630761' }, // Tim
        '886926721122': { name: this.$t('name_sam'), tg_id: '1330056967' } // Sam
      }
      // 梅平強
      if (this.tx_may && this.tx_may != '0') {
        tx_amt = parseInt(this.tx_may)
        tot_amt += tx_amt
        this.balance -= tx_amt
        tg_notice.push({ name: users['may'].name, tgId: users['may'].tgId, txAmt: tx_amt })
      }
      // 張天瑞
      if (this.tx_timmy && this.tx_timmy != '0') {
        tx_amt = parseInt(this.tx_timmy)
        tot_amt += tx_amt
        this.balance -= tx_amt
        tg_notice.push({ name: users['timmy'].name, tgId: users['timmy'].tgId, txAmt: tx_amt })
        // send message to whatsapp
        // send to Tim
        fetch('https://aebii.com/api/whatsapp/v1/sendMessage', {
          body: JSON.stringify({
          mobile: '886958573736',
          text: this.$t('dear') + users['timmy'].name + `:\n`  + this.$t('youhave_tx') + `, ` + this.$t('amt') + `: ${tx_amt}\n` + this.$t('gotit')
          }),
          cache: 'no-cache',
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST'
        });
        // send to Sam
        fetch('https://aebii.com/api/whatsapp/v1/sendMessage', {
          body: JSON.stringify({
          mobile: '886926721122',
          text: this.$t('dear') + users['timmy'].name + `:\n`  + this.$t('youhave_tx') + `, ` + this.$t('amt') + `: ${tx_amt}\n` + this.$t('gotit')
          }),
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST'
        });
      }

      // 邱宏德
      if (this.tx_tim && this.tx_tim != '0') {
        tx_amt = parseInt(this.tx_tim)
        tot_amt += tx_amt
        this.balance -= tx_amt
        tg_notice.push({ name: users['tim'].name, tgId: users['tim'].tgId, txAmt: tx_amt })
      }
      // 資適時
      if (this.tx_sam && this.tx_sam != '0') {
        tx_amt = parseInt(this.tx_sam)
        tot_amt += tx_amt
        this.balance -= tx_amt
        tg_notice.push({ name: users['sam'].name, tgId: users['sam'].tgId, txAmt: tx_amt })
      }
      // 傅碧霞
      if (this.tx_fu && this.tx_fu != '0') {
        tx_amt = parseInt(this.tx_fu)
        tot_amt += tx_amt
        this.balance -= tx_amt
        tg_notice.push({ name: users['fu'].name, tgId: users['fu'].tgId, txAmt: tx_amt })
      }
      // 自填手機號碼
      if (this.tx_maya && this.tx_maya != '0' && this.tx_phone && this.tx_phone) {
        tx_amt = parseInt(this.tx_maya)
        tot_amt += tx_amt
        this.balance -= tx_amt
        tg_notice.push({ name: phone_chatid[this.tx_phone].name, tgId: phone_chatid[this.tx_phone].tg_id, txAmt: tx_amt })
      }
      if (this.balance < 0) {
        this.balance = balance_keep
        tot_amt = 0
        tg_notice = []
        alert(this.$t('canot_tx'))
        return false
      }
      if (tg_notice.length > 0) {
        // May
        fetch(url, {
          body: JSON.stringify({
            chat_id: '6054863900',
            text: this.$t('fintech_notice') + ":\n" + this.$t('balance_beforeTX') + `: ${balance_keep}\n` + this.$t('amt_tx') + `: ${tot_amt}\n` + this.$t('balance_afterTX') + `: ${this.balance}`,
            parse_mode: 'HTML',
            disable_web_page_preview: true
          }),
          cache: 'no-cache',
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST'
        })
        // Tim
        fetch(url, {
          body: JSON.stringify({
            chat_id: '1350630761',
            text: this.$t('fintech_notice') + ":\n" + this.$t('balance_beforeTX') + `: ${balance_keep}\n` + this.$t('amt_tx') + `: ${tot_amt}\n` + this.$t('balance_afterTX') + `: ${this.balance}`,
            parse_mode: 'HTML',
            disable_web_page_preview: true
          }),
          cache: 'no-cache',
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST'
        })

        // Sam
        fetch(url, {
          body: JSON.stringify({
            chat_id: '1330056967',
            text: this.$t('fintech_notice') + ":\n" + this.$t('balance_beforeTX') + `: ${balance_keep}\n` + this.$t('amt_tx') + `: ${tot_amt}\n` + this.$t('balance_afterTX') + `: ${this.balance}`,
            parse_mode: 'HTML',
            disable_web_page_preview: true
          }),
          cache: 'no-cache',
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST'
        })
        tg_notice.forEach(item => {
          fetch(url, {
            body: JSON.stringify({
              chat_id: item.tgId,
              text: this.$t('dear') + `${item.name}:\n` + this.$t('youhave_tx') + `, ` + this.$t('amt') + `: ${item.txAmt}\n` + this.$t('gotit'),
              parse_mode: 'HTML',
              disable_web_page_preview: true
            }),
            cache: 'no-cache',
            headers: {
              'content-type': 'application/json'
            },
            method: 'POST'
          })
        })
        tot_amt = 0
        tg_notice = []
        alert(this.$t('complete_tx'))
        return true
      } else {
        this.balance = balance_keep
        tot_amt = 0
        tg_notice = []
      }
      history.back()
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