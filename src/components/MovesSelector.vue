<template>
<p>Show places reachable by knight in:
  <select :value="value" @input="$emit('input', $event.target.value)">
    <option value="one">one movement</option>
    <option value="two">two movements</option>
  </select>
</p>
</template>


<script>
export default {
  name: 'MovesSelector',
  props: {
    value: String
  }
}
</script>


<style lang="scss" scoped>
p{
  color: #000;
  margin: 15px;
}
</style>