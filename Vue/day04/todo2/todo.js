Vue.component("todo",{
  template:`<div>
  <h3>待办实现列表</h3>
    <todo-add :tasks="tasks"></todo-add>
    <todo-list :tasks="tasks"></todo-list>
  </div>`,
  data(){
    return {
      tasks:["吃饭","睡觉","打亮亮"]
    }
  },
      components:{
        todoAdd,todoList
  }
})