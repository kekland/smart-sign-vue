<template>
  <div class='chip' :style="{'background-color': bgColor,}">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'chip',
  props: {
    text: String,
    bgColor: String,
  },
};
</script>

<style>
.chip {
  height: 36px;
  color: white;
  display: inline-block;
  border-radius: 18px;
  line-height: 36px;
  padding-left: 8px;
  padding-right: 8px;
}
</style>
