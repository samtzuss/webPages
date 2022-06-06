<template>
  <div>
  <table style="display:inline-block;">
    <tbody>
      <tr>
        <td>
          可轉餘額: <span style="font-weight:bold;color:blue;font-size:200%;">{{ balance }}</span>
        </td>
      </tr>
      <tr>
        <td>
          梅平強: 12345678****9874<br /><br />
          <input type="text" placeholder="請輸入金額" v-model="tx_may" />
        </td>
      </tr>
      <tr>
        <td>
          張天瑞: 54126528****3178<br /><br />
          <input type="text" placeholder="請輸入金額" v-model="tx_timmy" />
        </td>
      </tr>
      <tr>
        <td>
          邱宏德: 85274196****9514<br /><br />
          <input type="text" placeholder="請輸入金額" v-model="tx_tim" />
        </td>
      </tr>
      <tr>
        <td>
          Sam: 96395714****7561<br /><br />
          <input type="text" placeholder="請輸入金額" v-model="tx_sam" />
        </td>
      </tr>
      <tr>
        <td>
          Fu Pi: 96395714****7561<br /><br />
          <input type="text" placeholder="請輸入金額" v-model="tx_fu" />
        </td>
      </tr>
      <tr>
        <td>
          Maya Chu: 35741597****5317<br /><br />
          <input type="text" placeholder="請輸入金額" v-model="tx_maya" />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="確定轉帳"  @click="txGo" />
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>
<script>
import { stores } from "../store/index.js"
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent ({
  setup() {
    console.log('transfer ....')
    const store = storeToRefs(stores());
    console.log('store:')
    console.log(store)
    // const store = stores()
    return {
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
        may: { name: '梅平強', tgId: '5099912694'},
        timmy: { name: '張天瑞', tgId: '5062449675' },
        tim: { name: '邱宏德', tgId: '1350630761' },
        sam: { name: '資適時', tgId: '1330056967' },
        fu: { name: '傅碧霞', tgId: '5017176344' },
        maya: { name: 'Maya', tgId: '5082311706' }
      }
      // 梅平強
      if (this.tx_may && this.tx_may != '0') {
        tx_amt = parseInt(this.tx_may)
        tot_amt += tx_amt
        this.balance -= tx_amt
        tg_notice.push({ name: users['may'].name, tgId: users['may'].tgId, txAmt: tx_amt })
      }
      // 張天瑞
      if (this.timmy && this.timmy != '0') {
        tx_amt = parseInt(this.timmy)
        tot_amt += tx_amt
        this.balance -= tx_amt
        tg_notice.push({ name: users['timmy'].name, tgId: users['timmy'].tgId, txAmt: tx_amt })
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
      // Maya
      if (this.tx_maya && this.tx_maya != '0') {
        tx_amt = parseInt(this.tx_maya)
        tot_amt += tx_amt
        this.balance -= tx_amt
        tg_notice.push({ name: users['maya'].name, tgId: users['maya'].tgId, txAmt: tx_amt })
      }
      if (this.balance < 0) {
        this.balance = balance_keep
        tot_amt = 0
        tg_notice = []
        alert('您轉出金額已超過可轉金額, 無法轉帳')
        return false
      }
      if (tg_notice.length > 0) {
        // May
        fetch(url, {
          body: JSON.stringify({
            chat_id: '5099912694',
            text: `通滙雲轉帳通知:\n轉前餘額: ${balance_keep}\n轉帳金額: ${tot_amt}\n轉後餘額: ${this.balance}`,
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
            text: `通滙雲轉帳通知:\n轉前餘額: ${balance_keep}\n轉帳金額: ${tot_amt}\n轉後餘額: ${this.balance}`,
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
            text: `通滙雲轉帳通知:\n轉前餘額: ${balance_keep}\n轉帳金額: ${tot_amt}\n轉後餘額: ${this.balance}`,
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
              text: `親愛的${item.name}:\n您有一筆入帳來自通滙雲, 金額: ${item.txAmt}\n請查收。`,
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
        alert("轉帳完成")
        return true
      } else {
        this.balance = balance_keep
        tot_amt = 0
        tg_notice = []
      }
      // history.back()
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