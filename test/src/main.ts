import Vue from 'vue'
import App from './App.vue'
import Item from './Item.vue'

import Layout from "../../src/index"
import "../../box.scss"

Vue.use(Layout);
Vue.component("item", Item);

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
