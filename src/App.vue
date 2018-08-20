<template>
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-md-9' id='map-block'>
                  <div id='map' style='width: 100%; height: 100vh'></div>
                </div>
                <right-pane :type="openedType"></right-pane>
            </div>
        </div>
</template>

<script>
const config = {
  apiKey: 'AIzaSyC4x1PNCbT3g9a2V3pz-m-Y_DBRuqyEQVw',
  authDomain: 'smart-belgi.firebaseapp.com',
  databaseURL: 'https://smart-belgi.firebaseio.com',
  projectId: 'smart-belgi',
  storageBucket: 'smart-belgi.appspot.com',
  messagingSenderId: '676628858623',
};
firebase.initializeApp(config);

const database = firebase.database();

export default {
  name: 'App',
  components: {},
  data: () => ({
    map: {},
    icons: [],
    openedType: () => '',
  }),
  created() {
    this.createMap();
  },
  methods: {
    createMap() {
      database.ref('sign').on('value', this.saveData);

      ymaps.ready(() => {
        const map = new window.ymaps.Map('map', {
          center: [43.200098, 76.904913],
          zoom: 17,
          controls: [],
        });
        this.$data.map = map;
      });
    },

    createPlacemark(lat, lng, icon) {
      const place = new ymaps.Placemark(
        [lat, lng],
        {
          balloonContent: `<div>${lat}, ${lng}</div>`,
        },
        {
          iconLayout: 'default#image',
          iconImageHref: icon,
          iconImageSize: [50, 50],
        },
      );
      place.events.add('click', () => this.up(lat));
      return place;
    },

    up(type) {
      const map = this.$data.map;
      const updates = {};
      this.$data.openedType = type;
      database.ref().update(updates);
    },

    saveData(snapshot) {
      const value = snapshot.val();
      Object.entries(value).map(([key, v]) => {
        this.$data.map.geoObjects.add(
          this.createPlacemark(v.lat, v.lng, v.icon),
        );
      });
    },
  },
};
</script>

<style>
#map-block {
  padding-left: 0;
  padding-right: 0;
}

</style>
