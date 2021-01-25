<template>
  <ul>
    <todo-item v-for="(t,i) of tasks" :key="i" :task="t" :i="i" @del="del"></todo-item>
  </ul>
</template>
<script>
import TodoItem from "./TodoItem"
export default {
  props:["tasks"],
  methods:{
    del(i){
      if(confirm("是否继续删除？")){
        this.tasks.splice(i,1)
      }
    }
  },
  components:{
    TodoItem
  }
}
</script>
