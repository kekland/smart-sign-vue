<template>
  <div id='btn' :style="{'background-color': bgColor,}" v-on:click="pressed()">
    <ripple id='ripple'>
      <span id='label'>{{label}}</span>
    </ripple>
  </div>
</template>

<script>
export default {
  name: 'round-button',
  props: {
    label: String,
    bgColor: String,
    onPressed: Function,
  },
  methods: {
    pressed() {
      this.onPressed();
    },
  },
};
</script>

<style>
#ripple {
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 18px;
}
#btn {
  height: 36px;
  color: white;
  text-align: center;
  border-radius: 18px;
  line-height: 36px;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

#btn:hover {
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.25), 0 3px 10px rgba(0, 0, 0, 0.22);
}
#label {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
