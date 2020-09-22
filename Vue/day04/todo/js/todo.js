Vue.component("todo",{
  template:`<div>
    <h3>待办事项</h3>
      <todo-add></todo-add>
      <todo-list></todo-list>
  </div>`,
  components:{
    todoAdd,todoList
  },
  // data(){

  // }
})