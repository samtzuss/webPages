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
          {{ $t('name_maya') }}: 35741597****5317<br /><br />
          <input type="text" :placeholder="$t('enter_amount')" v-model="tx_maya" />
        </td>
      </tr>
      <tr>
        <td>
          {{ $t('keep_sec') }}<br /><br />
          <input type="text" :placeholder="$t('seconds')" v-model="tx_time" />
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
  data() {
    return {
      balance: 9836,
      tx_may: '',
      tx_timmy: '',
      tx_tim: '',
      tx_sam: '',
      tx_fu: '',
      tx_maya: '',
      tx_time: ''
    }
  },
  mounted() {
    this.$i18n.locale = this.$lang;
  },
  computed: {
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
        alert(this.$t('canot_tx'))
        return false
      }
      // 沒有輸入資料, 不執行
      if (tg_notice.length <= 0) {
        tot_amt = 0
        tg_notice = []
        return true
      }

      // 預約轉帳秒數
      const sec = this.tx_time === '' || this.tx_time === '0' ? 0: parseInt(this.tx_time) * 1000
      setTimeout(() => {
        // May
        fetch(url, {
          body: JSON.stringify({
            chat_id: '5099912694',
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
        alert(this.$t('complete_tx'))
        this.balance = balance_keep
        tot_amt = 0
        tg_notice = []
      }, sec)

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