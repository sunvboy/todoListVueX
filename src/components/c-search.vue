<template>
  <div class="col-12">
    <div class="input-group">
      <input 
      v-bind:value="strSearch"
      v-on:input = "handleSearchInput"
      
      type="text" class="form-control" placeholder="Search for..." />
      <span class="input-group-append">
        <button class="btn btn-info" type="button" v-on:click="hanldeClear">Clear!</button>
      </span>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
  name: "c-search",
  data() {
    return {};
  },
  computed: {
    ...mapState([
      'strSearch'
    ])
  },
  methods:{
    ...mapActions([
      'handleSearch'
    ]),
    handleSearchInput(e){
      //console.log('c-search',e.target.value);
      this.handleSearch(e.target.value);
    },
    hanldeClear(){
      //this.$store.dispatch('handleSearch','');
      this.handleSearch();
    }

  }
};
</script>

