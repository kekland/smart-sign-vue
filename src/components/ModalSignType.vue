<template>
    <div id="modal" class="modal"
        :style="{'opacity': (open)? '1' : '0', 'visibility': (open)? 'visible' : 'hidden'}"
        v-on:click.self="close()">
      <div class="modal-content">
        <div id="topRow">
          <div id='searchBar'>
            <input type="text" id='search' placeholder='Search for sign'>
          </div>
          <span id="close" v-on:click="close()">&times;</span>
        </div>
        <div id='signs'>
          <sign-type v-for="(sign, key) in signs"
                     :key=key :data=sign v-on:click.native="change(key)"></sign-type>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'modal-sign-type',
  props: {
    signs: Object,
    displayedSigns: Array,
    open: Boolean,
    onClose: Function,
    onChange: Function,
  },
  methods: {
    close() {
      this.$props.onClose();
    },
    change(key) {
      this.$props.onClose();
      this.$props.onChange(key);
    },
  },
};
</script>

<style>
#searchBar {
  flex: 1;
  border-radius: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
#search {
  border: none;
  width: 100%;
  height: 24px;
}
#search:focus {
  outline: none;
}
.modal {
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

#signs {
  display: flex;
  flex-wrap:wrap;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  position: relative;
  z-index: 2;
  border-radius: 16px;
  width: 80vw; /* Could be more or less, depending on screen size */
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12), 0 10px 36px rgba(0, 0, 0, 0.24);
}

#topRow {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

/* The Close Button */
#close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  margin-left: 16px;
}

#close:hover,
#close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>
