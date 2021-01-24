<template>
  <div>
    <h1>待办事项列表</h1>
    <todo-add :tasks="tasks"></todo-add>
    <todo-list :tasks="tasks"></todo-list>
  </div>
</template>
<script>
import TodoAdd from "./TodoAdd"
import TodoList from "./TodoList"

export default {
  data(){
    return {
      tasks:["吃饭","睡觉","打亮亮"]
    }
  },
  components:{ 
    TodoAdd, TodoList 
//自动翻译为: 
// todo-add   todo-list
  }
}
</script>
