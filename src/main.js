// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import RightPane from './components/RightPane';
import Chip from './components/Chip';
import RoundButton from './components/RoundButton';
import InfoObject from './components/InfoObject';

Vue.config.productionTip = false;
Vue.component('right-pane', RightPane);
Vue.component('chip', Chip);
Vue.component('info-object', InfoObject);
Vue.component('round-button', RoundButton);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
