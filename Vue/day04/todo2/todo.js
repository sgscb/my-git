Vue.component("todo",{
  template:`<div>
  <h3>待办实现列表</h3>
    <todo-add></todo-add>
    <todo-list></todo-list>
  </div>`,
  components:{
    todoAdd,todoList
  },
  data(){
    return {
      tasks:["吃饭","睡觉","打亮亮"]
    }
  }
})