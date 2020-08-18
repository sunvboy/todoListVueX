<template>

  <div id="app">
    <b-container>
      <!-- TITLE : START -->
      <CTitle></CTitle>
      <!-- TITLE : END -->
      <b-row>
        <!-- CONTROL (SEARCH + SORT + ADD) : START -->
        <b-col lg="6" cols="12">
          <b-row>
            <!-- SORT : START -->
            <CSort></CSort>
            <!-- SORT : END -->
            <!-- SEARCH : START -->
            <CSearch ></CSearch>
            <!-- SEARCH : END -->
          </b-row>
        </b-col>
        <!-- CONTROL (SEARCH + SORT + ADD) : END -->
        <CForm 
        
        ></CForm>

      </b-row>

      <!-- LIST : START -->
      <TodoListTable></TodoListTable>
    </b-container>

    <CPopup v-bind:isPopup="isPopup" v-on:handleClose="handleClose"></CPopup>


  </div>
</template>

<script>

import TodoListTable from "./components/TodoListTable";
import CTitle from "./components/c-title";
import CSort from "./components/c-sort";
import CSearch from "./components/c-search";
import CForm from "./components/c-from";
import CPopup from "./components/c-popup";
import { mapState } from 'vuex'

export default {
  name: "app",
  components: {
    TodoListTable,
    CTitle,
    CSort,
    CSearch,
    CForm,
    CPopup,
  },
  data() {
    return {
      isPopup: false,
    };
  },
  computed: { 
    ...mapState(['listTask'])
  },
  watch:{
    listTask: function(newlistTask){
      var taskString = JSON.stringify(newlistTask);
      localStorage.setItem('listTaskLocal',taskString);
    }
  },
  methods:{
   handleClose(){
      this.isPopup = !this.isPopup;
    }
  }
};
</script>

<style >
body {
  padding: 100px 0;
}
.table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
  vertical-align: middle;
}

.container > .row {
  margin-top: 20px;
  margin-bottom: 30px;
}

span.badge-medium {
  padding: 11px 10px;
  margin: 0px 8px;
  font-size: 16px;
  display: inline-block;
  vertical-align: top;
}

@media (max-width: 992px) {
  .add-task {
    margin-top: 50px;
  }
}
.overlay.active {
  visibility: visible !important;
  opacity: 1 !important;
  z-index: 9999;
}
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06D85F;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}
</style>