import data from '../api/data';


export default
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

}