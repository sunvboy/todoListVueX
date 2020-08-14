<template>
  <div>
    <div class="card card-success">
      <table class="table table-hover">
        <thead>
          <tr>
            <th style="width: 10%" class="text-center">#</th>
            <th>Task</th>
            <th style="width: 20%" class="text-center">Level</th>
            <th style="width: 160px">Action</th>
          </tr>
        </thead>

        <tbody v-if="listTask.length !== 0">
         
          <TodoListItem
          

           v-for="(task,index) in listTask" 
           v-bind:key="task.id" 
           v-bind:index="index" 
           v-bind:task="task"
           v-on:handleDelete = "handleDelete"
           v-on:handleEdit = "handleEdit"
           
           
           ></TodoListItem>
        </tbody>
         <tbody v-if="listTask.length == 0">
           <tr>
             <td colspan="4">Không có dữ liệu</td>
           </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
import { mapState } from 'vuex';
export default {
  name: "todo-list",
  components: {
    TodoListItem,
  },
  computed: {
      ...mapState([
        'listTask'

      ])
  },
  data() {
    return {
        

    };
  },created(){

      let listTaskLocal = localStorage.getItem('listTaskLocal');
      console.log(listTaskLocal);

      if(listTaskLocal !== null){
          this.listTask = JSON.parse(listTaskLocal);
      }else{
        this.listTask = [];
      }

  },
  methods:{
    handleDelete(data){
      
      this.$emit('handleDelete',data);

    },
    handleEdit(data){
      
      this.$emit('handleEdit',data);

    }
  }
};
</script>

