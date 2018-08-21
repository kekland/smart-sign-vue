<template>
  <div id='container'>
    <div id='img' :style="{'background-image': 'url(' + imgHref + ')'}"></div>
    <div id='textContainer'>
      <span id='title'>{{title}}</span>
      <span id='text'>{{text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info-object',
  props: {
    imgHref: String,
    text: String,
    title: String,
  },
};
</script>

<style>
#container {
  display: flex;
  align-content: flex-start;
  flex-direction: row;
  align-items: center;
}
#textContainer {
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  flex-wrap:wrap;
  flex: 1;
}
#img {
  width: 36px;
  height: 36px;
  flex-basis: 36px;
  margin-right: 8px;
  display: inline-block;
  border-radius: 50%;
}
#title {
  display: inline-block;
  font-size: 12px;
  color: #00000054;
}
#text {
  display: inline-block;
  font-size: 16px;
}
</style>
