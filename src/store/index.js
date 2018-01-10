import Vuex from 'vueX'
import Vue from 'vue'
import OrderList from './modules/orderList'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        OrderList
    }
})
