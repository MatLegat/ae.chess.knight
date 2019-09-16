<template>
  <div id="app">
    <Board :movements="movements"/>
    <MovesSelector v-model="movements"/>
  </div>
</template>


<script>
import Board from './components/Board.vue'
import MovesSelector from './components/MovesSelector.vue'

export default {
  name: 'app',
  components: {
    Board,
    MovesSelector
  },
  data() {
    return {
      movements: 'two'
    }
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
  margin-top: 15vh;
}
</style>
