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
        map.controls.add(
          new ymaps.control.ZoomControl({
            options: { position: { left: 10, top: 90 } },
          }),
        );
        this.$data.map = map;
      });
    },

    createPlacemark(lat, lng, icon) {
      const place = new ymaps.Placemark(
        [lat, lng],
        {
          balloonContent: '<div>Facebook</div>',
        },
        {
          iconLayout: 'default#image',
          iconImageHref: icon,
          iconImageSize: [50, 50],
        },
      );
      place.events.add('click', this.up);
      return place;
    },

    up() {
      const map = this.$data.map;
      const updates = {};
      updates['sign/sign1/icon'] =
        'https://image.flaticon.com/icons/svg/515/515018.svg';
      database.ref().update(updates);
    },

    saveData(snapshot) {
      const value = snapshot.val();
      Object.entries(value).map(([key, v]) => {
        console.log(v);
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
