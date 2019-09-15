<template>
  <div id="app">
    <Board/>
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'app',
  components: {
    Board
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}
body {
  background: url('./assets/bg.png');
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15vh;
}
</style>
