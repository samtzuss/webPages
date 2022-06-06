<template>
  <div>logout {{ xxx }}</div>
</template>

<script>
// import { mapActions, mapState } from '../vuex'
export default {
  props: {
  },
  data() {
    return {
      xxx: 'test'
    }
  },
  // init vue
  created() {
  },
  // DOM
  mounted() {
    console.log(this.$store)
  },
  computed: {
    yyy() {
      return this.xxx ? 'Yes' : 'No'
    }
  },
  methods: {
    f1: function () {}
  }
}
</script>