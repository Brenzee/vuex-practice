import Vuex from "vuex"
import Vue from "vue"
import todos from "./modules/todos"

//Load Vuex
Vue.use(Vuex)

//Creat store
export default new Vuex.Store({
  modules: {
    todos,
  },
})
