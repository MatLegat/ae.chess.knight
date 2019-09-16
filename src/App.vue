<template>
  <div id="app">
    <Board :movements="movements"/>
    <p>Show places reachable by knight in:
      <select v-model="movements">
        <option value="one">one movement</option>
        <option value="two">two movements</option>
      </select>
    </p>
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'app',
  components: {
    Board
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
  color: #000;
  margin-top: 15vh;
}
</style>
