var todoList={
  props:["tasks"],
  template:`<ul>
    <todo-item v-for="(t,i) of tasks" :key="i" :t="t" :i="i" :tasks="tasks"></todo-item>
  </ul>`,
  // data () {
  //   return "tasks"
  // },
  components:{
    todoItem
  }
}