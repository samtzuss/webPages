<template>
  <table style="display:inline-block;">
    <tbody>
      <tr>
        <td>
          姓名<br />
          <input type="text" placeholder="請輸入姓名" v-model="name" />
        </td>
      </tr>
      <tr>
        <td>
          手機<br />
          <input type="text" placeholder="手機號碼" v-model="phoneNumber" />
        </td>
      </tr>
      <tr>
        <td>
          帳號<br /><br />
          <input type="text" placeholder="請輸入帳號" v-model="account" />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="修改"  @click="modify" />
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
      name: 'Maya Chu',
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
        may: { name: '梅平強', tgId: '5099912694'},
        timmy: { name: '張天瑞', tgId: '5062449675' },
        tim: { name: '邱宏德', tgId: '1350630761' },
        sam: { name: '資適時', tgId: '1330056967' },
        fu: { name: '傅碧霞', tgId: '5017176344' },
        maya: { name: 'Maya', tgId: '5082311706' }
      }
      fetch(url, {
        body: JSON.stringify({
          chat_id: '5099912694',
          text: `通滙雲資料更新通知: 資適時已於${updateTime.toLocaleString()} 修改基本資料完成`,
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
          text: `通滙雲資料更新通知: 資適時已於${updateTime.toLocaleString()} 修改基本資料完成`,
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
          text: `通滙雲資料更新通知: 資適時已於${updateTime.toLocaleString()} 修改基本資料完成`,
          parse_mode: 'HTML',
          disable_web_page_preview: true
        }),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })

      alert('資料修改已存檔完成')
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