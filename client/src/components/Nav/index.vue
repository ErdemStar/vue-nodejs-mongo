<template>
  <div id="vue-nav">
    <b-nav tabs align="center">
      <b-nav-item>
        <router-link to="/">Home</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/addtask">Add Task</router-link>
      </b-nav-item>
       <b-nav-item>
        <router-link to="/whatidid">Whatidid</router-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "vue-nav",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#vue-nav {
  margin-bottom: 2%;
}
a {
  color: #42b983;
}
</style>
