export default {
    CHANGE_TASKS(state, newTasks){
        state.listTask = newTasks;
        //console.log('Mutations CHANGE_TASKS',newTasks);
    },
    handle_Toogle_Form(state){
        //console.log('Mutations handle_Toogle_Form');
        state.isShowform = !state.isShowform
        if(!state.isShowform) state.taskSelected = null;
  
    },
    handle_Search(state,strSearch){
        state.strSearch = strSearch;
    },
    handle_Sort(state,data){
        state.orderTitle = data.orderTitle;
        state.orderDir = data.orderDir;
    },
    handle_Add_New_Task(state,task){
        state.listTask.push(task);
        
    },
    handle_Edit(state,taskSelected){
        state.isShowform = true;  
        state.taskSelected = taskSelected;

    }
    
}