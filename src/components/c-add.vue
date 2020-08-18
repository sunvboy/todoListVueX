<template>
  <div class="form-group add-task">
    <button v-if="!isShowform" v-on:click="onClickAddTask" type="button" class="btn btn-info btn-block">Add Task</button>
    <button v-else v-on:click="onClickAddTask" type="button" class="btn btn-primary btn-block">Close Task</button>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
export default {
  name: "c-add",
  data() {
    return {

    };
  },
  methods:{
    ...mapActions([
        'handleToogleForm'
    ]),
    onClickAddTask(){
        //console.log('onclick c-add.vue');
        this.handleToogleForm();
    }
  },
  computed:{
    ...mapState([ 'isShowform'])
  }
};
</script>

