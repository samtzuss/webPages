<template>
  <table style="display:inline-block;">
    <thead>
      <tr>
        <th>{{ t('name') }}</th><th>{{ t('rate') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>{{ t('name_maya') }}</td><td><input type="text" v-model="salaryRate[0]" /></td></tr>
      <tr><td>{{ t('name_may') }}</td><td><input type="text" v-model="salaryRate[1]" /></td></tr>
      <tr><td>{{ t('name_tim') }}</td><td><input type="text" v-model="salaryRate[2]" /></td></tr>
      <tr><td>{{ t('name_sam') }}</td><td><input type="text" v-model="salaryRate[3]" /></td></tr>
      <tr><td></td><td><input type="button" :value="$t('submit')" @click="salaryRateSet" /></td></tr>
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
  },
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
      alert(this.$t('done'))
      /*
      if ((this.salaryRate.reduce((partial_sum, a) => partial_sum + a, 0)) != 100) {
        alert('薪轉比例總額錯誤')
      } else {
        alert('薪轉比例設定完成')
      }
      */
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