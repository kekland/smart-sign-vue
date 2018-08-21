<template>
  <div id='sign'>
    <div id='signImage' :style="{'background-image':'url(' + data.image + ')'}"></div>
    <span id='description'>{{data.description}}</span>
  </div>
</template>

<script>
export default {
  name: 'sign-type',
  props: {
    data: Object,
  },
};
</script>

<style>
#sign {
  margin: 8px;
  min-width: 120px;
  max-width: 200px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-overflow:ellipsis;
}
#signImage {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
#description {
  text-align: center;
}
</style>
