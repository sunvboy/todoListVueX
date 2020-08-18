//import dataTask from "../data/task";
let listTaskLocal = localStorage.getItem('listTaskLocal') || [];

export default {
    listTask: JSON.parse(listTaskLocal),
    isShowform:false,
    strSearch: '',
    orderTitle: 'title',
    orderDir: 'asc',
    taskSelected: null

}