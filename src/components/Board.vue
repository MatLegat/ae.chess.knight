<template>
  <div class="board">
    <div class="line" :key="line" v-for="line in Array.from('HGFEDCBA')">
      <Cell 
        v-for="position in Array.from('12345678').map(column => line + column)" 
        :key="position"
        :piece="selectedCell == position ? 'knight' : null"
        :color="selectedCell == position ? 'white' : null"
        :highlighted="highlightedCells.includes(position)"
        @select-cell="selectCell(position)"
      />
    </div>
  </div>
</template>

<script>
import Cell from './Cell.vue'
export default {
  name: 'Board',
  props: {
    movements: String
  },
  data() {
    return {
      selectedCell: null,
      highlightedCells: []
    }
  },
  components: {
    Cell
  },
  watch: {
    movements() {
      this.selectCell(this.selectedCell)
    } 
  },
  methods: {
    selectCell(position) {
      this.selectedCell = position
      this.highlightedCells = []
      this.axios.post(
        `/api/knight-${this.movements}-move${this.movements != 'one' ? 's' : ''}`,
        {position}
      ).then(response => {
        if (response.status == 200 && response.data) {
          this.highlightedCells.push(...response.data)
        }  
      })
    }
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
