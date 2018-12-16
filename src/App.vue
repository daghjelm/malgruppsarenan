<template>
  <div id="app">
    <Questions msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Questions from './components/Questions.vue'

export default {
  name: 'app',
  components: {
    Questions
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
