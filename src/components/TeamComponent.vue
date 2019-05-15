<template>
    
    <div>
        <h1>Team {{ type }}</h1>

        <ul>
            <li :key="member.id" v-for="(member, index) in team"> {{member.name}} <button @click="removeHero({type, index, member})" >X</button></li>
        </ul>

    </div>

</template>

<script>

//import store from '../store';
import TeamComponent from './TeamComponent';
import { mapState, mapActions } from 'vuex';

export default {

    props: ['type'],

    methods:
    {
        // removeHero(type, index, member)
        // {
        //     this.$store.dispatch('removeHero', {type, index, member});
        // }

        ...mapActions(["removeHero"])
    },

    computed:
    {
        team()
        {
            return this.type === 'A' ? this.$store.state.teamA : this.$store.state.teamB ;
        }
    }

}
</script>

<style>

</style>
