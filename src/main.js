// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import RightPane from './components/RightPane';
import Chip from './components/Chip';
import RoundButton from './components/RoundButton';
import InfoObject from './components/InfoObject';
import ModalSignType from './components/ModalSignType';
import SignType from './components/SignType';
import Ripple from './components/Ripple';

Vue.config.productionTip = false;
Vue.component('right-pane', RightPane);
Vue.component('chip', Chip);
Vue.component('info-object', InfoObject);
Vue.component('round-button', RoundButton);
Vue.component('modal-sign-type', ModalSignType);
Vue.component('sign-type', SignType);
Vue.component('ripple', Ripple);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
