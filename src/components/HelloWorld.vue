<template>
  <div class="hello">
      <div class="left">
         <h1>{{ title }}</h1>
      </div>
      <div class="right">
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: "HelloWorld",
  computed: {
    ...mapState([
      'title'
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
