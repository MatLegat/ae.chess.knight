<template>
  <div :class="['cell', {selected, highlighted}]">
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    id: String,
    selected: Boolean,
    highlighted: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cell {
  margin: 0;
  padding: 0;
  width: calc(100% / 8);
  height: 100%;
  display: inline-block;
  box-sizing: border-box;
  transition: box-shadow 150ms;

  &:hover {
    box-shadow: inset 0 0 4px 5px rgba(0,0,0,.75);
    cursor: pointer;
  }

  &.selected {
    background-color: blue !important;
  }

  &.highlighted {
    background-color: red !important;
  }
}
</style>
