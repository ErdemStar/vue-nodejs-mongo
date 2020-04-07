<template>
  <div class="vue-header">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'vue-header',
  data(){
    return { 
      msg: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
