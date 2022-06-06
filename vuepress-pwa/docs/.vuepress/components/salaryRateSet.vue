<template>
  <table style="display:inline-block;">
    <thead>
      <tr>
        <th>姓名</th><th>比例</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Maya Chu</td><td><input type="text" v-model="salaryRate[0]" /></td></tr>
      <tr><td>梅平強</td><td><input type="text" v-model="salaryRate[1]" /></td></tr>
      <tr><td>邱宏德</td><td><input type="text" v-model="salaryRate[2]" /></td></tr>
      <tr><td>Sam</td><td><input type="text" v-model="salaryRate[3]" /></td></tr>
      <tr><td></td><td><input type="button" value="比例設定"  @click="salaryRateSet" /></td></tr>
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
  },
  data: function () {
    return {
      salaryRate: [ 40, 30, 10, 20]
    }
  },
  computed: {
  },
  methods: {
    salaryRateSet: () => {
      alert('薪轉比例設定完成')
      /*
      if ((this.salaryRate.reduce((partial_sum, a) => partial_sum + a, 0)) != 100) {
        alert('薪轉比例總額錯誤')
      } else {
        alert('薪轉比例設定完成')
      }
      */
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