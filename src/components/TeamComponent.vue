<template>
    
    <div>
        <h1>Team {{ type }}</h1>

        <ul>
            <li :key="member.id" v-for="member in team"> {{member.name}} </li>
        </ul>

    </div>

</template>

<script>

import store from '../store';

export default {

    props: ['type'],

    computed:
    {
        team()
        {
            return this.type === 'A' ? store.state.teamA : store.state.teamB ;
        }
    }

}
</script>

<style>

</style>
