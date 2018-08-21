<template>
  <div class='col-md-3' id='info-block'>
    <h3>Info</h3>
    <hr>
    <info-object title='Address' :text=data.address imgHref='https://image.flaticon.com/icons/svg/149/149984.svg'></info-object>
    <hr>
    <info-object title='Type' style='margin-bottom:4px;' :text=data.description imgHref='https://image.flaticon.com/icons/svg/76/76977.svg'></info-object>
    <round-button label='Change type' bgColor='#EF5350'></round-button>
  </div>
</template>

<script>
export default {
  name: 'right-pane',
  props: {
    data: {
      type: Object,
      default() {
        return {
          address: 'None',
          description: 'None',
        };
      },
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
}

#info-block:hover {
  box-shadow: 0 0px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
