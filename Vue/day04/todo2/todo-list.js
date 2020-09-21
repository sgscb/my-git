var todoList={
  template:`<ul>
    <todo-item v-for="(t,i) of tasks" :key="i" :t="t" :i="i"></todo-item>
  </ul>`,
  props:[ "tasks" ],                               
  components:{
    todoItem,

  }
};