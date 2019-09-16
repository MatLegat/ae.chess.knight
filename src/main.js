import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChessBishop, faChessKnight, faChessKing, faChessRook, faChessQueen, faChessPawn }
  from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'

library.add(faChessBishop, faChessKnight, faChessKing, faChessRook, faChessQueen, faChessPawn)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
