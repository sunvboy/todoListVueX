export default {
    changeTasks({commit},newTasks){
        //console.log('Actions changeTasks',newTasks);
        commit('CHANGE_TASKS',newTasks);
    },
    handleToogleForm({commit}){
        //console.log('Actions handleToogleForm');
        commit('handle_Toogle_Form');
    },
    handleSearch({commit},strSearch){
        //console.log('Actions handleSearch',strSearch);
        commit('handle_Search',strSearch);
    },
    handleSort({commit},data){
        commit('handle_Sort',data);
    },
    handleDelete({commit,state},ID){
        console.log(ID);
        let newTasks = state.listTask.filter(item => item.id !== ID);
        commit('CHANGE_TASKS',newTasks);

    },
    handleAddNewTask({commit},task){
        commit('handle_Add_New_Task',task);
    },
    handleEdit({commit},taskSelected){
        commit('handle_Edit',taskSelected);
    },
    handleUpdateTasks({commit,state},data){
        let index = state.listTask.findIndex(item => item.id === data.id);
        let listTaskClone = [...state.listTask];
        if(index !== -1){
            listTaskClone.splice(index, 1 , data);
            commit('handle_Toogle_Form');
            commit('CHANGE_TASKS',listTaskClone);

        }
    }
    
}