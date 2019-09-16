<template>
  <div class="board">
    <div class="line" :key="line" v-for="line in Array.from('HGFEDCBA')">
      <Cell 
        v-for="position in Array.from('12345678').map(column => `${line}${column}`)" 
        :key="position"
        :piece="selectedCell == position ? 'knight' : ''"
        :color="selectedCell == position ? 'white' : ''"
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
  components: {
    Cell
  },
  props: {
    movements: String
  },
  data() {
    return {
      selectedCell: null,
      highlightedCells: []
    }
  },
  watch: {
    movements() {
      this.selectedCell && this.updateHighlighted()
    } 
  },
  methods: {
    selectCell(position) {
      this.selectedCell = position
      this.updateHighlighted()
    },
    updateHighlighted() {
      this.highlightedCells = []
      this.axios.post(
        `/api/knight-${this.movements}-move${this.movements != 'one' ? 's' : ''}`,
        {position : this.selectedCell}
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
  background-color: #95704d;
  height: 70vh;
  max-height: 80vw;
  width: 80vw;
  max-width: 70vh;
  margin: 0 auto;
  padding: 0;
  border: 15px solid #753;
  border-radius: 5px;
  box-sizing: border-box;

  .line {
    width: 100%;
    height: calc(100% / 8);
    margin: 0;
    padding: 0;
    display: flex;

    &:nth-child(2n) .cell:nth-child(2n),
    &:nth-child(2n+1) .cell:nth-child(2n+1) {
      background-color: #fbefc4;
    }
  }
}
</style>
