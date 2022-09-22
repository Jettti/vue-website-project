import Vue from 'vue'
import App from './App.vue'
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import './assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
