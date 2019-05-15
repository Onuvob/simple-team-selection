export default
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