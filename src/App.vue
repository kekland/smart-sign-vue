<template>
  <div class='container-fluid'>
    <div class='row'>
      <div id='map-block'>
        <div id='map' style='width: 100vw; height: 100vh'></div>
      </div>
      <right-pane :data=paneData :onOpenModal="openSignTypeModal"></right-pane>
    </div>
    <modal-sign-type :signs=signTypes :open=modalOpen
                     :onClose="function() {modalOpen=false}"
                     :onChange="onSignTypeModalChange"></modal-sign-type>
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
    signTypes: {},
    paneData: {},
    modalOpen: false,
  }),
  created() {
    this.createMap();
  },
  methods: {
    openSignTypeModal() {
      console.log('hi!');
      this.$data.modalOpen = true;
    },

    onSignTypeModalChange(type) {
      database.ref(`signs/${this.$data.paneData.databaseKey}/type`).set(type);
    },

    createMap() {
      database.ref('sign-types').once('value').then((snapshot) => {
        this.$data.signTypes = snapshot.val();
        return database.ref('signs').on('value', this.loadedData);
      });

      ymaps.ready(() => {
        const map = new window.ymaps.Map('map', {
          center: [43.200098, 76.904913],
          zoom: 17,
          controls: [],
        });
        this.$data.map = map;
      });
    },

    async createPlacemark(key, data) {
      const filledData = data;
      filledData.databaseKey = key;
      filledData.description = this.$data.signTypes[filledData.type].description;
      filledData.imageHref = this.$data.signTypes[filledData.type].image;

      const street = await ymaps.geocode([filledData.lat, filledData.lng], { kind: 'street' });
      filledData.address = street.geoObjects.get(0).getAddressLine();

      const placemark = new ymaps.Placemark(
        [data.lat, data.lng],
        {
          balloonContent: `<div>${filledData.description} sign at ${filledData.address}</div>`,
        },
        {
          iconLayout: 'default#image',
          iconImageHref: filledData.imageHref,
          iconImageSize: [50, 50],
        },
      );

      placemark.events.add('click', () => this.onPlacemarkPress(filledData));
      placemark.events.add('balloonclose', () => this.onPlacemarkClose());

      this.$data.map.geoObjects.add(placemark);
    },
    onPlacemarkPress(data) {
      this.$data.paneData = data;
    },
    onPlacemarkClose() {
      this.$data.paneData = {};
    },

    loadedData(snapshot) {
      this.$data.map.geoObjects.removeAll();
      const value = snapshot.val();
      Object.entries(value).forEach(([k, v]) => this.createPlacemark(k, v));
    },
  },
};
</script>

<style>
#map-block {
  width: 100vw;
  height: 100vh;
}
</style>
