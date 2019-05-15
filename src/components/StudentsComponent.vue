<template>

    <div>

        <div>

            <h1>Heros = Total is {{ totalHeros }}</h1>

            <ul>
                <li :key="student.id" v-for="(student, index) in students">
                    {{ student.name }} | 
                    <i>{{student.games.length}} games he playes</i>
                    <button :disabled="student.selected" @click="addTeamMember({ type:'A', index})">Team A</button>
                    <button :disabled="student.selected" @click="addTeamMember({ type:'B', index})">Team B</button>
                </li>
            </ul>
            
        </div>

        <hr>

        <div>
            
            <TeamComponent type="A"></TeamComponent>
            <TeamComponent type="B"></TeamComponent>

        </div>

    </div>
  
</template>

<script>

//import store from '../store';
import TeamComponent from './TeamComponent';
import { mapState, mapActions, mapGetters } from 'vuex';

export default
{
    components:
    {
        TeamComponent
    },

    computed:
    {
        // students()
        // {
        //     return this.$store.state.students
        // }
        ...mapState(["students"]),
        ...mapGetters(["totalHeros"])
    },

    methods:
    {
        // addTeamMember(type, index)
        // {
        //     this.$store.dispatch('addTeamMember', {type, index});
        // }

        ...mapActions(["addTeamMember"])

    },

    created()
    {
        this.$store.dispatch('getStudents')
    }

}
</script>

<style>

</style>
