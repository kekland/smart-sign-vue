<template>
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-md-9' id='map-block'>
                    <div id='map' style='width: 100%; height: 100vh'></div>
                </div>
                <div class='col-md-3' id='info-block'>
                    <h3>Info</h3>
                    <hr>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
#map-block {
  padding-left: 0;
  padding-right: 0;
}

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
