import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import data from '../api/data';
import state from './state';

export default new Vuex.Store({
    
    //Data
    state: state,

    //Computed Properties
    getters:
    {
        totalHeros(state, getters)
        {
            return state.students.length;
        }
    },

    //Used for changing the state or data, we never change state via action, we only do it using mutation
    mutations:
    {

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

        },


        enableSelectedState(state, index)
        {

            state.students[index].selected = true;

        },


        disableSelectedState(state, data)
        {

            state.students.forEach( (student) => 
            {
                student.id === data.member.id ? student.selected = false : "";
            })

        },


        removeHeroFromTeam(state, data)
        {

            if( data.type == 'A')
                state.teamA.splice(data.index, 1);
            else
                state.teamB.splice(data.index, 1);

        }

    },

    //Methods
    actions:
    {

        getStudents(context)
        {
            context.commit('setStudents');
        },


        addTeamMember(context, data)
        {

            context.commit('pushMemeberToTeam', data);

            context.commit('enableSelectedState', data.index);

        },

        removeHero(context, data)
        {
            //console.log(data);
            context.commit('disableSelectedState', data);

            context.commit('removeHeroFromTeam', data);

        }

    }
});
