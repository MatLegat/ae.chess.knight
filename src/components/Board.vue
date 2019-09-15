<template>
  <div class="board">
    <template v-for="line in 'HGFEDCBA'">
      <div class="line" :key="line">
      <template v-for="column in '12345678'">
        <Cell :key='line+column' @click="selectCell"/>
      </template>
      </div>
    </template>
  </div>
</template>

<script>
import Cell from './Cell.vue'
export default {
  name: 'Board',
  props: {
    msg: String
  },
  components: {
    Cell
  }
}
</script>

<style scoped lang="scss">
.board {
  background-color: #00F;
  height: 70vh;
  max-height: 80vw;
  width: 80vw;
  max-width: 70vh;
  margin: 0 auto;
  padding: 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border: 15px solid #753;
  border-radius: 5px;
  box-sizing: border-box;

  .line {
    width: 100%;
    height: calc(100% / 8);
    margin: 0;
    padding: 0;
    display: flex;

    .cell {
      background-color: #95704d;
    }

    &:nth-child(2n) .cell:nth-child(2n),
    &:nth-child(2n+1) .cell:nth-child(2n+1) {
      background-color: #fbefc4;
    }
  }
}
</style>
