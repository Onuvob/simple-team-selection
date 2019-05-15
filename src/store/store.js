import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//import data from '../api/data';
import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default new Vuex.Store({
    
    //Data
    state: state,

    //Computed Properties
    getters: getters,

    //Used for changing the state or data, we never change state via action, we only do it using mutation
    mutations: mutations,

    //Methods
    actions: actions
});
