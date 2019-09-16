<template>
  <div 
    :class="['cell', {highlighted}]"
    @click="$emit('select-cell', $event)"
  >
    <font-awesome-icon
      v-if="piece"
      :class="['icon', color]"
      :icon="`chess-${piece}`"
    />
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    piece: String,
    color: String,
    highlighted: Boolean
  }
}
</script>

<style scoped lang="scss">
.cell {
  margin: 0;
  padding: 0;
  width: calc(100% / 8);
  height: 100%;
  display: inline-block;
  box-sizing: border-box;
  transition: box-shadow 150ms;
  position: relative;

  svg.icon {
    width: 100%;
    height: 70%;
    margin-top: 15%;
    display: flex;
    stroke-width: 4%;
    &.black {
      color: #000;
      stroke: #fff;
    }
    &.white {
      color: #fff;
      stroke: #000;
    }
  }

  &:hover {
    box-shadow: inset 0 0 3px 3px rgba(0,0,0,.75);
    @media screen and (min-width: 768px) {
      box-shadow: inset 0 0 4px 5px rgba(0,0,0,.75);
    }
    cursor: pointer;
  }

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 150ms;
    background-color: rgba(0,0,255,.15);
    box-sizing: border-box;
    position: absolute;
    box-shadow: inset 0 0 2px 2px #00f;
    @media screen and (min-width: 768px) {
      box-shadow: inset 0 0 3px 3px #00f;
    }
  }

  &.highlighted::before {
    opacity: 1;
  }
  
  &.highlighted:hover::before {
    box-shadow: inset 0 0 3px 3px #009;
    border: 1px solid #000;
    @media screen and (min-width: 768px) {
      box-shadow: inset 0 0 4px 4px #009;
    }
  }

}
</style>
