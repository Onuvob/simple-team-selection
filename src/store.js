import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import data from './api/data'

export default new Vuex.Store({
    
    //Data
    state: {
  
        students: [],
        teamA: [],
        teamB: []

    },

    //Computed Properties
    getters:{},

    //Used for changing the state or data, we never change state via action, we only do it using mutation
    mutations: {

        setStudents(state)
        {
            state.students = data.getStudents();
        },


        pushMemeberToTeam(state, data)
        {
            if(data.type === 'A' )
                state.teamA.push(state.students[data.index]);

            else
                state.teamB.push(state.students[data.index]);

        }

    },

    //Methods
    actions: {

        getStudents(context)
        {
            context.commit('setStudents');
        },


        addTeamMember(context, data)
        {

            context.commit('pushMemeberToTeam', data);

        }

    }
});
