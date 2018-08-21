<template>
  <div class='ripple'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ripple',
};
</script>

<style>
.ripple {
  background-position: center;
  transition: background 0.2s;
  border-radius: 4px;
}
.ripple:hover {
  background: #00000010 radial-gradient(circle, transparent 1%, #00000010 1%) center/15000%;
}
.ripple:active {
  background-color: #00000010;
  background-size: 100%;
  transition: background 0s;
}
</style>
