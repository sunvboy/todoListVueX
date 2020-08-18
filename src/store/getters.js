export default {

    listTaskSearchSort: state => {
      //search
        let strSearch = state.strSearch.toLowerCase();
        var newArray = [];
        state.listTask.forEach(function(item,index){
          if(item.title.toLowerCase().includes( strSearch ) === true){
            newArray.push(item);
          }
        });
        //sort
        var listTask = [...newArray];
        listTask.sort(function(a,b){
          let numberSort = state.orderDir === 'asc' ? -1 : 1;
          if(a[state.orderTitle] < b[state.orderTitle]) return numberSort;
          else if(a[state.orderTitle] > b[state.orderTitle])  return numberSort*(-1);
          return 0;
    
        });
         return listTask
        
      }

}