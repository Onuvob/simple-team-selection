<template>

    <div>

        <div>

            <h1>Students</h1>

            <ul>
                <li :key="student.id" v-for="(student, index) in students">
                    {{ student.name }} | 
                    <i>{{student.games.length}} games he playes</i>
                    <button @click="addTeamMember('A', index)">Team A</button>
                    <button @click="addTeamMember('B', index)">Team B</button>
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

import store from '../store';
import TeamComponent from './TeamComponent';

export default
{
    components:
    {
        TeamComponent
    },

    computed:
    {
        students()
        {
            return store.state.students
        }
    },

    methods:
    {
        addTeamMember(type, index)
        {
            store.dispatch('addTeamMember', {type, index});
        }
    },

    created()
    {
        store.dispatch('getStudents')
    }

}
</script>

<style>

</style>
