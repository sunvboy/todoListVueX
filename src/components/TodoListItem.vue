<template>
  <tr v-if="task.length !== 0">
    <td class="text-center">{{index+1}}</td>
    <td>{{task.title}}</td>
    <td class="text-center">
      <span class="badge " v-bind:class="getClassNameLevel">{{getNameLevel}}</span>
    </td>
    <td>
      <button type="button" class="btn btn-warning" v-on:click="handleEditVue()">Edit</button>
      <button type="button" class="btn btn-danger" v-on:click="handleDeleteVue(task.id)">Delete</button>
    </td>
  </tr>
  
</template>

<script>
import mapLevel from '../data/level';
import { mapActions } from 'vuex';
export default {
  name: "todo-list-item",
  props: {
    task: { type: Object, default: null },
    index: { type: Number },
  },
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
    ...mapActions([
      'handleDelete','handleEdit'
    ]),
    handleDeleteVue(ID){
      this.handleDelete(ID)
    },
    handleEditVue(){
      this.handleEdit(this.task)
    }
  }
};
</script>

