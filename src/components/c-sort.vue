<template>
  <div class="col-12">
    <div class="form-group">
      <b-dropdown id="dropdown-1" text="Sort by">
        <b-dropdown-item v-on:click="handleSortVue('title','asc')">Title ASC</b-dropdown-item>
        <b-dropdown-item v-on:click="handleSortVue('title','desc')">Title DESC</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item v-on:click="handleSortVue('level','asc')">LEVEL ASC</b-dropdown-item>
        <b-dropdown-item v-on:click="handleSortVue('level','desc')">LEVEL DESC</b-dropdown-item>
      </b-dropdown>
      <span class="order badge badge-success badge-medium">{{orderTitle}} - {{orderDir}}</span>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions} from 'vuex';
export default {
  name: "c-sort",
  data() {
    return {};
  },
  computed: {
    ...mapState([
      'orderTitle','orderDir'
    ])
  },
  methods:{
    ...mapActions([
      'handleSort'
    ]),
    handleSortVue(orderTitle,orderDir){
      let data = {orderTitle,orderDir}
      this.handleSort(data);
    }
  }
};
</script>

<style>
  .order{
    text-transform: uppercase;

  }
</style>