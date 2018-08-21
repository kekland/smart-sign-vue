<template>
  <div id='info-block' :style="{'opacity': (data.visible)? '1' : '0', 'visibility': (data.visible)? 'visible' : 'hidden'}">
    <h3>Sign</h3>
    <hr>
    <info-object title='Address' :text=data.address imgHref='https://image.flaticon.com/icons/svg/149/149984.svg'></info-object>
    <hr>
    <info-object title='Type' :text=data.description imgHref='https://image.flaticon.com/icons/svg/76/76977.svg'></info-object>
    <hr>
    <round-button label='Change sign type' bgColor='#EF5350' :onPressed="openModal"></round-button>
  </div>
</template>

<script>
export default {
  name: 'right-pane',
  props: {
    data: Object,
    onOpenModal: Function,
  },
  methods: {
    openModal() {
      console.log('opening modal');
      this.onOpenModal();
    },
  },
};
</script>

<style>
#info-block {
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fff;

  padding: 16px;
  position: absolute;
  right: 16px;
  bottom: 16px;
}

#info-block:hover {
  box-shadow: 0 0px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
