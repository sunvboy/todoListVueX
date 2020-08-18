<template>
  <!-- FORM : START -->
        <b-col lg="6" cols="12">
          <!-- ADD : START -->
          <CAdd></CAdd>
          <!-- ADD : END -->
          <form  v-if="isShowform" action method="POST" class="form-inline justify-content-between">
            <div class="form-group">
              <label class="sr-only" for>label</label>
              <input v-model="taskTitle" type="text" class="form-control" placeholder="Task Name" />
            </div>
            <div class="form-group">
              <label class="sr-only" for>label</label>
              <select name="ds" class="form-control" required="required" v-model="taskLevel">
                <option value="0">Cấp 1</option>
                <option value="1">Cấp 2</option>
                <option value="2">Cấp 3</option>
              </select>
            </div>

            <button  v-if="this.taskSelected === null" type="button" class="btn btn-primary" v-on:click="handleAddNewTaskVue">Thêm mới</button>
            <button  v-else type="button" class="btn btn-primary" v-on:click="handleUpdateTaskVue">Cập nhập</button>
            <button type="button" class="btn btn-secondary" v-on:click="handleCancel">Hủy</button>
          </form>
        </b-col>
  <!-- FORM : END -->
  
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapState,mapActions } from 'vuex';

import CAdd from "./c-add";
export default {
  name: "c-form",
  components: {
    CAdd
  },
  computed:{
    ...mapState([ 'isShowform','taskSelected'])
  },
  data() {
    return {
        taskTitle: '',
        taskLevel:0

    };
  },
  watch:{
      taskSelected: function(newData,oldData) {
        if(newData !== null){
          this.taskTitle = newData.title;
          this.taskLevel = newData.level;
        }

      }
  },
  methods:{
     ...mapActions([
        'handleToogleForm','handleAddNewTask','handleUpdateTasks'
    ]),
    handleUpdateTaskVue(){
      var data = { 
        id:this.taskSelected.id, 
        title:this.taskTitle,
        level: parseInt(this.taskLevel)
      }
      this.handleUpdateTasks(data);
      this.handleResetData();
    },
    handleAddNewTaskVue(){
      if(this.taskTitle.trim()){
        let data = {
          id: uuidv4(),
          title: this.taskTitle,
          level: parseInt(this.taskLevel)
        }
        this.handleAddNewTask(data);
        this.handleCancel();
      }else{
        alert('Vui lòng nhập vào ô tiêu đề');
      }
      
    },
    handleCancel(){
      this.handleToogleForm();
    },
    handleResetData(){
       this.taskTitle = '';
       this.taskLevel = 0
    }

  }
};
</script>

