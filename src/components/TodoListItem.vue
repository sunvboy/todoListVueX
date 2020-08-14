<template>
  <tr v-if="task.length !== 0">
    <td class="text-center">{{index+1}}</td>
    <td>{{task.title}}</td>
    <td class="text-center">
      <span class="badge " v-bind:class="getClassNameLevel">{{getNameLevel}}</span>
    </td>
    <td>
      <button type="button" class="btn btn-warning" v-on:click="handleEdit()">Edit</button>
      <button type="button" class="btn btn-danger" v-on:click="handleDelete(task.id)">Delete</button>
    </td>
  </tr>
  
</template>

<script>
import mapLevel from '../data/level';
export default {
  name: "todo-list-item",
  props: {
    task: { type: Object, default: null },
    index: { type: Number },
  },
  created(){ 

  }
  ,
  computed: {
    getNameLevel() {
 
    return this.mapLevel[this.task.level].name;
    },
    getClassNameLevel() {

    return this.mapLevel[this.task.level].levelClass;
    }
  },
  data() {
    return {
        mapLevel: mapLevel
    };
  },
  methods:{
    handleDelete(data){
      

      this.$emit('handleDelete',data);
  

    },
    handleEdit(){
      this.$emit('handleEdit',this.task);

    }
  }
};
</script>

